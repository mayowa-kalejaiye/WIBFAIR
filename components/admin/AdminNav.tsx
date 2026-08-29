"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/episodes", label: "Episodes" },
  { href: "/admin/stories", label: "Stories" },
  { href: "/admin/projects", label: "Projects" },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <aside className="w-full md:w-[240px] shrink-0 border-b md:border-b-0 md:border-r border-ink/10 bg-white md:min-h-screen">
      <div className="p-6 md:p-8">
        <Link href="/admin/dashboard" className="font-display text-xl tracking-tight">
          Bunmi Alabi
        </Link>
        <p className="font-sans text-xs tracking-widest uppercase text-olive mt-1">In-House CMS</p>

        <nav className="mt-8 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-sm px-3 py-2 rounded whitespace-nowrap ${
                  active ? "bg-ink text-cream" : "text-ink hover:bg-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-ink/10 hidden md:block">
          <Link href="/" className="font-sans text-xs tracking-widest uppercase text-olive hover:text-ink">
            ← Back to site
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="mt-4 font-sans text-xs tracking-widest uppercase text-clay hover:text-ink block"
          >
            Sign out
          </button>
        </div>
      </div>
    </aside>
  );
}
