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
