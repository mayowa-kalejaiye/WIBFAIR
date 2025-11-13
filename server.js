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
    console.error('ERROR: YOUTUBE_API_KEY environment variable not set!');
    return res.status(500).json({
      success: false,
      error: 'YouTube API key not configured on server. Please set YOUTUBE_API_KEY in Render environment variables.'
    });
  }

  console.log('Fetching YouTube videos for channel:', CHANNEL_ID);

  try {
    const fetch = (await import('node-fetch')).default;

    // Step 1: Get channel uploads playlist
    console.log('Step 1: Fetching channel info...');
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!channelResponse.ok) {
      const errorText = await channelResponse.text();
      console.error('Channel API error:', channelResponse.status, errorText);
      throw new Error(`Channel API error: ${channelResponse.status}`);
    }
    
    const channelData = await channelResponse.json();
    
    if (!channelData.items || channelData.items.length === 0) {
      console.error('Channel not found:', CHANNEL_ID);
      throw new Error('Channel not found');
    }
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    console.log('Uploads playlist ID:', uploadsPlaylistId);
    
    // Step 2: Get videos from uploads playlist
    console.log('Step 2: Fetching playlist items...');
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!playlistResponse.ok) {
      const errorText = await playlistResponse.text();
      console.error('Playlist API error:', playlistResponse.status, errorText);
      throw new Error(`Playlist API error: ${playlistResponse.status}`);
    }
    
    const playlistData = await playlistResponse.json();
    
    if (!playlistData.items || playlistData.items.length === 0) {
      console.log('No videos found in playlist');
      return res.json({
        success: true,
        videos: []
      });
    }
    
    const videoIds = playlistData.items.map(item => item.snippet.resourceId.videoId).join(',');
    console.log(`Found ${playlistData.items.length} videos`);
    
    // Step 3: Get detailed video information
    console.log('Step 3: Fetching video details...');
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!videosResponse.ok) {
      const errorText = await videosResponse.text();
      console.error('Videos API error:', videosResponse.status, errorText);
      throw new Error(`Videos API error: ${videosResponse.status}`);
    }
    
    const videosData = await videosResponse.json();
    
    console.log(`Successfully fetched ${videosData.items?.length || 0} videos with details`);
    
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

// Handle all .html files explicitly (fixes navigation issues)
app.get('*.html', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Key configured: ${!!YOUTUBE_API_KEY}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
