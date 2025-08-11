# Deployment Guide for Sky Wyatt EPK

## Overview
This guide covers deploying the Sky Wyatt EPK website to various hosting platforms.

## Local Development

### Quick Start
```bash
# Navigate to project directory
cd sky-wyatte-epk

# Start local server
python -m http.server 8000

# Or using Node.js
npx http-server

# Visit http://localhost:8000 in your browser
```

## GitHub Pages Deployment

### Automatic Deployment
1. Push your code to the main branch
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save

### Manual Deployment
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages

# Return to main branch
git checkout main
```

## Netlify Deployment

### Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Wait for deployment
4. Customize your domain

### Git Integration
1. Connect your GitHub repository
2. Set build command: (leave empty for static sites)
3. Set publish directory: `.` (root)
4. Deploy automatically on push

## Vercel Deployment

### CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Git Integration
1. Connect your GitHub repository
2. Vercel will auto-detect it's a static site
3. Deploy automatically on push

## Custom Domain Setup

### DNS Configuration
1. Add CNAME record pointing to your hosting provider
2. Wait for DNS propagation (up to 48 hours)
3. Configure SSL certificate (automatic on most platforms)

### Example DNS Records
```
# For GitHub Pages
CNAME: www.yourdomain.com → username.github.io

# For Netlify
CNAME: www.yourdomain.com → yoursite.netlify.app

# For Vercel
CNAME: www.yourdomain.com → yoursite.vercel.app
```

## Environment Variables

### Production Settings
```bash
# Set production environment
NODE_ENV=production

# API endpoints (if applicable)
API_URL=https://api.yourdomain.com
```

## Performance Optimization

### Pre-deployment Checklist
- [ ] Images are optimized (max 500KB for photos)
- [ ] CSS and JavaScript are minified
- [ ] Audio files are compressed
- [ ] Favicon is set
- [ ] Meta tags are complete
- [ ] Social media tags are added

### Post-deployment Testing
- [ ] Website loads on desktop
- [ ] Website loads on mobile
- [ ] All links work correctly
- [ ] Contact form functions
- [ ] Lightbox works on all images
- [ ] Audio players function properly

## Monitoring & Analytics

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to `index.html`
3. Monitor visitor behavior

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile responsiveness

## Troubleshooting

### Common Issues

#### Images Not Loading
- Check file paths
- Verify image optimization
- Check file permissions

#### Audio Not Playing
- Verify audio file formats
- Check browser compatibility
- Test on different devices

#### Lightbox Not Working
- Ensure Lightbox CSS/JS is loaded
- Check image paths in JavaScript
- Verify data attributes

#### Mobile Issues
- Test responsive design
- Check touch interactions
- Verify viewport meta tag

### Debug Steps
1. Check browser console for errors
2. Verify all files are uploaded
3. Test on different browsers
4. Check hosting provider logs

## Security Considerations

### HTTPS
- Enable SSL certificate
- Redirect HTTP to HTTPS
- Use secure cookies if applicable

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com;
               style-src 'self' 'unsafe-inline' fonts.googleapis.com cdnjs.cloudflare.com;
               font-src fonts.gstatic.com;
               img-src 'self' data:;">
```

## Backup & Recovery

### Regular Backups
- Backup code repository
- Backup media files
- Document configuration changes

### Recovery Plan
1. Restore from git repository
2. Re-upload media files
3. Reconfigure hosting settings
4. Test functionality

## Support

For deployment issues:
1. Check hosting provider documentation
2. Review error logs
3. Test locally first
4. Contact Twin Note Music for assistance
