# Instaffo Copywriter - Demo Guide

## Quick Demo Setup

### 1. Start the Server
```bash
npm run server
```
Server will run on `http://localhost:3001`

### 2. Install in Figma
1. Open Figma Desktop App
2. Go to **Plugins** → **Development** → **Import plugin from manifest**
3. Select `manifest.json` from project root
4. Plugin appears in your plugins list as "Instaffo Copywriter"

### 3. Demo Credentials
- **Email**: `demo@instaffo.com`
- **Password**: `demo123`

## Demo Workflow

### Step 1: Authentication
1. Open the plugin in Figma
2. Login screen appears
3. Use demo credentials to sign in
4. Main interface loads with 3 tabs

### Step 2: Text Selection & Generation
1. **Create text elements** in Figma (optional)
2. **Select text elements** to auto-populate input
3. **Generate Tab**:
   - View selected elements info
   - Edit text in custom input field
   - Configure advanced settings:
     - Tone: Professional, Casual, Friendly, etc.
     - Length: Short, Medium, Long
     - Target Audience: Custom targeting
   - Toggle German/English language
   - Click "Generate Copy 🚀"

### Step 3: Placeholders
1. **Placeholders Tab**:
   - 14 predefined copy types in grid layout
   - Single-click to select placeholder
   - Click "Insert Selected" to add to input
   - Templates include: Headlines, CTAs, Descriptions, etc.

### Step 4: Results & Application
1. **Results Tab**:
   - View generated copy variations
   - **Apply**: Direct application to selected Figma elements
   - **Edit**: Manual editing of generated copy
   - **Refine**: AI-powered iterative improvement
   - **Start Over**: Reset workflow

## Testing Scenarios

### Scenario 1: Basic Copy Generation
1. Create a text element in Figma with "Hello World"
2. Select the element
3. Open plugin, see selection detected
4. Change tone to "Playful"
5. Generate copy
6. Apply result back to Figma

### Scenario 2: Placeholder Workflow
1. Open plugin without selecting elements
2. Go to Placeholders tab
3. Select "Headline" placeholder
4. Insert into input
5. Set target audience: "small business owners"
6. Generate multiple variations

### Scenario 3: German Language Mode
1. Toggle language switch to German (right side)
2. Enter English text
3. Generate copy - should return German variations
4. Test refinement in German

### Scenario 4: Copy Refinement
1. Generate initial copy
2. In results, click "Refine" on any variation
3. Enter refinement instruction: "make it more urgent"
4. See AI-improved version

## API Testing

### Health Check
```bash
curl http://localhost:3001/api/health
```

### Login Test
```bash
curl -X POST http://localhost:3001/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@instaffo.com","password":"demo123"}'
```

### Copy Generation Test (replace TOKEN)
```bash
curl -X POST http://localhost:3001/api/generate-copy \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "input": "Buy our product now",
    "tone": "urgent",
    "length": "short",
    "targeting": "young professionals",
    "language": "english"
  }'
```

## Expected Results

### UI Features
- ✅ Clean, responsive interface
- ✅ Smooth language toggle animation
- ✅ Real-time selection updates
- ✅ Loading states during AI generation
- ✅ Error handling and user feedback

### Figma Integration
- ✅ Automatic text element detection
- ✅ Seamless text application back to Figma
- ✅ Font loading and preservation
- ✅ Selection change detection

### AI Features
- ✅ Context-aware copy generation
- ✅ Multiple variation suggestions
- ✅ Tone and length customization
- ✅ Multilingual support (EN/DE)
- ✅ Iterative refinement

### Security
- ✅ JWT authentication flow
- ✅ Protected API endpoints
- ✅ Secure password handling
- ✅ CORS protection

## Troubleshooting Demo Issues

### Plugin Not Loading
- Ensure `npm run build` was successful
- Check `dist/` folder contains all files
- Verify Figma has network permissions

### Server Connection Failed
- Confirm server is running on port 3001
- Check firewall/antivirus settings
- Verify CORS configuration

### OpenAI Errors (Expected in Demo)
- Demo uses placeholder API key
- Real implementation requires valid OpenAI key
- Error handling should gracefully manage API failures

## Production Notes

### Environment Setup
1. Replace placeholder OpenAI API key in `.env`
2. Set secure JWT secret
3. Configure production database
4. Update CORS origins for your domain
5. Add rate limiting and monitoring

### Security Enhancements
- Use HTTPS in production
- Implement proper user management
- Add request rate limiting
- Set up logging and monitoring
- Use environment-specific secrets

This demo showcases all major features and provides a foundation for production deployment.