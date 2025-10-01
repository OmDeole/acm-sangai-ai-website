# 🚀 ACM SIGAI Website - Deployment Guide

## ✅ Changes Made

### 1. **3D Model Interaction - FIXED**
- Enabled controls in the Sketchfab iframe (`ui_controls=1`, `ui_hint=2`)
- Removed autospin (`autospin=0`) for better user control
- You can now zoom, rotate, and interact with the 3D brain model

### 2. **Team Section - SIMPLIFIED**
- Organized team by years (2024-25, 2023-24)
- Added tabs for Faculty, Leadership, and Core Team
- Reduced card complexity (removed long bios)
- Cleaner, minimal design with glassmorphism

### 3. **Codebase Optimization**
- ✅ Removed 47 unused UI components
- ✅ Kept only essential components:
  - `button.tsx` (Contact form)
  - `input.tsx` (Contact form)
  - `textarea.tsx` (Contact form)
  - `tabs.tsx` (Team section)
  - `timeline.tsx` (Events section)
  - `TiltedCard.tsx` (Events & Projects)
  - `card-spotlight.tsx` (About section)
  - `pointer-highlight.tsx` (About section)
  - `layout-text-flip.tsx` (Hero section)

---

## 📦 Pre-Deployment Checklist

### 1. **Verify Dependencies**
```bash
# Install all dependencies
npm install

# or with bun
bun install
```

### 2. **Build Test Locally**
```bash
# Test production build
npm run build

# Start production server
npm start
```

**Expected Output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Finalizing page optimization
```

### 3. **Check for Build Errors**
Common issues to fix:

**❌ TypeScript Errors:**
```bash
npm run build
# Look for any type errors and fix them
```

**❌ Image Optimization:**
- All images use Unsplash URLs (external)
- Add `images.unsplash.com` to `next.config.ts`

**❌ Environment Variables:**
- None required for this project ✅

---

## 🌐 Deployment Platforms

### **Option 1: Vercel (Recommended)**

Vercel is the best platform for Next.js apps - zero configuration needed.

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ACM SIGAI website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Build Settings** (Auto-detected):
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

#### ⚠️ Potential Issues:

**Issue 1: Build fails with "Module not found"**
```bash
# Solution: Ensure all imports are correct
npm run build # Test locally first
```

**Issue 2: Fonts not loading**
- Google Fonts are imported in `globals.css`
- Should work automatically ✅

**Issue 3: Iframe blocked**
```
# Sketchfab iframe might be blocked
# Add to next.config.ts if needed
```

---

### **Option 2: Netlify**

#### Steps:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Select repository
5. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20.x

#### **Important:** Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
```

---

### **Option 3: Custom Server (VPS/Cloud)**

#### Requirements:
- Node.js 20+
- PM2 (process manager)

#### Steps:
```bash
# 1. Clone repository
git clone <your-repo>
cd acm-sigai-website

# 2. Install dependencies
npm install

# 3. Build
npm run build

# 4. Install PM2
npm install -g pm2

# 5. Start with PM2
pm2 start npm --name "acm-sigai" -- start

# 6. Setup auto-restart
pm2 startup
pm2 save
```

#### **Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔧 Configuration Files

### **next.config.ts** (Update if needed)

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Enable static exports if needed
  // output: 'export', // Uncomment for static site
};

export default nextConfig;
```

### **package.json** (Verify scripts)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## ⚠️ Common Deployment Problems & Solutions

### **Problem 1: Build Fails - Out of Memory**
```bash
# Solution: Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

Add to `package.json`:
```json
{
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
}
```

### **Problem 2: Hydration Errors**
```
Error: Hydration failed because the initial UI does not match...
```

**Causes:**
- Using browser-only APIs during SSR
- Date/time rendering differences

**Solutions:**
- Use `"use client"` directive (already added ✅)
- Wrap browser code in `useEffect`

### **Problem 3: 3D Model (Iframe) Not Loading**

**Issue:** Sketchfab iframe blocked by CSP

**Solution:** Add to `next.config.ts`:
```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "frame-src 'self' https://sketchfab.com https://*.sketchfab.com;"
        },
      ],
    },
  ];
},
```

### **Problem 4: Fonts Not Loading**

**Check:** Google Fonts import in `globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
```

✅ Already included

### **Problem 5: Images Not Optimizing**

**Issue:** Next.js Image component requires configuration

**Solution:** Use `next/image` or configure external domains in `next.config.ts`

Currently using regular `<img>` tags - works fine for external URLs ✅

### **Problem 6: Slow Load Times**

**Optimizations:**
1. **Enable Compression** (Auto-enabled on Vercel/Netlify)
2. **Lazy Load Images** (Already using `loading="lazy"` where needed)
3. **Code Splitting** (Next.js does this automatically)
4. **Remove Unused CSS** (Tailwind purges automatically)

### **Problem 7: Environment Variables Not Working**

For future features requiring env vars:

**Local:** Create `.env.local`
```bash
NEXT_PUBLIC_API_URL=your-api-url
```

**Vercel/Netlify:** Add via dashboard
- Vercel: Settings → Environment Variables
- Netlify: Site settings → Environment variables

---

## 🎯 Performance Optimization Tips

### **1. Image Optimization**
```typescript
// Use Next.js Image component for better performance
import Image from 'next/image';

<Image 
  src="..." 
  alt="..." 
  width={600} 
  height={400}
  loading="lazy"
/>
```

### **2. Enable Compression**
Already handled by Vercel/Netlify ✅

### **3. Analyze Bundle Size**
```bash
npm install -D @next/bundle-analyzer

# Add to next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

### **4. Lighthouse Score**
Run after deployment:
```bash
npx lighthouse https://your-site.vercel.app --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 📊 Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify 3D model interaction (zoom, rotate)
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Test contact form
- [ ] Verify all images load
- [ ] Check team tabs functionality
- [ ] Test event timeline scrolling
- [ ] Verify social media links
- [ ] Run Lighthouse audit
- [ ] Test on different browsers (Chrome, Firefox, Safari)

---

## 🔗 Quick Deploy Commands

### **Vercel CLI (Alternative)**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

### **Netlify CLI (Alternative)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

---

## 🎉 Your Site is Ready!

### **Current Features:**
✅ Interactive 3D brain model (zoom, rotate, pan)  
✅ Minimal team section with year tabs  
✅ Lightweight codebase (47 unused components removed)  
✅ Optimized for deployment  
✅ Responsive design  
✅ Smooth animations  
✅ Fast load times  

### **Recommended Platform:** Vercel
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments
- Perfect for Next.js

---

## 🆘 Need Help?

**Build Issues:**
```bash
npm run build -- --debug
```

**Check Logs:**
- Vercel: Deployment logs in dashboard
- Netlify: Deploy log in dashboard
- Local: Terminal output

**Common Commands:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build

# Test production build locally
npm run build && npm start
```

---

## 📝 Final Notes

1. **Domain Setup:** After deployment, add custom domain in platform settings
2. **Analytics:** Consider adding Google Analytics or Vercel Analytics
3. **Monitoring:** Set up error tracking (Sentry, LogRocket)
4. **Updates:** Use `git push` to trigger auto-deployments
5. **Backup:** Keep repository on GitHub

**You're all set! 🚀**