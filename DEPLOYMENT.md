# Production Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] Set real OpenAI API key in `.env`
- [ ] Generate secure JWT secret (minimum 32 characters)
- [ ] Configure production database connection
- [ ] Set `NODE_ENV=production`
- [ ] Update CORS origins for your domain
- [ ] Configure SSL certificates

#### Example Production `.env`
```bash
OPENAI_API_KEY=sk-your-real-openai-api-key
JWT_SECRET=your-super-secure-jwt-secret-key-minimum-32-chars
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:pass@host:port/db
CORS_ORIGINS=https://your-domain.com,https://figma.com
```

### 2. Security Hardening
- [ ] Enable HTTPS/SSL in production
- [ ] Implement rate limiting (recommended: 100 requests/hour per user)
- [ ] Add request logging and monitoring
- [ ] Set up IP whitelisting if needed
- [ ] Configure firewall rules
- [ ] Enable database encryption at rest

### 3. Database Setup
Replace in-memory user storage with proper database:

#### PostgreSQL Schema
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);

CREATE TABLE usage_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB
);
```

### 4. Performance Optimization
- [ ] Implement connection pooling for database
- [ ] Add Redis caching for frequently accessed data
- [ ] Configure request compression (gzip)
- [ ] Set up CDN for static assets
- [ ] Implement API response caching

### 5. Monitoring & Logging
- [ ] Set up application logging (Winston/Bunyan)
- [ ] Configure error tracking (Sentry/Rollbar)
- [ ] Implement health check endpoints
- [ ] Set up uptime monitoring
- [ ] Configure alerting for failures

### 6. Backup & Recovery
- [ ] Set up automated database backups
- [ ] Test backup restoration process
- [ ] Document recovery procedures
- [ ] Implement data retention policies

## Deployment Steps

### Option 1: Docker Deployment
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3001
CMD ["npm", "run", "server"]
```

### Option 2: Traditional Server
```bash
# Clone repository
git clone <your-repo>
cd plugin-figma-2

# Install dependencies
npm ci --only=production

# Build application
npm run build

# Start with PM2
pm2 start server.js --name instaffo-copywriter
pm2 save
pm2 startup
```

### Option 3: Cloud Platform (Heroku/Railway/Vercel)
1. Connect repository to platform
2. Configure environment variables
3. Set build command: `npm run build`
4. Set start command: `npm run server`

## Testing in Production

### Health Checks
```bash
# Basic health
curl https://your-domain.com/api/health

# Authentication flow
curl -X POST https://your-domain.com/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

### Load Testing
```bash
# Install artillery
npm install -g artillery

# Create load test config
cat > load-test.yml << EOF
config:
  target: 'https://your-domain.com'
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Login and generate copy"
    flow:
      - post:
          url: "/api/login"
          json:
            email: "test@example.com"
            password: "password"
      - post:
          url: "/api/generate-copy"
          headers:
            Authorization: "Bearer {{ token }}"
          json:
            input: "Test copy generation"
            tone: "professional"
EOF

# Run load test
artillery run load-test.yml
```

## Figma Plugin Store Submission

### 1. Prepare Plugin Package
```bash
# Build for production
npm run build

# Create plugin package
zip -r instaffo-copywriter.zip \
  manifest.json \
  dist/ \
  README.md
```

### 2. Plugin Store Requirements
- [ ] Complete manifest.json with proper metadata
- [ ] Create plugin icon (128x128px)
- [ ] Write comprehensive description
- [ ] Add screenshots/demo GIFs
- [ ] Test on multiple Figma files
- [ ] Ensure cross-platform compatibility

### 3. Submission Checklist
- [ ] Plugin works offline (basic functionality)
- [ ] Handles edge cases gracefully
- [ ] Follows Figma design guidelines
- [ ] Respects user privacy
- [ ] Clear error messages
- [ ] Proper loading states

## Maintenance & Updates

### Regular Tasks
- [ ] Monitor OpenAI API usage and costs
- [ ] Review and rotate JWT secrets quarterly
- [ ] Update dependencies monthly
- [ ] Backup database weekly
- [ ] Check SSL certificate expiration

### User Management
- [ ] Implement user registration flow
- [ ] Add password reset functionality
- [ ] Create admin dashboard
- [ ] Set up usage analytics
- [ ] Plan subscription/pricing model

### Feature Expansion
- [ ] Add more language support
- [ ] Implement team collaboration features
- [ ] Create template library
- [ ] Add brand voice consistency
- [ ] Integrate with marketing tools

## Support & Documentation

### User Documentation
- Create video tutorials
- Write detailed user guide
- Set up FAQ page
- Provide troubleshooting guide

### Developer Documentation
- API documentation with OpenAPI/Swagger
- Architecture overview
- Contributing guidelines
- Release notes template

## Legal & Compliance

### Required Documentation
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Data Processing Agreement (GDPR)
- [ ] Cookie Policy
- [ ] API Usage Terms

### Compliance Considerations
- [ ] GDPR compliance (EU users)
- [ ] CCPA compliance (California users)
- [ ] SOC 2 Type II (enterprise customers)
- [ ] Regular security audits

## Success Metrics

### Key Performance Indicators
- Monthly Active Users (MAU)
- Copy generation success rate
- User retention rate
- API response times
- Error rates
- Customer satisfaction scores

### Monitoring Dashboards
- Real-time usage metrics
- API performance monitoring
- Error tracking and alerting
- User engagement analytics

This guide ensures a smooth transition from development to production-ready deployment.