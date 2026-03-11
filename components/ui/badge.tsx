import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--slate-soft)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-strong)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

