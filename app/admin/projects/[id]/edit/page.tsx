import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id }, include: { cover: true } });
  if (!project) notFound();

  return (
    <div>
      <h1 className="font-display text-3xl mb-2">Edit Project</h1>
      <p className="font-sans text-sm text-olive mb-8">{project.name}</p>
      <ProjectForm
        initial={{
          id: project.id,
          name: project.name,
          description: project.description,
          year: project.year,
          link: project.link ?? "",
          coverUrl: project.coverId ? `/api/media/${project.coverId}` : null,
        }}
      />
    </div>
  );
}
