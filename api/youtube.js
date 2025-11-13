// Serverless function for Vercel/Netlify
// This keeps your API key secure on the server side

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = 'UCBNLIKUGe1kUQoRq8Vzhw3w';
  const MAX_RESULTS = 50;

  try {
    // Step 1: Get channel uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!channelResponse.ok) {
      throw new Error(`Channel API error: ${channelResponse.status}`);
    }
    
    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    
    // Step 2: Get videos from uploads playlist
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${MAX_RESULTS}&key=${YOUTUBE_API_KEY}`
    );
    
    if (!playlistResponse.ok) {
      throw new Error(`Playlist API error: ${playlistResponse.status}`);
    }
    
    const playlistData = await playlistResponse.json();
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
    res.status(200).json({
      success: true,
      videos: videosData.items
    });
    
  } catch (error) {
    console.error('YouTube API Error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
