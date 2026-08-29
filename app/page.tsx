import Hero from "@/components/sections/Hero";
import LatestContent from "@/components/sections/LatestContent";
import JustAChatReel from "@/components/sections/JustAChatReel";
import StoriesPreview from "@/components/sections/StoriesPreview";
import MemoryWall from "@/components/sections/MemoryWall";
import ConnectCTA from "@/components/sections/ConnectCTA";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <LatestContent />
      <JustAChatReel />
      <StoriesPreview />
      <MemoryWall />
      <ConnectCTA />
    </div>
  );
}
