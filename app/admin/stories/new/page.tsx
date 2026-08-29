import StoryForm from "@/components/admin/StoryForm";

export default function NewStoryPage() {
  return (
    <div>
      <h1 className="font-display text-3xl mb-2">New Story</h1>
      <p className="font-sans text-sm text-olive mb-8">Write a new editorial piece</p>
      <StoryForm />
    </div>
  );
}
