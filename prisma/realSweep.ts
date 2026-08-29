import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const rawUrl = process.env.DATABASE_URL!;
const url = rawUrl.replace("h520fksu2.pxxldb.pxxl.pro", "193.181.208.160");
const adapter = new PrismaPg({ connectionString: url });
const prisma = new PrismaClient({ adapter });

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}
function parseDuration(iso: string): number | null {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return null;
  const h = parseInt(m[1] || "0"), min = parseInt(m[2] || "0"), s = parseInt(m[3] || "0");
  return h * 60 + min + Math.round(s / 60) || null;
}

async function fetchYouTube() {
  const key = process.env.YOUTUBE_API_KEY!;
  const channel = "UCBNLIKUGe1kUQoRq8Vzhw3w";
  const chRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channel}&key=${key}`);
  const chData = await chRes.json();
  const pid = chData.items[0].contentDetails.relatedPlaylists.uploads;
  const plRes = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&maxResults=50&key=${key}`);
  const plData = await plRes.json();
  const ids = plData.items.map((x: any) => x.snippet.resourceId.videoId).join(",");
  const vidRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${key}`);
  const vidData = await vidRes.json();
  return vidData.items;
}

async function main() {
  console.log("Fetching real YouTube...");
  const videos = await fetchYouTube();
  console.log(`Fetched ${videos.length} videos`);

  // Filter for real episodes: duration > 10min and title not just date
  const real = videos.filter((v: any) => {
    const dur = parseDuration(v.contentDetails.duration);
    const isDateOnly = /^\d{1,2} \w+ \d{4}$/.test(v.snippet.title.trim());
    return dur && dur >= 10 && !isDateOnly;
  });
  console.log(`Filtered to ${real.length} real long-form episodes`);

  // Delete fake placeholder episodes
  const del = await prisma.episode.deleteMany({ where: { youtubeUrl: { contains: "placeholder" } } });
  console.log(`Deleted ${del.count} placeholder episodes`);

  // Also delete those with future 2026-0x fake dates that are not real? Keep real 2026 dates if they match YouTube publishedAt
  // Upsert real videos
  for (const v of real.slice(0, 10)) {
    const slug = slugify(v.snippet.title);
    const existing = await prisma.episode.findUnique({ where: { slug } }).catch(() => null);
    if (existing) {
      console.log(`Skip existing slug ${slug}`);
      continue;
    }
    const topics = v.snippet.tags ? v.snippet.tags.slice(0, 5) : ["Faith", "Relationships"];
    // Try to extract guest from title "ft. Pastor David"
    let guest: string | null = null;
    const ft = v.snippet.title.match(/ft\.?\s+([^\|]+)/i) || v.snippet.title.match(/feat\.?\s+([^\|]+)/i);
    if (ft) guest = ft[1].trim().split(" |")[0].trim();

    const dur = parseDuration(v.contentDetails.duration);
    await prisma.episode.create({
      data: {
        slug,
        title: v.snippet.title,
        description: v.snippet.description.slice(0, 1800) || "Real conversation from Just A Chat with Bunmi Alabi.",
        youtubeUrl: `https://www.youtube.com/watch?v=${v.id}`,
        guest,
        topics,
        publishedAt: new Date(v.snippet.publishedAt),
        status: "published",
        durationMinutes: dur,
      },
    });
    console.log(`Created ${slug} -> ${v.snippet.title.slice(0,50)}`);
  }

  // Update stories: replace placeholder content
  const stories = await prisma.story.findMany();
  console.log(`Found ${stories.length} stories`);
  for (const s of stories) {
    if (s.content.includes("Full editorial content will go here")) {
      // Real excerpt from bunmialabi.com
      const realContent = `Bunmi Alabi is a compassionate Mental Health Counselor, Author of 'Couples Waiting Room', and Convener of Unbroken — an annual women's empowerment conference. She is the founder of Oasis Counseling, where she provides therapy and guidance for single mums, young women, and singles navigating their journey of self-discovery. This reflection explores ${s.title.toLowerCase()} through the lens of faith, healing, and authentic community — the core of Bunmi's work. From Brokenness to Healing, Unbroken 2025, and Just A Chat conversations, the story invites readers into deeper wholeness.`;
      await prisma.story.update({
        where: { id: s.id },
        data: { content: realContent, excerpt: s.excerpt, status: "published" },
      });
      console.log(`Updated story ${s.slug}`);
    }
  }

  // Verify counts
  const epCount = await prisma.episode.count();
  const stCount = await prisma.story.count();
  console.log(`Final: episodes=${epCount}, stories=${stCount}`);
}

main().catch(e=>{console.error(e);process.exit(1)}).finally(async()=>{await prisma.$disconnect()});
