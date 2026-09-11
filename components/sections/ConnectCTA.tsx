import Link from "next/link";
import FlowerMotif from "@/components/motif/FlowerMotif";

export default function ConnectCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#FDF6F8] flex flex-col items-center justify-center text-center px-6 w-full border-t border-[#EDD8E4]">
      <div className="mb-6">
        <FlowerMotif size={64} ambient={true} interactive={true} />
      </div>

      <span className="font-sans text-xs tracking-[0.24em] uppercase text-[#C97A9E] font-semibold mb-6 block text-center">
        Let&apos;s Connect
      </span>
      
      <h2 className="font-display text-5xl md:text-7xl lg:text-[96px] leading-[0.88] tracking-tight text-[#1A1118] mb-12 text-center mx-auto">
        Come say <br />hello.
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        <a 
          href="https://www.instagram.com/Bunmi.Tomialabi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#7A5C72] group-hover:text-[#C97A9E] transition-colors duration-300 font-semibold">
            Instagram
          </span>
          <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C97A9E] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        
        <a 
          href="https://www.youtube.com/@bunmialabi7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#7A5C72] group-hover:text-[#C97A9E] transition-colors duration-300 font-semibold">
            YouTube
          </span>
          <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C97A9E] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
        
        <Link 
          href="/just-a-chat" 
          className="group relative"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#7A5C72] group-hover:text-[#C97A9E] transition-colors duration-300 font-semibold">
            Just A Chat
          </span>
          <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C97A9E] group-hover:w-full transition-all duration-300 ease-out" />
        </Link>

        <Link 
          href="/counseling" 
          className="group relative"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#7A5C72] group-hover:text-[#C97A9E] transition-colors duration-300 font-semibold">
            Oasis
          </span>
          <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C97A9E] group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
        
        <a 
          href="mailto:unbrokenladies@gmail.com" 
          className="group relative"
        >
          <span className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#7A5C72] group-hover:text-[#C97A9E] transition-colors duration-300 font-semibold">
            Email
          </span>
          <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#C97A9E] group-hover:w-full transition-all duration-300 ease-out" />
        </a>
      </div>
    </section>
  );
}
