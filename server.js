const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// YouTube API Configuration
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCBNLIKUGe1kUQoRq8Vzhw3w';
const MAX_RESULTS = 50;

// YouTube API endpoint
app.get('/api/youtube', async (req, res) => {
  if (!YOUTUBE_API_KEY) {
    return res.status(500).json({
      success: false,
      error: 'YouTube API key not configured. Please set YOUTUBE_API_KEY environment variable.'
    });
  }

  try {
    const fetch = (await import('node-fetch')).default;

    // Step 1: Get channel uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!channelResponse.ok) {
      throw new Error(`Channel API error: ${channelResponse.status}`);
    }
    
    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error('Channel not found');
    }
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    
    // Step 2: Get videos from uploads playlist
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!playlistResponse.ok) {
      throw new Error(`Playlist API error: ${playlistResponse.status}`);
    }
    
    const playlistData = await playlistResponse.json();
    
    if (!playlistData.items || playlistData.items.length === 0) {
      return res.json({
        success: true,
        videos: []
      });
    }
    
    const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId).join(',');
    
    // Step 3: Get detailed video information
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!videosResponse.ok) {
      throw new Error(`Videos API error: ${videosResponse.status}`);
    }
    
    const videosData = await videosResponse.json();
    
    // Return the data
    res.json({
      success: true,
      videos: videosData.items || []
    });
    
  } catch (error) {
    console.error('YouTube API Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    apiKeyConfigured: !!YOUTUBE_API_KEY
  });
});

// Serve index.html for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Key configured: ${!!YOUTUBE_API_KEY}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
