import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const hashed = await bcrypt.hash("admin1234", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@bunmialabi.com" },
    update: {},
    create: {
      email: "admin@bunmialabi.com",
      password: hashed,
      name: "Bunmi Alabi",
      role: "admin",
    },
  });
  console.log(`Admin user: ${admin.email} / password: admin1234`);

  // Seed episodes from data/episodes.ts if not exists
  const existingEpisodes = await prisma.episode.count();
  if (existingEpisodes === 0) {
    await prisma.episode.createMany({
      data: [
        {
          slug: "what-marriage-taught-me-about-myself",
          title: "What marriage taught me about myself",
          description: "In this conversation, we explore the mirror effect of long-term relationships and how marriage forces you to confront the parts of yourself you'd rather ignore.",
          youtubeUrl: "https://www.youtube.com/watch?v=placeholder-1",
          guest: "Akin Alabi",
          topics: ["Marriage", "Self-Discovery", "Family"],
          publishedAt: new Date("2026-06-15"),
          status: "published",
          durationMinutes: 42,
        },
        {
          slug: "finding-peace-in-the-waiting-season",
          title: "Finding peace in the waiting season",
          description: "We discuss how to remain grounded and expectant when life isn't moving at the pace you want it to, drawing from personal moments of stillness.",
          youtubeUrl: "https://www.youtube.com/watch?v=placeholder-2",
          guest: null,
          topics: ["Faith", "Life", "Mental Health"],
          publishedAt: new Date("2026-06-01"),
          status: "published",
          durationMinutes: 35,
        },
        {
          slug: "raising-children-who-actually-like-you",
          title: "Raising children who actually like you",
          description: "Parenting isn't just about discipline. It's about building a relationship that outlasts their childhood. A candid conversation about modern motherhood.",
          youtubeUrl: "https://www.youtube.com/watch?v=placeholder-3",
          guest: "Dr. Sarah Johnson",
          topics: ["Family", "Parenting"],
          publishedAt: new Date("2026-05-18"),
          status: "published",
          durationMinutes: 48,
        },
      ],
    });
    console.log("Seeded 3 episodes");
  }

  const existingStories = await prisma.story.count();
  if (existingStories === 0) {
    await prisma.story.createMany({
      data: [
        {
          slug: "the-art-of-letting-go",
          title: "The art of letting go",
          excerpt: "Sometimes the most powerful thing you can do is stop trying to control the outcome. A reflection on surrender and faith.",
          content: "Full editorial content will go here... This is where the rich text content will eventually render. For now, we are simulating a long-form editorial piece.",
          category: "Faith",
          publishedAt: new Date("2026-07-02"),
          status: "published",
        },
        {
          slug: "music-memories-and-tiv",
          title: "Music, memories, and T.I.V.",
          excerpt: "Looking back at the years spent creating music with Akin, the lessons learned, and why that chapter remains so precious.",
          content: "Full editorial content will go here...",
          category: "Life",
          publishedAt: new Date("2026-05-20"),
          status: "published",
        },
        {
          slug: "why-we-started-vintage-africana",
          title: "Why we started Vintage Africana",
          excerpt: "Our history is disappearing. This is the story of how an obsession with preserving the past turned into our most ambitious project yet.",
          content: "Full editorial content will go here...",
          category: "Culture",
          publishedAt: new Date("2026-04-10"),
          status: "published",
        },
      ],
    });
    console.log("Seeded 3 stories");
  }

  const existingProjects = await prisma.project.count();
  if (existingProjects === 0) {
    await prisma.project.createMany({
      data: [
        {
          name: "Just A Chat",
          description: "No scripts. No perfect answers. Just conversations about the things that matter—faith, family, relationships, and life.",
          year: "2024–Present",
          link: "/just-a-chat",
        },
        {
          name: "Vintage Africana",
          description: "A cultural preservation project and museum owned alongside Akin, dedicated to saving old Nigerian objects and memories.",
          year: "2020–Present",
          link: "https://vintageafricana.com",
        },
        {
          name: "T.I.V (The Inspired Voices)",
          description: "The music duo behind hits like 'Komole' and 'Vanity'. A beautiful chapter of creating music that resonated across Nigeria.",
          year: "2010s",
          link: null,
        },
        {
          name: "Single & Special",
          description: "A community and initiative focused on guiding singles through relationships, dating, and discovering self-worth.",
          year: "2010s",
          link: null,
        },
      ],
    });
    console.log("Seeded 4 projects");
  }

  console.log("Seeding complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
