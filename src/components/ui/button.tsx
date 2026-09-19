import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  size?: "default" | "large";
};

export function Button({ asChild, size = "default", className = "", ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  const sizeClass = size === "large" ? "min-h-14 px-7 py-4 text-sm sm:px-9 sm:text-base" : "min-h-11 px-5 py-3 text-sm";

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary font-bold text-primary-foreground shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-cta-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${sizeClass} ${className}`}
      {...props}
    />
  );
}