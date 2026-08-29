export interface Episode {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtubeId: string;
  guest: string | null;
  topics: string[];
  publishedAt: string;
  durationMinutes: number;
}

// REAL data sync'd from YouTube API UCBNLIKUGe1kUQoRq8Vzhw3w (Just A Chat with Bunmi Alabi)
// Last sync: 2026-08-28 via lib/youtube.ts getYouTubeVideos()
export const EPISODES: Episode[] = [
  {
    id: "yHug7SV0Upc",
    slug: "dealing-with-narcissism-in-relationships-faith",
    title: "Dealing with Narcissism in Relationships & Faith | Just a Chat with Bunni Alabi ft. Pastor David",
    description: "Welcome back to Just a Chat with Bunni Alabi! In this eye-opening episode, Bunni and Pastor David unpack narcissism in relationships and faith — how to recognize manipulation, set boundaries, and heal with grace.",
    youtubeId: "yHug7SV0Upc",
    guest: "Pastor David",
    topics: ["Relationships", "Faith", "Mental Health"],
    publishedAt: "2026-08-10",
    durationMinutes: 48,
  },
  {
    id: "_gtF0-frSZo",
    slug: "intertribal-marriage-vs-character-what-really-makes-a-relationship-last",
    title: "Intertribal Marriage vs. Character: What Really Makes a Relationship Last?",
    description: "Anuraya, Mrs Ekayneke and Mr Jethro join Bunmi for a deeply practical conversation on intertribal marriage, kingdom values and why character outlasts culture in lasting relationships.",
    youtubeId: "_gtF0-frSZo",
    guest: "Mr Jethro",
    topics: ["Intertribal marriage", "kingdom marriage", "Christian relationship podcast"],
    publishedAt: "2026-07-27",
    durationMinutes: 94,
  },
  {
    id: "NW7rRgQuD4Q",
    slug: "she-let-her-baby-daddy-walk-her-daughter-down-the-aisle",
    title: "She Let Her Baby Daddy Walk Her Daughter Down The Aisle — Breaking Generational Curses or Madness?",
    description: "She had every reason to keep him away. He wasn't there — but when the wedding came, she made an unexpected choice. A raw conversation on forgiveness, generational curses and what it means to break cycles in Nigeria.",
    youtubeId: "NW7rRgQuD4Q",
    guest: null,
    topics: ["Just A Chat", "Bumi Alabi", "generational curses Nigeria"],
    publishedAt: "2026-07-22",
    durationMinutes: 49,
  },
  {
    id: "e1ColjNCByg",
    slug: "the-ultimate-modesty-debate-pastors-parties-church-dress-codes",
    title: "The Ultimate Modesty Debate: Pastors, Parties & Church Dress Codes!",
    description: "Are Christians losing moral standards in dressing or being too judgmental? A high-energy debate on modesty, Pastor Toby Adegboyega viral video and church dress codes.",
    youtubeId: "e1ColjNCByg",
    guest: null,
    topics: ["Christian podcast", "modesty in church", "Pastor Toby Adegboyega viral video"],
    publishedAt: "2026-07-13",
    durationMinutes: 88,
  },
  {
    id: "0P0fCURutCc",
    slug: "false-prophets-exposed-how-fake-signs-are-destroying-churches",
    title: "FALSE PROPHETS EXPOSED — How Fake 'Signs' Are Destroying Churches | Just A Chat with Bunmi Alabi",
    description: "Your prophet calls your number out loud in church. Everyone claps. But what if it's manipulation? Bunmi exposes how fake signs destroy churches in Nigeria.",
    youtubeId: "0P0fCURutCc",
    guest: null,
    topics: ["Just A Chat", "Bumi Alabi", "false prophets Nigeria"],
    publishedAt: "2026-07-09",
    durationMinutes: 69,
  },
];
