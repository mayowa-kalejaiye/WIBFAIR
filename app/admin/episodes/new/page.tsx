import EpisodeForm from "@/components/admin/EpisodeForm";

export default function NewEpisodePage() {
  return (
    <div>
      <h1 className="font-display text-3xl mb-2">New Episode</h1>
      <p className="font-sans text-sm text-olive mb-8">Add a new Just A Chat conversation</p>
      <EpisodeForm />
    </div>
  );
}
