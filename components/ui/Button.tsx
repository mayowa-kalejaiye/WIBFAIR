import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

export function PrimaryButton({ children, href, className = "", onClick }: ButtonProps) {
  const cls = `inline-flex items-center justify-center bg-ink text-white font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-ink-soft transition-colors focus:outline-none focus:ring-2 focus:ring-pink/50 ${className}`;
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, href, className = "", onClick }: ButtonProps) {
  const cls = `inline-flex items-center justify-center bg-white border border-ink/15 text-ink font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-blush transition-colors focus:outline-none focus:ring-2 focus:ring-pink/30 ${className}`;
  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
