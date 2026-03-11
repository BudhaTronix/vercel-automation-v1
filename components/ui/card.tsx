import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("gradient-border relative rounded-[1.6rem] border border-[color:var(--border)] bg-[color:var(--card-strong)]", className)}>
      {children}
    </div>
  );
}

