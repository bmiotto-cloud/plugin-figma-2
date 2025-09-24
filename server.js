const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security and middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disable for development
    crossOriginEmbedderPolicy: false
}));

app.use(cors({
    origin: ['http://localhost:3000', 'https://figma.com', 'https://*.figma.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key-here'
});

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'instaffo-copywriter-secret-key-2024';

// In-memory user storage (replace with database in production)
const users = [
    {
        id: 1,
        email: 'demo@instaffo.com',
        password: bcrypt.hashSync('demo123', 10), // hashed 'demo123'
        createdAt: new Date()
    },
    {
        id: 2,
        email: 'test@example.com',
        password: bcrypt.hashSync('test123', 10), // hashed 'test123'
        createdAt: new Date()
    }
];

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
};

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        service: 'Instaffo Copywriter API',
        timestamp: new Date().toISOString(),
        openaiConfigured: !!process.env.OPENAI_API_KEY
    });
});

// Authentication endpoints
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user.id, 
                email: user.email 
            },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/verify-token', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.json({ valid: false });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.json({ valid: false });
        }
        res.json({ valid: true, user });
    });
});

// Copy generation endpoint
app.post('/api/generate-copy', authenticateToken, async (req, res) => {
    try {
        const { 
            input, 
            tone = 'professional', 
            length = 'medium', 
            targeting = '', 
            language = 'english',
            selectedElements = []
        } = req.body;

        if (!input || !input.trim()) {
            return res.status(400).json({ message: 'Input text is required' });
        }

        // Construct the prompt based on parameters
        const languageInstruction = language === 'german' ? 
            'Please respond in German.' : 
            'Please respond in English.';

        const toneMapping = {
            professional: 'professional and authoritative',
            casual: 'casual and conversational',
            friendly: 'friendly and approachable',
            formal: 'formal and respectful',
            playful: 'playful and creative',
            urgent: 'urgent and compelling'
        };

        const lengthMapping = {
            short: 'Keep it concise and brief.',
            medium: 'Provide a moderate amount of detail.',
            long: 'Be comprehensive and detailed.'
        };

        const systemPrompt = `You are an expert copywriter specializing in marketing and advertising copy. ${languageInstruction}

Your task is to take the provided text and improve it or create variations that are more engaging, persuasive, and effective for marketing purposes.

Guidelines:
- Tone: ${toneMapping[tone] || 'professional'}
- Length: ${lengthMapping[length] || 'moderate'}
${targeting ? `- Target audience: ${targeting}` : ''}
- Focus on clarity, impact, and conversion
- Create 3 different variations
- Each variation should have a distinct approach while maintaining the core message

Return your response as a JSON array of objects, each with a "text" property containing the copy variation.`;

        const userPrompt = `Original text to improve or create variations for:

"${input}"

Please provide 3 improved variations of this copy.`;

        // Call OpenAI API
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            temperature: 0.8,
            max_tokens: 1000
        });

        const aiResponse = completion.choices[0].message.content;
        
        // Try to parse as JSON, fallback to text parsing
        let results;
        try {
            results = JSON.parse(aiResponse);
        } catch (parseError) {
            // Fallback: split by numbers or create variations manually
            const variations = aiResponse.split(/\d+\.|\n\n/).filter(v => v.trim().length > 10);
            results = variations.slice(0, 3).map(text => ({ text: text.trim() }));
        }

        // Ensure we have at least some results
        if (!Array.isArray(results) || results.length === 0) {
            results = [
                { text: aiResponse },
                { text: `${tone.charAt(0).toUpperCase() + tone.slice(1)} version: ${input}` },
                { text: `Alternative: ${input}` }
            ];
        }

        // Log for debugging
        console.log(`Generated ${results.length} copy variations for user ${req.user.email}`);

        res.json({
            success: true,
            results: results.slice(0, 5), // Limit to 5 results max
            metadata: {
                tone,
                length,
                language,
                targeting,
                originalInput: input
            }
        });

    } catch (error) {
        console.error('Copy generation error:', error);
        
        if (error.code === 'insufficient_quota') {
            return res.status(429).json({ 
                message: 'OpenAI API quota exceeded. Please try again later.' 
            });
        }

        if (error.code === 'invalid_api_key') {
            return res.status(500).json({ 
                message: 'OpenAI API configuration error.' 
            });
        }

        res.status(500).json({ 
            message: 'Failed to generate copy. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Copy refinement endpoint
app.post('/api/refine-copy', authenticateToken, async (req, res) => {
    try {
        const { originalText, refinement, language = 'english' } = req.body;

        if (!originalText || !refinement) {
            return res.status(400).json({ message: 'Original text and refinement instruction are required' });
        }

        const languageInstruction = language === 'german' ? 
            'Please respond in German.' : 
            'Please respond in English.';

        const systemPrompt = `You are an expert copywriter specializing in refining and improving marketing copy. ${languageInstruction}

Your task is to take the original copy and refine it based on the specific instruction provided. Make targeted improvements while maintaining the core message and intent.

Guidelines:
- Apply the specific refinement requested
- Maintain the original tone and style unless asked to change it
- Keep the same approximate length unless asked to expand or condense
- Focus on making the copy more effective and engaging
- Return only the refined copy, not explanations`;

        const userPrompt = `Original copy:
"${originalText}"

Refinement instruction:
"${refinement}"

Please provide the refined version:`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            temperature: 0.7,
            max_tokens: 500
        });

        const refinedText = completion.choices[0].message.content.trim();

        console.log(`Refined copy for user ${req.user.email}`);

        res.json({
            success: true,
            refinedText,
            originalText,
            refinement
        });

    } catch (error) {
        console.error('Copy refinement error:', error);
        
        if (error.code === 'insufficient_quota') {
            return res.status(429).json({ 
                message: 'OpenAI API quota exceeded. Please try again later.' 
            });
        }

        res.status(500).json({ 
            message: 'Failed to refine copy. Please try again.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// User profile endpoint
app.get('/api/profile', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
    });
});

// Usage statistics endpoint
app.get('/api/usage', authenticateToken, (req, res) => {
    // In a real app, this would come from a database
    res.json({
        userId: req.user.userId,
        copiesGenerated: Math.floor(Math.random() * 100) + 50,
        copiesRefined: Math.floor(Math.random() * 50) + 20,
        lastUsed: new Date().toISOString(),
        planType: 'free'
    });
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({ 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Instaffo Copywriter API server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔐 OpenAI configured: ${!!process.env.OPENAI_API_KEY}`);
    console.log(`👥 Demo users available:`);
    console.log(`   📧 demo@instaffo.com / demo123`);
    console.log(`   📧 test@example.com / test123`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});

module.exports = app;
=======
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // or use openai sdk
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
const ACCESS_PASSWORD = process.env.PLUGIN_ACCESS_PASSWORD || null;
if (!OPENAI_KEY) {
  console.error("Set OPENAI_API_KEY in env");
  process.exit(1);
}

const OPENAI_API = 'https://api.openai.com/v1/responses'; // example endpoint for newer models (adjust if needed)

function buildPrompt({ input, settings, placeholder, changeRequest }) {
  // Controlled prompt injection & template
  const tone = settings.tone || 'regular';
  const length = settings.length || 'same';
  const cust = settings.cust ? `Customer: ${settings.cust.toUpperCase()}.` : '';
  const german = settings.german ? true : false;

  let instructions = [
    `You are a professional UX copywriter assistant named Instaffo Copywriter.`,
    `Rewrite or improve the following copy according to the user's instructions.`,
    `Tone: ${tone}.`,
    `Length preference: ${length}.`,
    cust,
    `Use UX writing best practices: clarity, brevity, scannability, and a single-call-to-action where appropriate.`,
  ].join(' ');

  if (placeholder) {
    instructions += ` Keep the placeholder token ${placeholder} intact in the output.`;
  }

  if (changeRequest) {
    instructions += ` The user requested iterative changes — base the changes on this new text: "${changeRequest}".`;
  }

  let prompt = `${instructions}\n\nOriginal copy:\n${input}\n\nProvide only the improved copy (no analysis).`;

  if (german) {
    prompt += `\n\nTranslate the improved copy to German. Output must be in German.`;
  }

  // length guidance
  if (length === 'shorter') prompt += ` Keep it shorter than original.`;
  if (length === 'longer') prompt += ` Expand and add helpful details while keeping tone.`;
  // safety: restrict content
  prompt += `\n\nOutput:`;

  return prompt;
}

app.post('/generate', async (req, res) => {
  try {
    // Optional auth for plugin access — you can require a password header or body field
    const auth = req.headers['x-plugin-password'] || req.body.password || null;
    if (ACCESS_PASSWORD && auth !== ACCESS_PASSWORD) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { input, settings = {}, placeholder = null, changeRequest = null } = req.body;
    if (!input) return res.status(400).json({ error: 'Missing input' });

    const prompt = buildPrompt({ input, settings, placeholder, changeRequest });

    const payload = {
      model: "gpt-4o-mini", // request GPT-4o-mini
      input: prompt,
      max_output_tokens: 400
    };

    const response = await fetch(OPENAI_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("OpenAI error:", text);
      return res.status(500).json({ error: 'AI generation failed' });
    }
    const json = await response.json();
    // For Responses API, extract text (structure may vary)
    let suggestion = "";
    if (json.output?.[0]?.content) {
      // try common shapes
      const contentItem = json.output[0].content.find(c => c.type === 'output_text') || json.output[0].content[0];
      suggestion = contentItem?.text || JSON.stringify(contentItem) || '';
    } else if (json.choices && json.choices[0]) {
      suggestion = json.choices[0].message?.content || json.choices[0].text || '';
    } else {
      suggestion = JSON.stringify(json).slice(0, 2000);
    }

    res.json({ suggestion: suggestion.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server failed' });
  }
});

// Simple auth endpoint for plugin login (24-hour session)
app.post('/auth', (req, res) => {
  const { password } = req.body;
  if (ACCESS_PASSWORD && password === ACCESS_PASSWORD) {
    // In production: create signed cookie / JWT with 24h expiry
    // For demo: return a short-lived token
    return res.json({ ok: true, token: 'valid-session-token' });
  }
  res.status(401).json({ ok: false });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on ${port}`));
