import Link from "next/link";

const posts = [
  {
    title: "The art of letting go",
    excerpt: "Surrender is not giving up — it's trusting God with the outcome. From Oasis Counseling sessions to Unbroken gatherings.",
    date: "2 Dec 2025",
    category: "Faith",
    image: "/assets/grid.jpg",
    href: "/stories/couples-waiting-room-hope-in-the-waiting-season",
  },
  {
    title: "Music, memories, and T.I.V.",
    excerpt: "Before Just A Chat, there was T.I.V — Komole, Vanity and harmonies with Akin that shaped a generation.",
    date: "14 Nov 2025",
    category: "Life",
    image: "/new-assets/whatsapp-2025-10-06-11-31-05_743fdd0e.jpg",
    href: "/stories/music-memories-and-tiv",
  },
  {
    title: "Why we started Vintage Africana",
    excerpt: "Our history is disappearing. How an obsession with preserving old Nigerian objects became our most ambitious project.",
    date: "8 Jun 2024",
    category: "Culture",
    image: "/assets/african_women_entrepreneurs.jpg",
    href: "/stories/why-we-started-vintage-africana",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Journal</span>
        <h1 className="font-display text-7xl md:text-[110px] leading-[0.85] tracking-tight mt-4 mb-6">
          Words that <span className="text-clay">heal.</span>
        </h1>
        <p className="font-sans text-xl text-olive max-w-xl">Essays and reflections on faith, mental health and purposeful living — the longer thoughts that don’t fit in a caption. For the canonical archive, see Stories.</p>
      </section>

      <section className="pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post.title} href={post.href} className="group block bg-white border border-ink/10 overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden bg-paper">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-clay font-semibold">{post.category}</span>
                  <span className="font-sans text-xs text-olive">{post.date}</span>
                </div>
                <h2 className="font-display text-2xl leading-tight mb-3 group-hover:text-clay transition-colors">{post.title}</h2>
                <p className="font-sans text-sm text-olive line-clamp-3">{post.excerpt}</p>
                <span className="font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-1 mt-4 inline-block">Read →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 p-8 bg-paper border border-ink/10 text-center">
          <h3 className="font-display text-2xl mb-2">Don’t miss a post</h3>
          <p className="font-sans text-olive mb-6">This journal mirrors Stories. New essays are published there first.</p>
          <Link href="/stories" className="inline-block bg-ink text-cream font-sans text-xs tracking-widest uppercase px-8 py-3">Explore Stories</Link>
        </div>
      </section>
    </div>
  );
}
