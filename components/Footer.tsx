"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-ink text-cream py-16 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl tracking-tight">
              Bunmi Alabi
            </Link>
            <p className="font-sans text-sm text-paper/70 max-w-sm leading-relaxed mt-4">
              Mental Health Counselor, Author of Couples’ Waiting Room, Convener of Unbroken. Oasis Counseling — Just A Chat.
            </p>
          </div>
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-clay font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 font-sans text-sm text-paper/70">
              <li><Link href="/just-a-chat" className="hover:text-cream transition-colors">Just A Chat</Link></li>
              <li><Link href="/stories" className="hover:text-cream transition-colors">Stories</Link></li>
              <li><Link href="/about" className="hover:text-cream transition-colors">About</Link></li>
              <li><Link href="/events" className="hover:text-cream transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-xs tracking-widest uppercase text-clay font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 font-sans text-sm text-paper/70">
              <li><a href="https://www.instagram.com/Bunmi.Tomialabi/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/@bunmialabi7" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">YouTube</a></li>
              <li><a href="https://selar.com/m/BunmiAlabi" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Selar Shop</a></li>
              <li><a href="mailto:unbrokenladies@gmail.com" className="hover:text-cream transition-colors">unbrokenladies@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs tracking-widest uppercase text-paper/50">
          <p>© {new Date().getFullYear()} Bunmi Alabi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/connect" className="hover:text-cream">Connect</Link>
            <span>Quiet Luxury — Editorial</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
