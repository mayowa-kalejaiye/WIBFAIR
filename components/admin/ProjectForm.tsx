"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema, type ProjectFormValues } from "@/lib/validations";
import { createProject, updateProject } from "@/lib/actions/projects";
import { useState } from "react";

type Props = {
  initial?: Partial<ProjectFormValues> & { id?: string; coverUrl?: string | null };
};

export default function ProjectForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial?.id;
  const [serverError, setServerError] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(initial?.coverUrl ?? null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema as any),
    defaultValues: {
      name: initial?.name ?? "",
      description: initial?.description ?? "",
      year: initial?.year ?? "",
      link: initial?.link ?? "",
    },
  });

  const onSubmit = async (data: ProjectFormValues) => {
    setServerError(null);
    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("description", data.description);
    formData.set("year", data.year);
    formData.set("link", data.link ?? "");

    const fileInput = document.getElementById("cover") as HTMLInputElement | null;
    if (fileInput?.files?.[0]) formData.set("cover", fileInput.files[0]);

    const remove = (document.getElementById("removeCover") as HTMLInputElement | null)?.checked;
    if (remove) formData.set("removeCover", "true");

    try {
      const res = isEdit ? await updateProject(initial!.id!, formData) : await createProject(formData);
      if ((res as any)?.error) {
        const err = (res as any).error;
        if (typeof err === "string") setServerError(err);
        else if (err?.fieldErrors) {
          const first = Object.values(err.fieldErrors).flat()[0] as string | undefined;
          setServerError(first ?? "Validation failed");
        } else setServerError("Failed to save");
        return;
      }
      router.push("/admin/projects");
      router.refresh();
    } catch (e: any) {
      setServerError(e.message ?? "Failed to save");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white border border-ink/10 p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Name</label>
          <input {...register("name")} placeholder="Just A Chat" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.name && <p className="font-sans text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Year</label>
          <input {...register("year")} placeholder="2024–Present" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.year && <p className="font-sans text-xs text-red-600 mt-1">{errors.year.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Description</label>
          <textarea {...register("description")} rows={4} className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.description && <p className="font-sans text-xs text-red-600 mt-1">{errors.description.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Link (optional)</label>
          <input {...register("link")} placeholder="https://..." className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.link && <p className="font-sans text-xs text-red-600 mt-1">{errors.link.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Cover image</label>
          {coverPreview && (
            <div className="mb-3">
              <img src={coverPreview} alt="cover" className="h-40 object-cover border border-ink/10" />
              <label className="font-sans text-xs flex items-center gap-2 mt-2">
                <input type="checkbox" id="removeCover" /> Remove current image
              </label>
            </div>
          )}
          <input id="cover" type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={(e) => { const f = e.target.files?.[0]; if (f) setCoverPreview(URL.createObjectURL(f)); }} className="w-full border border-ink/20 bg-cream px-4 py-2 font-sans text-sm" />
        </div>
      </div>

      {serverError && <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2">{serverError}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={isSubmitting} className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-8 py-3 disabled:opacity-50">
          {isSubmitting ? "Saving..." : isEdit ? "Update project" : "Create project"}
        </button>
        <button type="button" onClick={() => router.push("/admin/projects")} className="border border-ink/20 font-sans text-xs tracking-widest uppercase px-8 py-3">Cancel</button>
      </div>
    </form>
  );
}
