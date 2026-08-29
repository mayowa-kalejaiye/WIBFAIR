import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-display text-3xl mb-2">New Project</h1>
      <p className="font-sans text-sm text-olive mb-8">Add a legacy project</p>
      <ProjectForm />
    </div>
  );
}
