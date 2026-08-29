import Link from "next/link";

export default function ConnectCTA() {
  return (
    <section className="py-32 md:py-48 bg-cream flex flex-col items-center justify-center text-center px-6 w-full">
      <span className="font-sans text-xs tracking-widest uppercase text-clay font-semibold mb-8 block text-center">
        Let&apos;s Connect
      </span>
      
      <h2 className="font-display text-5xl md:text-7xl lg:text-[110px] leading-[0.85] tracking-tight text-ink mb-16 text-center mx-auto">
        Come say<br />hello.
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        <a 
          href="https://www.instagram.com/Bunmi.Tomialabi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <span className="font-sans text-sm md:text-base tracking-widest uppercase text-olive group-hover:text-ink transition-colors duration-300">
            Instagram
          </span>
          <span className="absolute -bottom-2 left-0 w-0 h-px bg-ink group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        
        <a 
          href="https://www.youtube.com/@bunmialabi7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <span className="font-sans text-sm md:text-base tracking-widest uppercase text-olive group-hover:text-ink transition-colors duration-300">
            YouTube
          </span>
          <span className="absolute -bottom-2 left-0 w-0 h-px bg-ink group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        
        <Link 
          href="/just-a-chat" 
          className="group relative"
        >
          <span className="font-sans text-sm md:text-base tracking-widest uppercase text-olive group-hover:text-ink transition-colors duration-300">
            Just A Chat
          </span>
          <span className="absolute -bottom-2 left-0 w-0 h-px bg-ink group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
        
        <a 
          href="mailto:unbrokenladies@gmail.com" 
          className="group relative"
        >
          <span className="font-sans text-sm md:text-base tracking-widest uppercase text-olive group-hover:text-ink transition-colors duration-300">
            Email
          </span>
          <span className="absolute -bottom-2 left-0 w-0 h-px bg-ink group-hover:w-full transition-all duration-300 ease-out" />
        </a>
      </div>
    </section>
  );
}
