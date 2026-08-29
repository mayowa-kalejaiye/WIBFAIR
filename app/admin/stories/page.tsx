import { prisma } from "@/lib/db";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteStory } from "@/lib/actions/stories";

export default async function StoriesPage() {
  const stories = await prisma.story.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display text-3xl">Stories</h1>
          <p className="font-sans text-sm text-olive mt-1">{stories.length} total</p>
        </div>
        <Link href="/admin/stories/new" className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-6 py-3">
          New story
        </Link>
      </div>

      <div className="bg-white border border-ink/10 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-ink/10 bg-paper">
            <tr className="font-sans text-xs tracking-widest uppercase text-olive">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s: any) => (
              <tr key={s.id} className="border-b border-ink/5 font-sans text-sm">
                <td className="px-4 py-4">
                  <p className="font-medium">{s.title}</p>
                  <p className="text-xs text-olive">{s.slug}</p>
                </td>
                <td className="px-4 py-4 text-xs">{s.category}</td>
                <td className="px-4 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${s.status === "published" ? "bg-green-50 text-green-700 border border-green-200" : "bg-paper text-olive border border-ink/10"}`}>
                    {s.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex gap-3">
                    <Link href={`/admin/stories/${s.id}/edit`} className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink">Edit</Link>
                    <Link href={`/stories/${s.slug}`} target="_blank" className="font-sans text-xs tracking-widest uppercase text-olive hover:text-ink">View</Link>
                    <DeleteButton id={s.id} action={deleteStory} />
                  </div>
                </td>
              </tr>
            ))}
            {stories.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-12 text-center font-sans text-sm text-olive">No stories yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
