import Image from "next/image";
import { STORIES } from "@/data/stories";
import Link from "next/link";

export default function StoriesPreview() {
  const featuredStory = STORIES[0];
  const sideStories = STORIES.slice(1, 3);

  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-16 border-b border-ink/10 pb-6">
          <h2 className="font-display text-4xl md:text-5xl">Stories</h2>
          <Link 
            href="/stories" 
            className="font-sans text-xs font-semibold tracking-widest uppercase text-olive hover:text-ink transition-colors"
          >
            View Archive &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Featured Story - Massive Offset layout */}
          <div className="lg:col-span-7 group cursor-pointer">
            <Link href={`/stories/${featuredStory.slug}`}>
              <div className="flex gap-4 items-baseline mb-4">
                <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold">
                  Featured
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-olive">
                  {featuredStory.publishedAt}
                </span>
              </div>
              
              <div className="relative aspect-[4/5] bg-paper overflow-hidden mb-8 rounded-[2px]">
                <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src="/assets/grid.jpg"
                  alt={featuredStory.title}
                  fill
                  quality={90}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="font-display text-5xl md:text-6xl mb-6 group-hover:text-clay transition-colors duration-300">
                {featuredStory.title}
              </h3>
              <p className="font-sans text-olive text-lg max-w-lg leading-relaxed">
                {featuredStory.excerpt}
              </p>
            </Link>
          </div>

          {/* Secondary Stories - Stacked */}
          <div className="lg:col-span-5 flex flex-col gap-16 lg:mt-32">
            {sideStories.map((story: any, index: number) => (
              <article key={story.id} className="group cursor-pointer">
                <Link href={`/stories/${story.slug}`}>
                  <div className={`relative aspect-[4/3] bg-paper overflow-hidden mb-6 rounded-[2px] ${index === 1 ? 'lg:ml-12 lg:w-4/5' : ''}`}>
                    <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src={index === 0 ? "/assets/Nigerian_fashion_displays.jpg" : "/assets/Nigerian_market_scenes.jpg"}
                      alt={story.title}
                      fill
                      quality={90}
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  <div className={`flex gap-4 items-baseline mb-3 ${index === 1 ? 'lg:ml-12' : ''}`}>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-olive font-semibold">
                      {story.category}
                    </span>
                    <span className="font-sans text-[10px] tracking-widest uppercase text-olive">
                      {story.publishedAt}
                    </span>
                  </div>
                  
                  <h3 className={`font-display text-3xl md:text-4xl mb-4 group-hover:text-clay transition-colors duration-300 ${index === 1 ? 'lg:ml-12' : ''}`}>
                    {story.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
