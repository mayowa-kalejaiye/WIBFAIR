"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { episodeSchema, type EpisodeFormValues } from "@/lib/validations";
import { createEpisode, updateEpisode } from "@/lib/actions/episodes";
import { useState } from "react";

type Props = {
  initial?: Partial<EpisodeFormValues> & { id?: string; thumbnailUrl?: string | null };
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function EpisodeForm({ initial }: Props) {
  const router = useRouter();
  const isEdit = !!initial?.id;
  const [serverError, setServerError] = useState<string | null>(null);
  const [thumbPreview, setThumbPreview] = useState<string | null>(initial?.thumbnailUrl ?? null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EpisodeFormValues>({
    resolver: zodResolver(episodeSchema as any),
    defaultValues: {
      title: initial?.title ?? "",
      slug: initial?.slug ?? "",
      description: initial?.description ?? "",
      youtubeUrl: initial?.youtubeUrl ?? "",
      guest: initial?.guest ?? "",
      topics: initial?.topics ?? [],
      durationMinutes: initial?.durationMinutes ?? undefined,
      status: (initial?.status as any) ?? "draft",
      publishedAt: initial?.publishedAt ? new Date(initial.publishedAt) : undefined,
    },
  });

  const title = watch("title");

  const onSubmit = async (data: EpisodeFormValues) => {
    setServerError(null);
    const formData = new FormData();
    formData.set("title", data.title);
    formData.set("slug", data.slug);
    formData.set("description", data.description);
    formData.set("youtubeUrl", data.youtubeUrl);
    formData.set("guest", data.guest ?? "");
    formData.set("topics", (data.topics ?? []).join(", "));
    if (data.durationMinutes) formData.set("durationMinutes", String(data.durationMinutes));
    formData.set("status", data.status);
    if (data.publishedAt) formData.set("publishedAt", new Date(data.publishedAt).toISOString());

    const fileInput = document.getElementById("thumbnail") as HTMLInputElement | null;
    if (fileInput?.files?.[0]) {
      formData.set("thumbnail", fileInput.files[0]);
    }

    const removeFlag = (document.getElementById("removeThumbnail") as HTMLInputElement | null)?.checked;
    if (removeFlag) formData.set("removeThumbnail", "true");

    try {
      const res = isEdit
        ? await updateEpisode(initial!.id!, formData)
        : await createEpisode(formData);

      if ((res as any)?.error) {
        const err = (res as any).error;
        if (typeof err === "string") setServerError(err);
        else if (err?.fieldErrors) {
          const first = Object.values(err.fieldErrors).flat()[0] as string | undefined;
          setServerError(first ?? "Validation failed");
        } else if (err?.formErrors?.[0]) setServerError(err.formErrors[0]);
        else setServerError("Failed to save");
        return;
      }
      router.push("/admin/episodes");
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
              const slugField = (document.getElementById("slug") as HTMLInputElement | null);
              // auto-fill slug if empty
              if (slugField && !slugField.value) {
                setValue("slug", slugify(e.target.value), { shouldValidate: true });
              }
            }}
            placeholder="What marriage taught me about myself"
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm focus:outline-none focus:border-ink"
          />
          {errors.title && <p className="font-sans text-xs text-red-600 mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Slug</label>
          <input
            id="slug"
            {...register("slug")}
            placeholder="what-marriage-taught-me..."
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm focus:outline-none focus:border-ink"
          />
          {errors.slug && <p className="font-sans text-xs text-red-600 mt-1">{errors.slug.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">YouTube URL</label>
          <input
            {...register("youtubeUrl")}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm focus:outline-none focus:border-ink"
          />
          {errors.youtubeUrl && <p className="font-sans text-xs text-red-600 mt-1">{errors.youtubeUrl.message}</p>}
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Description</label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="In this conversation, we explore..."
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm focus:outline-none focus:border-ink"
          />
          {errors.description && <p className="font-sans text-xs text-red-600 mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Guest (optional)</label>
          <input {...register("guest")} placeholder="Akin Alabi" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.guest && <p className="font-sans text-xs text-red-600 mt-1">{errors.guest.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Duration (minutes)</label>
          <input {...register("durationMinutes")} type="number" placeholder="42" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
          {errors.durationMinutes && <p className="font-sans text-xs text-red-600 mt-1">{errors.durationMinutes.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Topics (comma separated)</label>
          <input
            defaultValue={(initial?.topics ?? []).join(", ")}
            onChange={(e) => setValue("topics", e.target.value.split(",").map(s=>s.trim()).filter(Boolean) as any, { shouldValidate: true })}
            placeholder="Marriage, Family, Faith"
            className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm"
          />
          {errors.topics && <p className="font-sans text-xs text-red-600 mt-1">{errors.topics.message}</p>}
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Status</label>
          <select {...register("status")} className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div>
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Published At (optional)</label>
          <input {...register("publishedAt")} type="date" className="w-full border border-ink/20 bg-cream px-4 py-3 font-sans text-sm" />
        </div>

        <div className="md:col-span-2">
          <label className="font-sans text-xs tracking-widest uppercase text-olive block mb-2">Thumbnail (5MB max, jpg/png/webp)</label>
          {thumbPreview && (
            <div className="mb-3">
              <img src={thumbPreview} alt="thumbnail" className="h-32 object-cover border border-ink/10" />
              <label className="font-sans text-xs flex items-center gap-2 mt-2">
                <input type="checkbox" id="removeThumbnail" />
                Remove current image
              </label>
            </div>
          )}
          <input
            id="thumbnail"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) setThumbPreview(URL.createObjectURL(f));
            }}
            className="w-full border border-ink/20 bg-cream px-4 py-2 font-sans text-sm"
          />
        </div>
      </div>

      {serverError && <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2">{serverError}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={isSubmitting} className="bg-ink text-cream font-sans text-xs tracking-widest uppercase px-8 py-3 disabled:opacity-50">
          {isSubmitting ? "Saving..." : isEdit ? "Update episode" : "Create episode"}
        </button>
        <button type="button" onClick={() => router.push("/admin/episodes")} className="border border-ink/20 font-sans text-xs tracking-widest uppercase px-8 py-3">
          Cancel
        </button>
      </div>
    </form>
  );
}
