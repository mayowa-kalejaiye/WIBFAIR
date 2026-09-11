type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span className={`font-sans text-xs tracking-[0.2em] uppercase text-clay font-semibold ${className}`}>
      {children}
    </span>
  );
}
