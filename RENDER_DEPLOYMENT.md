# Render Deployment Guide - Bunmi Alabi Website

## 🚀 Deploy to Render (Free Tier Available)

### Quick Setup (5 minutes)

### Step 1: Prepare Your Repository

1. **Install dependencies locally** (optional, for testing):
   ```bash
   npm install
   ```

2. **Test locally**:
   ```bash
   npm start
   ```
   Visit: http://localhost:3000

### Step 2: Push to GitHub

1. Make sure all files are committed:
   ```bash
   git add .
   git commit -m "Add YouTube API integration with Render support"
   git push origin main
   ```

2. **Important**: The `.env` file is already in `.gitignore` (your API key is safe!)

### Step 3: Deploy on Render

1. **Go to [Render.com](https://render.com)** and sign in (or create account)

2. **Click "New +" → "Web Service"**

3. **Connect your GitHub repository**:
   - Select your repository: `mayowa-kalejaiye/WIBFAIR`
   - Click "Connect"

4. **Configure the service**:
   - **Name**: `bunmi-alabi-website` (or any name)
   - **Region**: Choose closest to Nigeria (e.g., Frankfurt)
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (or paid for better performance)

5. **Add Environment Variable**:
   - Click "Advanced" or scroll down to "Environment Variables"
   - Click "Add Environment Variable"
   - **Key**: `YOUTUBE_API_KEY`
   - **Value**: `AIzaSyC99sdYD_NCbBhOK88-K99309ZF33hPRFI`
   - Click "Add"

6. **Create Web Service**:
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment

### Step 4: Verify Deployment

1. **Check API endpoint**:
   - Visit: `https://your-service-name.onrender.com/api/youtube`
   - Should return JSON with video data

2. **Check website**:
   - Visit: `https://your-service-name.onrender.com`
   - Videos should load after 2-3 seconds

3. **Health check**:
   - Visit: `https://your-service-name.onrender.com/api/health`
   - Should show: `{"status":"ok","apiKeyConfigured":true}`

## 📁 File Structure

```
WIBFAIR/
├── server.js              # Express.js server for Render
├── package.json           # Node.js dependencies
├── .env                   # Your API key (local only, not committed)
├── .gitignore            # Protects .env from being committed
├── index.html            # Your website
└── api/
    └── youtube.js        # (Not used on Render, can delete)
```

## 🔧 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Make sure `.env` has your API key**:
   ```
   YOUTUBE_API_KEY="AIzaSyC99sdYD_NCbBhOK88-K99309ZF33hPRFI"
   ```

3. **Start server**:
   ```bash
   npm start
   ```

4. **Open browser**:
   ```
   http://localhost:3000
   ```

## 🌐 Custom Domain Setup (After Deployment)

1. In Render dashboard, go to your service
2. Click "Settings" → "Custom Domain"
3. Add: `bunmialabi.com`
4. Follow Render's instructions to update DNS records

### DNS Records (Add in your domain registrar):

```
Type: CNAME
Name: www
Value: your-service-name.onrender.com

Type: A (or ALIAS/ANAME if supported)
Name: @
Value: [Render will provide IP or instructions]
```

## 🔒 Security Features

✅ **API Key Protected**: Never exposed to users  
✅ **HTTPS Enabled**: Automatic SSL certificates  
✅ **Environment Variables**: Secure storage on Render  
✅ **CORS Configured**: Only allows safe requests  
✅ **Git Safe**: `.env` is not committed  

## 🐛 Troubleshooting

### "Failed to load videos" on website

1. **Check environment variable**:
   - Render Dashboard → Your Service → Environment
   - Make sure `YOUTUBE_API_KEY` is set correctly

2. **Check logs**:
   - Render Dashboard → Your Service → Logs
   - Look for API errors

3. **Verify API key**:
   - Go to Google Cloud Console
   - Make sure YouTube Data API v3 is enabled
   - Check API key hasn't expired or been restricted

### Service won't start

1. **Check build logs** in Render dashboard
2. **Common issues**:
   - Missing `package.json` → Already created ✅
   - Wrong start command → Use `npm start` ✅
   - Node version issue → Set in `package.json` ✅

### API returns 500 error

1. **Check if API key is set**:
   - Visit: `https://your-service.onrender.com/api/health`
   - Should show: `{"status":"ok","apiKeyConfigured":true}`
   - If `false`, add environment variable in Render

2. **Check YouTube API quota**:
   - Go to Google Cloud Console
   - APIs & Services → YouTube Data API v3 → Quotas
   - Make sure you haven't exceeded daily limit

## 💰 Render Free Tier Details

- ✅ **Free SSL Certificate**
- ✅ **Automatic Deployments** (on git push)
- ✅ **Global CDN**
- ⚠️ **Spins down after 15 min inactivity** (first request takes ~30s)
- ⚠️ **750 hours/month free** (enough for one service 24/7)

### Upgrade to Paid ($7/month) for:
- No spin down (always instant)
- More compute resources
- Priority support

## 🔄 Updating Your Site

1. **Make changes locally**
2. **Test locally**: `npm start`
3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
4. **Render auto-deploys** (takes 2-3 minutes)

## 📊 Monitoring

### Render Dashboard:
- **Metrics**: CPU, Memory, Response times
- **Logs**: Real-time server logs
- **Events**: Deployment history

### YouTube API Quota:
- Google Cloud Console → YouTube Data API v3
- Monitor daily usage
- ~1,600 page visits per day limit (free tier)

## ✅ Checklist

- [x] `server.js` created
- [x] `package.json` created
- [x] `.env` has API key
- [x] `.gitignore` protects `.env`
- [ ] Repository pushed to GitHub
- [ ] Render service created
- [ ] Environment variable added on Render
- [ ] Service deployed and tested
- [ ] Custom domain configured (optional)

## 🎯 Your Deployment URL

After deployment, your site will be at:
```
https://your-service-name.onrender.com
```

You can then point your domain (`bunmialabi.com`) to this URL.

---

**Your website is now production-ready with secure API key handling! 🎉**
