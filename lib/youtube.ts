export function extractYoutubeId(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1) || null;
    }
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const parts = u.pathname.split("/");
    return parts.pop() || null;
  } catch {
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    return null;
  }
}

export function youtubeEmbedUrl(url: string): string | null {
  const id = extractYoutubeId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}`;
}

export function youtubeThumbnail(urlOrId: string, quality: "maxres" | "hq" | "mq" = "maxres"): string | null {
  const id = extractYoutubeId(urlOrId);
  if (!id) return null;
  if (quality === "maxres") return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  if (quality === "hq") return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}

// ─── Server-side fetch (uses YOUTUBE_API_KEY) ──────────────────────────────
const CHANNEL_ID = "UCBNLIKUGe1kUQoRq8Vzhw3w";

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string; // high quality
  thumbnailMax: string;
  duration: string; // ISO8601 e.g. PT42M13S
  viewCount?: string;
};

function parseDuration(iso: string): number | null {
  if (!iso) return null;
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return null;
  const h = parseInt(m[1] || "0"), min = parseInt(m[2] || "0"), s = parseInt(m[3] || "0");
  return h * 60 + min + Math.round(s / 60);
}

export async function getYouTubeVideos(max = 6): Promise<YouTubeVideo[]> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return [];
  try {
    const chRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${key}`, { next: { revalidate: 3600 } });
    if (!chRes.ok) return [];
    const chData = await chRes.json();
    const pid = chData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!pid) return [];
    const plRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&maxResults=${max}&key=${key}`, { next: { revalidate: 3600 } });
    if (!plRes.ok) return [];
    const plData = await plRes.json();
    const ids = (plData.items || []).map((x: any) => x.snippet.resourceId.videoId).join(",");
    if (!ids) return [];
    const vidRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${key}`, { next: { revalidate: 3600 } });
    if (!vidRes.ok) return [];
    const vidData = await vidRes.json();
    return (vidData.items || []).map((v: any) => ({
      id: v.id,
      title: v.snippet.title,
      description: v.snippet.description,
      publishedAt: v.snippet.publishedAt,
      thumbnail: v.snippet.thumbnails?.high?.url || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      thumbnailMax: v.snippet.thumbnails?.maxres?.url || v.snippet.thumbnails?.high?.url || `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      duration: v.contentDetails?.duration || "",
      viewCount: v.statistics?.viewCount,
    }));
  } catch {
    return [];
  }
}
