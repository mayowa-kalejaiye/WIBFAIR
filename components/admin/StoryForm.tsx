"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { storySchema, type StoryFormValues } from "@/lib/validations";
import { createStory, updateStory } from "@/lib/actions/stories";
import { useState } from "react";

type Props = {
  initial?: Partial<StoryFormValues> & { id?: string; coverUrl?: string | null };
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function StoryForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial?.id;
  const [serverError, setServerError] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(initial?.coverUrl ?? null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<StoryFormValues>({
    resolver: zodResolver(storySchema as any),
    defaultValues: {
      title: initial?.title ?? "",
      slug: initial?.slug ?? "",
      excerpt: initial?.excerpt ?? "",
      content: initial?.content ?? "",
      category: initial?.category ?? "",
      status: (initial?.status as any) ?? "draft",
      publishedAt: initial?.publishedAt ? new Date(initial.publishedAt) : undefined,
    },
  });

  const onSubmit = async (data: StoryFormValues) => {
    setServerError(null);
    const formData = new FormData();
    formData.set("title", data.title);
    formData.set("slug", data.slug);
    formData.set("excerpt", data.excerpt);
    formData.set("content", data.content);
    formData.set("category", data.category);
    formData.set("status", data.status);
    if (data.publishedAt) formData.set("publishedAt", new Date(data.publishedAt).toISOString());

    const fileInput = document.getElementById("cover") as HTMLInputElement | null;
    if (fileInput?.files?.[0]) formData.set("cover", fileInput.files[0]);

    const remove = (document.getElementById("removeCover") as HTMLInputElement | null)?.checked;
    if (remove) formData.set("removeCover", "true");

    try {
      const res = isEdit ? await updateStory(initial!.id!, formData) : await createStory(formData);
      if ((res as any)?.error) {
        const err = (res as any).error;
        if (typeof err === "string") setServerError(err);
        else if (err?.fieldErrors) {
          const first = Object.values(err.fieldErrors).flat()[0] as string | undefined;
          setServerError(first ?? "Validation failed");
        } else setServerError("Failed to save");
        return;
      }
      router.push("/admin/stories");
      router.refresh();
    } catch (e: any) {
      setServerError(e.message ?? "Failed to save");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white border border-ink/10 p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Title</label>
          <input
            {...register("title")}
            onBlur={(e) => {
              const slugEl = document.getElementById("slug") as HTMLInputElement | null;
              if (slugEl && !slugEl.value) setValue("slug", slugify(e.target.value), { shouldValidate: true });
            }}
            placeholder="The art of letting go"
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm"
          />
          {errors.title && <p className="font-sans text-xs text-red-600 mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Slug</label>
          <input id="slug" {...register("slug")} className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.slug && <p className="font-sans text-xs text-red-600 mt-1">{errors.slug.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Category</label>
          <input {...register("category")} placeholder="Faith" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.category && <p className="font-sans text-xs text-red-600 mt-1">{errors.category.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Excerpt</label>
          <textarea {...register("excerpt")} rows={3} className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.excerpt && <p className="font-sans text-xs text-red-600 mt-1">{errors.excerpt.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Content</label>
          <textarea {...register("content")} rows={10} className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.content && <p className="font-sans text-xs text-red-600 mt-1">{errors.content.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Status</label>
          <select {...register("status")} className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Published At</label>
          <input {...register("publishedAt")} type="date" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
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
          {isSubmitting ? "Saving..." : isEdit ? "Update story" : "Create story"}
        </button>
        <button type="button" onClick={() => router.push("/admin/stories")} className="border border-ink/20 font-sans text-xs tracking-widest uppercase px-8 py-3">Cancel</button>
      </div>
    </form>
  );
}
