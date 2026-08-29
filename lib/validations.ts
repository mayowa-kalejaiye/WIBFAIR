import { z } from "zod";

// ─── Episode ────────────────────────────────────────────────────────────────

export const episodeSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
  description: z.string().min(1, "Description is required").max(2000),
  youtubeUrl: z
    .string()
    .min(1, "YouTube URL is required")
    .url("Must be a valid URL")
    .refine(
      (url) => url.includes("youtube.com") || url.includes("youtu.be"),
      "Must be a YouTube URL"
    ),
  guest: z.string().max(100).optional().or(z.literal("")),
  topics: z.array(z.string()).min(1, "At least one topic is required"),
  durationMinutes: z.coerce.number().int().positive().optional(),
  status: z.enum(["draft", "published"]).default("draft"),
  publishedAt: z.coerce.date().optional(),
});

export type EpisodeFormValues = z.infer<typeof episodeSchema>;

// ─── Story ──────────────────────────────────────────────────────────────────

export const storySchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens"),
  excerpt: z.string().min(1, "Excerpt is required").max(500),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  status: z.enum(["draft", "published"]).default("draft"),
  publishedAt: z.coerce.date().optional(),
});

export type StoryFormValues = z.infer<typeof storySchema>;

// ─── Project ────────────────────────────────────────────────────────────────

export const projectSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  description: z.string().min(1, "Description is required").max(2000),
  year: z.string().min(1, "Year is required").max(20),
  link: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

// ─── Media Upload ───────────────────────────────────────────────────────────

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export const mediaUploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .png, .webp, and .avif formats are accepted"
    ),
});

// ─── Auth ───────────────────────────────────────────────────────────────────

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
