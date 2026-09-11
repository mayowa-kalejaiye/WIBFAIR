import { prisma } from "@/lib/db";
import { STORIES as FALLBACK } from "@/data/stories";
import { notFound } from "next/navigation";
import Eyebrow from "@/components/ui/Eyebrow";
import FlowerMotif from "@/components/motif/FlowerMotif";

export const dynamic = "force-dynamic";

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let story: any = null;
  try {
    story = await prisma.story.findUnique({ where: { slug } });
  } catch {}
  if (!story) {
    const fb = FALLBACK.find((s: any) => s.slug === slug);
    if (fb) story = { ...fb, coverId: null };
  }
  if (!story) notFound();

  const coverSrc = story.coverId ? `/api/media/${story.coverId}` : story.coverImage && !story.coverImage.includes("/images/stories/") ? story.coverImage : null;

  return (
    <article className="min-h-screen bg-white pt-28 pb-24">
      <header className="max-w-[800px] mx-auto px-6 text-center relative">
        <Eyebrow>{story.category}</Eyebrow>
        <span className="font-sans text-xs text-olive ml-3">{story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : ""}</span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-[64px] leading-[1.05] mt-4">{story.title}</h1>
        <p className="font-sans text-lg text-olive mt-6 max-w-[600px] mx-auto">{story.excerpt}</p>
        <div className="absolute -top-6 right-0 hidden md:block">
          <FlowerMotif size={28} />
        </div>
      </header>

      {coverSrc ? (
        <div className="max-w-[1200px] mx-auto px-6 mt-12">
          <div className="relative aspect-[16/9] bg-blush border border-border overflow-hidden">
            <img src={coverSrc} alt={story.title} className="w-full h-full object-cover" />
          </div>
        </div>
      ) : null}

      <div className="max-w-[680px] mx-auto px-6 mt-12 font-sans text-lg leading-[1.8] text-ink space-y-6">
        <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {(story.content ?? "").slice(0, 600)}
        </p>
        {story.content && story.content.length > 600 ? <p>{story.content.slice(600)}</p> : null}
        <blockquote className="font-display text-3xl text-pink-deep border-l-2 border-pink pl-6 py-4 my-8">“She Rose. She Rebuilt. She Reigns.”</blockquote>
        <p className="font-sans text-xs tracking-widest uppercase text-olive">Category: {story.category}</p>
      </div>

      {story.slug === "unbroken-she-rose-she-rebuilt-she-reigns" && (
        <>
          <section className="max-w-[1200px] mx-auto px-6 mt-16 grid md:grid-cols-2 gap-8 border-t border-border pt-12">
            <div>
              <Eyebrow>About Unbroken</Eyebrow>
              <h2 className="font-display text-3xl mt-3">A platform for single mums & mature singles to heal.</h2>
              <p className="font-sans text-olive mt-4">Every October, Unbroken gathers women in Lagos for healing and empowerment — with marketplace and entertainment alongside the seminar.</p>
            </div>
            <div className="bg-blush border border-border p-6">
              <h3 className="font-display text-xl">Our Mission</h3>
              <ul className="font-sans text-sm text-olive mt-3 space-y-2 list-disc pl-5">
                <li>Heal from brokenness and restore identity</li>
                <li>Empower single mums and mature single ladies</li>
                <li>Build community that outlasts the conference</li>
              </ul>
            </div>
          </section>

          <section className="max-w-[1200px] mx-auto px-6 mt-12">
            <Eyebrow>What to Expect</Eyebrow>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                { t: "Marketplace Extravaganza", img: "/assets/Nigerian_market_scenes.jpg" },
                { t: "Entertainment Village", img: "/assets/cultural_festivals.jpg" },
                { t: "One-Day Seminar", img: "/assets/business_meetings.jpg" },
              ].map((c: any) => (
                <div key={c.t} className="bg-white border border-border overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.t} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-display text-lg">{c.t}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-[1200px] mx-auto px-6 mt-12 bg-ink text-cream p-8">
            <Eyebrow className="text-pink-soft">Reviews</Eyebrow>
            <h3 className="font-display text-2xl mt-2">Hear from Our Community</h3>
            <p className="font-sans text-sm text-paper/70 mt-2">Real moments — verified caption from past build.</p>
            <div className="mt-6 bg-white/5 border border-white/10 p-6">
              <p className="font-display text-lg">“And she won the free massage at #unbroken2024”</p>
              <p className="font-sans text-xs tracking-widest uppercase text-clay mt-2">— Instagram Reel DBZlZDpNaMd</p>
            </div>
          </section>
        </>
      )}
    </article>
  );
}

export async function generateStaticParams() {
  try {
    const stories = await prisma.story.findMany({ select: { slug: true } });
    if (stories.length > 0) return stories.map((s: any) => ({ slug: s.slug }));
  } catch {}
  const { STORIES } = await import("@/data/stories");
  return STORIES.map((s: any) => ({ slug: s.slug }));
}
