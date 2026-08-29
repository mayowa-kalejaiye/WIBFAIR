import { prisma } from "@/lib/db";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { deleteProject } from "@/lib/actions/projects";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display text-3xl">Projects</h1>
          <p className="font-sans text-sm text-olive mt-1">{projects.length} total</p>
        </div>
        <Link href="/admin/projects/new" className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-6 py-3">New project</Link>
      </div>

      <div className="bg-white border border-ink/10 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-ink/10 bg-paper">
            <tr className="font-sans text-xs tracking-widest uppercase text-olive">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Link</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p: any) => (
              <tr key={p.id} className="border-b border-ink/5 font-sans text-sm">
                <td className="px-4 py-4">
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-olive line-clamp-1">{p.description.slice(0, 80)}</p>
                </td>
                <td className="px-4 py-4 text-xs">{p.year}</td>
                <td className="px-4 py-4 text-xs">{p.link ? <a href={p.link} target="_blank" className="text-clay hover:underline">{p.link}</a> : "—"}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-3">
                    <Link href={`/admin/projects/${p.id}/edit`} className="font-sans text-xs tracking-widest uppercase text-clay hover:text-ink">Edit</Link>
                    <DeleteButton id={p.id} action={deleteProject} />
                  </div>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr><td colSpan={4} className="px-4 py-12 text-center font-sans text-sm text-olive">No projects yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
