import { prisma } from "@/lib/db";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteEpisode } from "@/lib/actions/episodes";

export default async function EpisodesPage() {
  const episodes = await prisma.episode.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display text-3xl">Episodes</h1>
          <p className="font-sans text-sm text-olive mt-1">{episodes.length} total · Manage Just A Chat</p>
        </div>
        <Link href="/admin/episodes/new" className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-6 py-3">
          New episode
        </Link>
      </div>

      <div className="bg-white border border-ink/10 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-ink/10 bg-paper">
            <tr className="font-sans text-xs tracking-widest uppercase text-olive">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Published</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((ep) => (
              <tr key={ep.id} className="border-b border-ink/5 font-sans text-sm">
                <td className="px-4 py-4">
                  <p className="font-medium">{ep.title}</p>
                  <p className="text-xs text-olive">{ep.slug}</p>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${ep.status === "published" ? "bg-green-50 text-green-700 border border-green-200" : "bg-paper text-olive border border-ink/10"}`}>
                    {ep.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-xs text-olive">
                  {ep.publishedAt ? new Date(ep.publishedAt).toLocaleDateString() : "—"}
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-3">
                    <Link href={`/admin/episodes/${ep.id}/edit`} className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink">
                      Edit
                    </Link>
                    <Link href={`/just-a-chat/${ep.slug}`} target="_blank" className="font-sans text-xs tracking-widest uppercase text-olive hover:text-ink">
                      View
                    </Link>
                    <DeleteButton id={ep.id} action={deleteEpisode} />
                  </div>
                </td>
              </tr>
            ))}
            {episodes.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-12 text-center font-sans text-sm text-olive">
                  No episodes yet. Create your first episode.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
