"use client";

import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn"

const linkVariants = cva(
  "inline-flex items-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-blue-600 hover:text-blue-700 underline",
        subtle: "text-muted-foreground hover:text-foreground",
        button:
          "px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof linkVariants> {
  href: string;
}

export function Link({ href, variant, size, className, ...props }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={cn(linkVariants({ variant, size }), className)}
      {...props}
    />
  );
}

// Usage

{/* <Link href="/about">Go to About</Link>
<Link href="/pricing" variant="subtle">Pricing</Link>
<Link href="/signup" variant="button" size="md">Sign Up</Link> */}
