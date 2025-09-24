# Instaffo Copywriter - Figma Plugin

An AI-powered copywriting plugin for Figma that helps designers and marketers generate compelling copy using OpenAI's GPT-4o-mini model. Features German language support, advanced customization options, and seamless Figma integration.

## Features

✨ **Core Functionality**
- Auto-fill text from selected Figma elements
- Editable text input with real-time preview
- German/English language toggle
- Advanced settings (tone, length, target audience)

🎯 **Smart Copy Generation**
- 14 predefined placeholder types (headlines, CTAs, descriptions, etc.)
- AI-powered copy refinement
- Multiple variation suggestions
- Context-aware content generation

🔐 **Secure & Professional**
- JWT-based authentication
- Secure OpenAI API integration
- CORS protection
- Rate limiting and error handling

## Quick Start

### 1. Setup Environment

```bash
# Clone and install dependencies
npm install

# Copy environment file and configure
cp .env.example .env
# Edit .env and add your OpenAI API key
```

### 2. Start the Server

```bash
npm run server
```

### 3. Build the Plugin

```bash
npm run build
```

### 4. Install in Figma

1. Open Figma Desktop App
2. Go to Plugins → Development → Import plugin from manifest
3. Select the `manifest.json` file from the project root
4. The plugin will be available in your plugins list

## Usage

### Demo Credentials
- Email: `demo@instaffo.com`
- Password: `demo123`

### Workflow
1. **Select text elements** in Figma (optional)
2. **Open the plugin** from the plugins menu
3. **Login** with demo credentials
4. **Generate tab**: Enter custom text or use selected elements
5. **Configure settings**: Choose tone, length, and target audience
6. **Placeholders tab**: Insert predefined copy templates
7. **Results tab**: Review, edit, refine, and apply generated copy

## Project Structure

```
├── manifest.json          # Figma plugin configuration
├── src/
│   └── code.ts            # Main plugin logic (TypeScript)
├── ui.html                # Plugin user interface
├── server.js              # Node.js backend with OpenAI integration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── .env.example          # Environment variables template
```

## API Endpoints

- `POST /api/login` - User authentication
- `POST /api/verify-token` - Token validation
- `POST /api/generate-copy` - AI copy generation
- `POST /api/refine-copy` - Copy refinement
- `GET /api/health` - Server health check

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | Your OpenAI API key | Required |
| `JWT_SECRET` | JWT signing secret | `instaffo-copywriter-secret-key-2024` |
| `PORT` | Server port | `3001` |
| `NODE_ENV` | Environment mode | `development` |

### Advanced Settings

- **Tone Options**: Professional, Casual, Friendly, Formal, Playful, Urgent
- **Length Options**: Short, Medium, Long
- **Languages**: English, German
- **Placeholder Types**: 14 predefined categories

## Development

### Building
```bash
npm run build    # Compile TypeScript and copy files
npm run dev      # Watch mode for development
```

### Testing
```bash
npm run server   # Start the backend server
```

## Deployment

### Production Setup
1. Set `NODE_ENV=production` in your environment
2. Use a proper database instead of in-memory storage
3. Configure proper CORS origins
4. Use environment-specific JWT secrets
5. Set up proper SSL certificates

### Environment Variables for Production
```bash
OPENAI_API_KEY=your-production-openai-key
JWT_SECRET=your-secure-jwt-secret
NODE_ENV=production
PORT=3001
```

## Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- CORS protection
- Helmet.js security headers
- Input validation and sanitization
- Rate limiting (recommended for production)

## Troubleshooting

### Common Issues

1. **Plugin not loading**
   - Ensure `manifest.json` is in the root directory
   - Check that `dist/code.js` exists after building
   - Verify Figma has network access permissions

2. **Server connection failed**
   - Ensure server is running on port 3001
   - Check firewall settings
   - Verify CORS configuration

3. **OpenAI API errors**
   - Check API key is valid and has credits
   - Verify network connectivity
   - Check rate limits

### Debug Mode
Set `NODE_ENV=development` to see detailed error messages.

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review server logs for error details
3. Ensure all dependencies are properly installed
4. Verify environment configuration