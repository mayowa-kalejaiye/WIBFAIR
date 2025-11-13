# YouTube API Setup Instructions

## Overview
Your "Featured Work" section now dynamically fetches videos from Bunmi's YouTube channel using the YouTube Data API v3.

## Quick Setup (5 minutes)

### Step 1: Get Your YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project:
   - Click "Select a project" at the top
   - Click "New Project"
   - Name it something like "Bunmi Alabi Website"
   - Click "Create"

4. Enable YouTube Data API v3:
   - In the left sidebar, go to "APIs & Services" → "Library"
   - Search for "YouTube Data API v3"
   - Click on it and click "Enable"

5. Create API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

6. (Optional) Restrict the API Key:
   - Click on your new API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Check only "YouTube Data API v3"
   - Under "Website restrictions", add your domain: `bunmialabi.com/*`
   - Click "Save"

### Step 2: Add API Key to Your Website

1. Open `index.html`
2. Find line ~740 (search for `YOUR_API_KEY_HERE`)
3. Replace `YOUR_API_KEY_HERE` with your actual API key
4. Save the file

Example:
```javascript
const YOUTUBE_CONFIG = {
  API_KEY: 'AIzaSyAaBBccDDeeFFggHHiiJJkkLLmmNN', // ← Your actual key here
  CHANNEL_ID: 'UCBNLIKUGe1kUQoRq8Vzhw3w',
  MAX_RESULTS: 50
};
```

### Step 3: Test

1. Open your website
2. The "Featured Work" section should now show a loading spinner
3. After 2-3 seconds, all videos from the YouTube channel will appear
4. Videos are automatically categorized based on title keywords

## Features

### Automatic Categorization
Videos are automatically sorted into categories based on keywords in their titles:

- **Events**: Contains "conference" or "unbroken"
- **Podcast**: Contains "podcast", "chat", or "interview"
- **Media**: Contains "tv", "tvc", "media", or "appearance"
- **Speaking**: Contains "speaking", "keynote", or "talk"
- **Default**: All others go to "podcast"

### What Gets Displayed
For each video:
- ✅ Title
- ✅ Description (truncated to 200 characters)
- ✅ High-quality thumbnail
- ✅ Duration
- ✅ View count
- ✅ Like count
- ✅ Publish date
- ✅ Direct link to watch on YouTube

### API Quota Information
- YouTube API has a daily quota limit (10,000 units/day for free tier)
- Each page load costs approximately **~6 units** (very minimal)
- This allows for **~1,600 page visits per day** before hitting the quota
- If you need more, you can request a quota increase from Google

## Troubleshooting

### "Failed to load videos" Error
1. Check that your API key is correctly pasted (no extra spaces)
2. Verify the YouTube Data API v3 is enabled in your Google Cloud Console
3. Check browser console (F12) for specific error messages
4. Make sure you haven't exceeded your daily quota

### Videos Not Categorized Correctly
Edit the `categorizeVideo()` function in `index.html` to add more keywords:

```javascript
function categorizeVideo(title, description) {
  const titleLower = (title + ' ' + description).toLowerCase();
  
  // Add your own keywords here
  if (titleLower.includes('your-keyword')) return 'your-category';
  
  // ... rest of the function
}
```

### Want to Change Max Videos Displayed
Edit the `MAX_RESULTS` in the config (line ~745):

```javascript
const YOUTUBE_CONFIG = {
  API_KEY: 'your-key-here',
  CHANNEL_ID: 'UCBNLIKUGe1kUQoRq8Vzhw3w',
  MAX_RESULTS: 20 // Change this (max: 50)
};
```

## Benefits of Dynamic Loading

✅ **Always Up-to-Date**: New videos appear automatically  
✅ **No Manual Updates**: Never edit code to add videos  
✅ **Professional Stats**: Shows real view/like counts  
✅ **Better SEO**: Fresh content signals to search engines  
✅ **Scalable**: Works with hundreds of videos  

## Need Help?

If you encounter any issues:
1. Check the browser console (press F12) for error messages
2. Verify your API key in Google Cloud Console
3. Make sure the YouTube channel ID is correct
4. Try the "Retry" button if videos fail to load

---

**Channel ID**: UCBNLIKUGe1kUQoRq8Vzhw3w  
**API Documentation**: https://developers.google.com/youtube/v3
