"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../../lib/cn"

// WCAG-compliant focus ring + accessible hover/focus behavior
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none aria-disabled:opacity-50 aria-disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
        ghost: "hover:bg-gray-100",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component
        ref={ref}
        // Accessibility:
        // - `type="button"` prevents accidental form submission
        // - `aria-disabled` ensures screen readers announce disabled state
        type={asChild ? undefined : props.type ?? "button"}
        aria-disabled={disabled ? true : undefined}
        disabled={!asChild ? disabled : undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"


// Usage

// import { Button } from "@/components/ui/button"

// export default function Example() {
//   return (
//     <Button>
//       Click me
//     </Button>
//   )
// }


// <Button variant="primary">Save</Button>
// <Button variant="outline">Cancel</Button>
// <Button variant="ghost">View</Button>
// <Button size="sm">Small</Button>
// <Button size="md">Medium</Button>
// <Button size="lg">Large</Button>
// <Button disabled>Loading...</Button>
// <Button className="w-full">Submit</Button>

