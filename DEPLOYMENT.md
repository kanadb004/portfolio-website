# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## 🚀 Quick Start

### Option 1: Run Both Servers Locally

```bash
# Install all dependencies
npm run install-all

# Start both frontend and backend
npm run dev
```

### Option 2: Frontend Only (Static Deployment)

Since the portfolio uses static data, you can deploy just the frontend:

```bash
cd frontend
npm run build
```

## 🌐 Frontend Deployment Options

### 1. Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set build command: `cd frontend && npm run build`
4. Set output directory: `frontend/dist`
5. Deploy!

### 2. Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `cd frontend && npm run build`
4. Set publish directory: `frontend/dist`
5. Deploy!

### 3. GitHub Pages

```bash
cd frontend
npm run build
# Copy contents of dist/ to your gh-pages branch
```

## 🖥️ Backend Deployment (Optional)

If you want to use the API backend:

### 1. Railway

1. Connect your GitHub repo
2. Set root directory to `backend`
3. Railway will auto-detect Node.js
4. Deploy!

### 2. Heroku

```bash
# In backend directory
heroku create your-portfolio-api
git subtree push --prefix backend heroku main
```

### 3. DigitalOcean App Platform

1. Connect your GitHub repo
2. Set source directory to `backend`
3. Set build command: `npm install`
4. Set run command: `npm start`

## 🔧 Environment Variables

For production deployment, you may want to set:

### Backend (.env)

```
PORT=5000
NODE_ENV=production
```

### Frontend

Update the API URL in `App.jsx` if using a deployed backend:

```javascript
const response = await fetch("https://your-api-domain.com/api/portfolio");
```

## 📱 Domain Setup

### Custom Domain

1. Purchase a domain from a registrar
2. Point DNS to your hosting platform
3. Configure SSL certificate (usually automatic)

### Subdomain

You can use a subdomain like `portfolio.yourdomain.com`

## 🔍 SEO Optimization

Add to `frontend/index.html`:

```html
<meta
  name="description"
  content="Kanad Bhattacharya - Computer Science Student & Developer"
/>
<meta
  name="keywords"
  content="Kanad Bhattacharya, Computer Science, Developer, Portfolio"
/>
<meta property="og:title" content="Kanad Bhattacharya - Portfolio" />
<meta
  property="og:description"
  content="Computer Science & Engineering Student"
/>
<meta property="og:type" content="website" />
```

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Create a Google Analytics account
2. Add tracking code to `index.html`

## 🚀 Performance Tips

1. **Image Optimization**: Compress images before adding
2. **Code Splitting**: Vite handles this automatically
3. **Caching**: Configure proper cache headers
4. **CDN**: Use a CDN for static assets

## 🔒 Security

1. **HTTPS**: Always use HTTPS in production
2. **CORS**: Configure CORS properly for your domain
3. **Environment Variables**: Never commit sensitive data

## 📝 Maintenance

1. **Updates**: Regularly update dependencies
2. **Monitoring**: Set up uptime monitoring
3. **Backups**: Keep backups of your code
4. **Content**: Keep your portfolio updated

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails**: Check Node.js version compatibility
2. **API Errors**: Verify CORS configuration
3. **Routing Issues**: Configure proper redirects for SPA
4. **Performance**: Optimize images and code splitting

### Getting Help:

- Check the console for error messages
- Verify all dependencies are installed
- Ensure environment variables are set correctly

---

Happy deploying! 🎉
