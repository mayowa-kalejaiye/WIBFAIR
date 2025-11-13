# Secure YouTube API Integration - Deployment Guide

## 🔒 Security Implementation

Your API key is now **SECURE** and never exposed in client-side code!

### What Changed:
- ❌ Before: API key visible in browser (insecure)
- ✅ Now: API key stored on server, hidden from users

## 📁 File Structure

```
WIBFAIR/
├── api/
│   └── youtube.js          # Serverless function (runs on server)
├── .env                     # Your API key (NEVER commit this!)
├── .gitignore              # Prevents .env from being committed
├── vercel.json             # Deployment configuration
└── index.html              # Updated to call /api/youtube
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Add your API key to .env file**:
   ```
   YOUTUBE_API_KEY=your_actual_api_key_here
   ```

3. **Deploy via Vercel Dashboard** (easiest):
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add Environment Variable:
     - Key: `YOUTUBE_API_KEY`
     - Value: Your actual API key
   - Click "Deploy"

4. **Or deploy via CLI**:
   ```bash
   vercel
   ```
   Then add the environment variable in the Vercel dashboard.

### Option 2: Netlify (Also Free)

1. **Create `netlify.toml`** in your project root:
   ```toml
   [build]
     functions = "api"
   
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

2. **Rename the function**:
   - Move `api/youtube.js` to `netlify/functions/youtube.js`

3. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Import your repository
   - Add Environment Variable: `YOUTUBE_API_KEY`
   - Deploy

## 🔑 Setting Up Environment Variables

### On Vercel:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add: `YOUTUBE_API_KEY` = your key
4. Select all environments (Production, Preview, Development)
5. Save

### On Netlify:
1. Site settings → Environment variables
2. Add variable: `YOUTUBE_API_KEY` = your key
3. Save

## 🧪 Testing Locally

1. **Add API key to `.env` file**:
   ```
   YOUTUBE_API_KEY=your_actual_api_key_here
   ```

2. **Test with Vercel Dev** (recommended):
   ```bash
   npm install -g vercel
   vercel dev
   ```
   Visit: http://localhost:3000

3. **Or use any local server**:
   ```bash
   python -m http.server 8000
   ```
   But the API call will fail locally (it needs the serverless function running)

## ✅ Verification

After deploying, check:

1. **API endpoint works**:
   Visit: `https://your-domain.vercel.app/api/youtube`
   Should return JSON with video data

2. **Website loads videos**:
   Visit: `https://your-domain.vercel.app`
   Videos should load after 2-3 seconds

3. **API key is hidden**:
   Open browser DevTools → Network tab
   Check the `/api/youtube` request
   Your API key should NOT appear anywhere!

## 🔒 Security Benefits

1. **API Key Protection**: Never exposed to users
2. **Rate Limiting**: Can add server-side rate limiting
3. **API Restrictions**: Can restrict API key to server IP
4. **Monitoring**: Track usage server-side
5. **Caching**: Can cache responses to reduce API calls

## 🐛 Troubleshooting

### "Failed to load videos"
1. Check environment variable is set correctly in Vercel/Netlify
2. Verify API key is valid in Google Cloud Console
3. Check serverless function logs in deployment dashboard
4. Ensure YouTube Data API v3 is enabled

### API endpoint returns 404
1. For Vercel: Function should be in `api/` folder
2. For Netlify: Function should be in `netlify/functions/` folder
3. Check `vercel.json` or `netlify.toml` configuration

### CORS errors
- Already configured in `api/youtube.js`
- Check that headers are set correctly in serverless function

## 📊 Monitoring Usage

### Vercel:
- Dashboard → Your Project → Analytics
- View function invocations and errors

### Netlify:
- Dashboard → Functions
- View function logs and usage

## 💡 Best Practices

1. **Never commit `.env`** - It's in `.gitignore`
2. **Rotate API keys** periodically for security
3. **Set API restrictions** in Google Cloud Console:
   - Restrict to YouTube Data API v3 only
   - Optional: Restrict to specific IPs (Vercel/Netlify)
4. **Monitor quota** in Google Cloud Console
5. **Enable caching** to reduce API calls (future enhancement)

## 🎯 Next Steps

1. Add your API key to `.env`
2. Deploy to Vercel or Netlify
3. Add environment variable in platform dashboard
4. Test the deployment
5. Your site is now secure and production-ready! 🎉

---

**Your API key is now protected and will never be exposed to users!**
