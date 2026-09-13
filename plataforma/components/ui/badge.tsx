import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-chico border px-2 py-0.5 text-xs font-medium leading-5 whitespace-nowrap",
  {
    variants: {
      variant: {
        neutro: "border-regla bg-nota text-gris",
        chile: "border-acento-regla bg-acento-fondo text-acento",
        propuesta: "border-propuesta-regla bg-propuesta-fondo text-propuesta",
        referencia: "border-referencia-regla bg-referencia-fondo text-referencia",
        alerta: "border-alerta-regla bg-alerta-fondo text-tinta",
        tinta: "border-tinta bg-tinta text-papel",
      },
    },
    defaultVariants: { variant: "neutro" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
