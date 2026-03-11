import { Badge } from "@/components/ui/badge";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex max-w-3xl flex-col gap-4">
      <Badge>{eyebrow}</Badge>
      <div className="space-y-3">
        <h2 className="display-font text-3xl leading-tight tracking-[-0.03em] text-balance text-[color:var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

