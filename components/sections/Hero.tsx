import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-6 lg:col-span-5 relative z-10 pt-12 md:pt-0">
          <h1 className="font-display text-7xl md:text-[110px] leading-[0.85] tracking-tight mb-8">
            Bunmi<br />Alabi
          </h1>
          <p className="font-sans text-xl md:text-2xl text-olive leading-relaxed max-w-md mb-12">
            Conversations about faith, family, relationships, life and everything in between.
          </p>
          <div className="flex gap-8 items-center">
            <a 
              href="/just-a-chat" 
              className="font-sans text-sm font-semibold tracking-widest uppercase border-b border-ink pb-1 hover:text-clay hover:border-clay transition-colors"
            >
              Watch Just A Chat
            </a>
            <a 
              href="/stories" 
              className="font-sans text-sm font-semibold tracking-widest uppercase text-olive hover:text-ink transition-colors"
            >
              Explore Stories
            </a>
          </div>
        </div>

        {/* Image / Portrait */}
        <div className="md:col-span-6 lg:col-span-7 relative">
          <div className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-[600px] mx-auto md:ml-auto md:mr-0 overflow-hidden rounded-[2px] bg-paper">
            <Image
              src="/enhanced/convener-enhanced.jpg"
              alt="Bunmi Alabi — portrait"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-top"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
