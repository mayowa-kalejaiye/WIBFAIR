import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function DashboardPage() {
  const [episodeCount, storyCount, projectCount, recentEpisodes, recentStories] = await Promise.all([
    prisma.episode.count(),
    prisma.story.count(),
    prisma.project.count(),
    prisma.episode.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
    prisma.story.findMany({ orderBy: { updatedAt: "desc" }, take: 5 }),
  ]);

  const publishedEpisodes = await prisma.episode.count({ where: { status: "published" } });
  const draftEpisodes = episodeCount - publishedEpisodes;

  return (
    <div>
      <h1 className="font-display text-4xl mb-2">Dashboard</h1>
      <p className="font-sans text-olive mb-10">Publishing overview</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-white border border-ink/10 p-6">
          <p className="font-sans text-xs tracking-widest uppercase text-olive">Episodes</p>
          <p className="font-display text-4xl mt-2">{episodeCount}</p>
          <p className="font-sans text-xs text-olive mt-1">{publishedEpisodes} published · {draftEpisodes} draft</p>
          <Link href="/admin/episodes" className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink mt-4 inline-block">Manage →</Link>
        </div>
        <div className="bg-white border border-ink/10 p-6">
          <p className="font-sans text-xs tracking-widest uppercase text-olive">Stories</p>
          <p className="font-display text-4xl mt-2">{storyCount}</p>
          <Link href="/admin/stories" className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink mt-4 inline-block">Manage →</Link>
        </div>
        <div className="bg-white border border-ink/10 p-6">
          <p className="font-sans text-xs tracking-widest uppercase text-olive">Projects</p>
          <p className="font-display text-4xl mt-2">{projectCount}</p>
          <Link href="/admin/projects" className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink mt-4 inline-block">Manage →</Link>
        </div>
        <div className="bg-white border border-ink/10 p-6 flex flex-col justify-center">
          <p className="font-sans text-xs tracking-widest uppercase text-olive mb-4">Quick actions</p>
          <Link href="/admin/episodes/new" className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-4 py-2 text-center mb-2">New episode</Link>
          <Link href="/admin/stories/new" className="border border-ink font-sans text-xs tracking-widest uppercase px-4 py-2 text-center">New story</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-ink/10 p-6">
          <h2 className="font-display text-xl mb-4">Recent episodes</h2>
          <div className="space-y-3">
            {recentEpisodes.map((ep) => (
              <Link key={ep.id} href={`/admin/episodes/${ep.id}/edit`} className="flex justify-between items-center border-b border-ink/5 pb-3 last:border-0 hover:opacity-70">
                <div>
                  <p className="font-sans text-sm font-medium line-clamp-1">{ep.title}</p>
                  <p className="font-sans text-xs text-olive">{ep.status} · {ep.slug}</p>
                </div>
                <span className="font-sans text-xs text-olive">{new Date(ep.updatedAt).toLocaleDateString()}</span>
              </Link>
            ))}
            {recentEpisodes.length === 0 && <p className="font-sans text-sm text-olive">No episodes yet</p>}
          </div>
        </div>
        <div className="bg-white border border-ink/10 p-6">
          <h2 className="font-display text-xl mb-4">Recent stories</h2>
          <div className="space-y-3">
            {recentStories.map((s) => (
              <Link key={s.id} href={`/admin/stories/${s.id}/edit`} className="flex justify-between items-center border-b border-ink/5 pb-3 last:border-0 hover:opacity-70">
                <div>
                  <p className="font-sans text-sm font-medium line-clamp-1">{s.title}</p>
                  <p className="font-sans text-xs text-olive">{s.status} · {s.category}</p>
                </div>
                <span className="font-sans text-xs text-olive">{new Date(s.updatedAt).toLocaleDateString()}</span>
              </Link>
            ))}
            {recentStories.length === 0 && <p className="font-sans text-sm text-olive">No stories yet</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
