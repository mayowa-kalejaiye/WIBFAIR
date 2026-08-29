import { prisma } from "@/lib/db";
import { STORIES as FALLBACK } from "@/data/stories";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let story: any = null;
  try {
    story = await prisma.story.findUnique({ where: { slug } });
  } catch {}
  if (!story) {
    const fb = FALLBACK.find((s) => s.slug === slug);
    if (fb) story = { ...fb, coverId: null };
  }
  if (!story) notFound();

  return (
    <article className="min-h-screen pt-32 pb-32 bg-cream">
      <header className="max-w-[800px] mx-auto px-6 mb-16 text-center">
        <div className="flex justify-center gap-4 items-baseline mb-8">
          <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">{story.category}</span>
          <span className="font-sans text-xs tracking-widest uppercase text-olive">{story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : ""}</span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.1] mb-8">{story.title}</h1>
        <p className="font-sans text-xl text-olive leading-relaxed max-w-[600px] mx-auto">{story.excerpt}</p>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 mb-24">
        <div className="relative aspect-video md:aspect-[21/9] w-full bg-paper rounded-[2px] overflow-hidden">
          {story.coverId ? (
            <img src={`/api/media/${story.coverId}`} alt={story.title} className="w-full h-full object-cover" />
          ) : story.coverImage ? (
            <img src={story.coverImage} alt={story.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-olive/50 text-xs font-sans tracking-widest uppercase">Hero Cover Image</div>
          )}
        </div>
      </div>

      <div className="max-w-[680px] mx-auto px-6 font-sans text-lg md:text-xl leading-[1.8] text-ink space-y-8">
        <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:-mt-2">
          {(story.content ?? "").slice(0, 600)}
        </p>
        {story.content && story.content.length > 600 ? <p>{story.content.slice(600)}</p> : null}
        <blockquote className="font-display text-4xl md:text-5xl text-clay border-l-2 border-clay pl-8 py-4 my-12 leading-tight">“She Rose. She Rebuilt. She Reigns.”</blockquote>
        <p className="text-olive text-sm">Category: {story.category} · {story.status}</p>
      </div>

      {/* ─── Unbroken: built to the brim ─── */}
      {story.slug === "unbroken-she-rose-she-rebuilt-she-reigns" && (
        <>
          {/* About + Mission */}
          <section className="max-w-[1200px] mx-auto px-6 mt-24 grid md:grid-cols-2 gap-12 md:gap-24 border-t border-ink/10 pt-16">
            <div>
              <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">About Unbroken</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6">A platform for single mums & mature singles to heal.</h2>
              <p className="font-sans text-olive leading-relaxed">Every October, Unbroken gathers women from all walks of life in Lagos for healing, empowerment and transformation — rising above brokenness, rediscovering identity and embracing wholeness, with marketplace and entertainment alongside the main seminar.</p>
            </div>
            <div className="bg-paper border border-ink/10 p-8">
              <h3 className="font-display text-2xl mb-4">Our Mission</h3>
              <ul className="font-sans text-sm text-olive space-y-3 list-disc pl-5">
                <li>Heal from brokenness and restore identity</li>
                <li>Empower single mums and mature single ladies</li>
                <li>Build community that outlasts the conference</li>
                <li>Provide practical tools — counseling via Oasis, marketplace & seminars</li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a href="https://chat.whatsapp.com/Ino2Q7J4oJ58hhUjJMAAlf?mode=wwt" target="_blank" className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-6 py-3">Join Community</a>
                <a href="/events" className="border border-ink/20 font-sans text-xs tracking-widest uppercase px-6 py-3">Conference Details</a>
              </div>
            </div>
          </section>

          {/* Why Attend */}
          <section className="max-w-[1200px] mx-auto px-6 mt-20">
            <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Why Attend</span>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              {[
                { t: "Healing & Restoration", d: "Safe space to process grief, heartbreak and rediscover wholeness." },
                { t: "Empowerment & Identity", d: "Reclaim voice after single motherhood or waiting seasons." },
                { t: "Personal Growth", d: "Workshops on mental health, faith and purpose — from Oasis Counseling." },
                { t: "Community & Connection", d: "Sisterhood that continues on WhatsApp and Just A Chat." },
              ].map((c) => (
                <div key={c.t} className="bg-white border border-ink/10 p-6">
                  <h4 className="font-display text-xl mb-3">{c.t}</h4>
                  <p className="font-sans text-sm text-olive">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What to Expect */}
          <section className="max-w-[1200px] mx-auto px-6 mt-16">
            <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">What to Expect</span>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                { t: "Marketplace Extravaganza", img: "/assets/Nigerian_market_scenes.jpg" },
                { t: "Entertainment Village", img: "/assets/cultural_festivals.jpg" },
                { t: "One-Day Seminar", img: "/assets/business_meetings.jpg" },
              ].map((c) => (
                <div key={c.t} className="bg-paper border border-ink/10 overflow-hidden">
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

          {/* Speakers */}
          <section className="max-w-[1200px] mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12">
            {[
              { name: "Bunmi Alabi", role: "Convener — Mental Health Counselor, Author Couples' Waiting Room", img: "/convener.jpg", bio: "Compassionate counselor, writer and host of Just A Chat. Founder of Oasis Counseling." },
              { name: "Omotunde Adebowale David", role: "LOLO 1 — Co-host JASIRI, News Central TV", img: "/lolo1.jpg", bio: "Seasoned broadcaster, 25+ years across Wazobia FM, Lasgidi FM — pioneer pidgin radio host." },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-ink/10 p-8 flex gap-6">
                <img src={p.img} alt={p.name} className="w-24 h-24 object-cover rounded-full shrink-0" />
                <div>
                  <h4 className="font-display text-xl">{p.name}</h4>
                  <p className="font-sans text-xs tracking-widest uppercase text-clay">{p.role}</p>
                  <p className="font-sans text-sm text-olive mt-3">{p.bio}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Reviews / Testimonials — only verified */}
          <section className="max-w-[1200px] mx-auto px-6 mt-20 bg-ink text-cream p-8 md:p-12">
            <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Reviews</span>
            <h3 className="font-display text-3xl md:text-4xl mt-3 mb-8">Hear from Our Community</h3>
            <p className="font-sans text-paper/70 max-w-2xl mb-8">Real moments from Unbroken — verified from past build.</p>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
              {[
                { q: "And she won the free massage at #unbroken2024", a: "— Instagram Reel DBZlZDpNaMd (verified caption from un.html)" },
              ].map((r) => (
                <div key={r.q} className="bg-white/5 border border-white/10 p-6">
                  <p className="font-display text-lg leading-snug">“{r.q}”</p>
                  <p className="font-sans text-xs tracking-widest uppercase text-clay mt-4">{r.a}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-xs text-paper/60 mt-6">More reviews are collected via Oasis Counseling and will be published here — no invented testimonials.</p>
            <div className="mt-8 relative aspect-video max-w-3xl mx-auto bg-black/30 border border-white/10 flex items-center justify-center overflow-hidden">
              <video controls poster="/assets/african_women_entrepreneurs.jpg" className="w-full h-full">
                <source src="/sec_vid.mp4" type="video/mp4" />
              </video>
            </div>
            <a href="https://www.instagram.com/reel/DBZlZDpNaMd/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-sans text-xs tracking-widest uppercase text-clay hover:text-cream border-b border-clay pb-1">View Instagram Reel →</a>
          </section>

          {/* Highlights + How to Participate */}
          <section className="max-w-[1200px] mx-auto px-6 mt-20 grid md:grid-cols-2 gap-12 border-t border-ink/10 pt-12">
            <div>
              <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">Highlights</span>
              <h4 className="font-display text-2xl mt-3 mb-4">Previous Editions</h4>
              <p className="font-sans text-olive">Marketplace, entertainment and seminar — captured in the SHERO 2025 highlights reel and supported by our trusted partners.</p>
              <div className="flex gap-4 mt-6">
                <img src="/assets/jdd_logo.png" alt="JDD" className="h-10 bg-white border border-ink/10 p-2" />
                <img src="/assets/thogmi_logo.png" alt="THOGMI" className="h-10 bg-white border border-ink/10 p-2" />
              </div>
            </div>
            <div className="bg-paper border border-ink/10 p-8">
              <h4 className="font-display text-2xl mb-4">How to Participate</h4>
              <ol className="font-sans text-sm text-olive space-y-2 list-decimal pl-5">
                <li>Register online — secure your spot</li>
                <li>Join WhatsApp community</li>
                <li>Prepare for transformation — marketplace, entertainment, seminar</li>
                <li>Attend & transform — 15 Nov 2025, Lagos</li>
              </ol>
              <a href="https://wa.me/2347063038670" className="inline-block mt-6 bg-ink text-cream font-sans text-xs tracking-widest uppercase px-6 py-3">Register Interest</a>
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
    if (stories.length > 0) return stories.map((s) => ({ slug: s.slug }));
  } catch {}
  const { STORIES } = await import("@/data/stories");
  return STORIES.map((s) => ({ slug: s.slug }));
}
