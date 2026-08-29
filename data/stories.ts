export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  content: string;
}

export const STORIES: Story[] = [
  {
    id: "st-001",
    slug: "couples-waiting-room-hope-in-the-waiting-season",
    title: "Couples' Waiting Room: Hope in the Waiting Season",
    excerpt: "A practical guide from Oasis Counseling for couples navigating infertility — physically, spiritually, medically and mentally, to restore hope while you wait.",
    coverImage: "/assets/Nigerian_fashion_displays.jpg",
    category: "Faith",
    publishedAt: "2024-02-11",
    content: "Couples Waiting Room is a practical guide to help couples going through infertility manage their waiting period physically, spiritually, medically, and mentally. Written to bring encouragement and restore hope, it shares testimonies of couples who walked the same waiting process and eventually held their baby, alongside relevant information about fertility enhancement options for men and women to boost their chances of conception. Bunmi extends that counsel at Oasis Counseling and on Just A Chat, where waiting seasons become classrooms for faith, not punishment.",
  },
  {
    id: "st-002",
    slug: "music-memories-and-tiv",
    title: "Music, memories, and T.I.V.",
    excerpt: "Before Just A Chat, there was T.I.V (The Inspired Voices) — Komole, Vanity and harmonies with Akin that shaped a generation.",
    coverImage: "/new-assets/whatsapp-2025-10-06-11-31-05_743fdd0e.jpg",
    category: "Life",
    publishedAt: "2025-11-14",
    content: "T.I.V was more than a duo — it was Bunmi and Akin Alabi's laboratory for storytelling through music. From studio nights in Lagos to stages across Nigeria, songs like 'Komole' and 'Vanity' carried the same honest conversations that now live on Just A Chat. Bunmi reflects on touring while parenting, ending the chapter with gratitude, and how Single & Special carried the baton for singles navigating love — all now archived at Vintage Africana.",
  },
  {
    id: "st-003",
    slug: "why-we-started-vintage-africana",
    title: "Why we started Vintage Africana",
    excerpt: "Vintage Africana is our museum of memory — saving old Nigerian objects before history disappears. The story behind the Lagos space with Akin.",
    coverImage: "/assets/african_women_entrepreneurs.jpg",
    category: "Culture",
    publishedAt: "2024-06-08",
    content: "Vintage Africana (vintageafricana.com) began as a private obsession: collecting market scenes, fashion displays, crafts and cityscapes before they vanished. With Akin, Bunmi turned that archive into a museum in Lagos — a physical Pinterest of Nigerian heritage. This piece details the first hunt in Balogun market, the restoration of a 1970s sewing machine, and why preserving the past is a mental health practice: when we know where we come from, we heal.",
  },
  {
    id: "st-004",
    slug: "unbroken-she-rose-she-rebuilt-she-reigns",
    title: "Unbroken: She Rose, She Rebuilt, She Reigns",
    excerpt: "Every October, Unbroken gathers women — especially single mums and mature single ladies — for healing, empowerment and transformation in Lagos.",
    coverImage: "/assets/cultural_festivals.jpg",
    category: "Empowerment",
    publishedAt: "2025-10-15",
    content: "Unbroken is a platform that empowers women, especially single mums and mature single ladies, to rise above life's challenges, heal from brokenness, rediscover identity, and embrace wholeness. Every October, our annual Unbroken Conference gathers women from all walks of life. SHERO2025 theme 'She Rose * She Rebuilt * She Reigns' features Marketplace Extravaganza, Kiddies Fun Park, Entertainment Village, One-Day Seminar. Speakers: Bunmi Alabi and Omotunde Adebowale David (LOLO1). Join via chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf.",
  }
];
