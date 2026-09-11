import Eyebrow from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-2xl`}>
      {eyebrow && <Eyebrow className="mb-4 block">{eyebrow}</Eyebrow>}
      <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">{title}</h2>
      {description && <p className="font-sans text-olive mt-4 leading-relaxed">{description}</p>}
    </div>
  );
}
