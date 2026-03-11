import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium tracking-[-0.01em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-[color:var(--foreground)] bg-[color:var(--foreground)] px-5 py-3 text-[color:var(--background)] hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] hover:border-[color:var(--accent-strong)]",
        secondary:
          "border-[color:var(--border)] bg-[color:var(--card-strong)] px-5 py-3 text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent-strong)]",
        ghost:
          "border-transparent px-0 py-0 text-[color:var(--muted-strong)] hover:text-[color:var(--foreground)]",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);

Button.displayName = "Button";

