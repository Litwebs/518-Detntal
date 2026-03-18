import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className={cn("font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4", light ? "text-primary-foreground" : "text-foreground")}>
        {title}
      </h2>
      <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-4" />
      {subtitle && (
        <p className={cn("max-w-2xl mx-auto text-base md:text-lg", light ? "text-primary-foreground/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
