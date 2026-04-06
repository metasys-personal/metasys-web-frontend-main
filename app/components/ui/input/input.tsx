"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "w-full rounded-md border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-1",
  {
    variants: {
      size: {
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-3",
        lg: "text-lg py-3 px-4",
      },
      variant: {
        default: "border-gray-400 focus:ring-blue-500",
        error: "border-red-500 focus:ring-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, // omit size here
    VariantProps<typeof inputVariants> {
  label?: string;
  id?: string;
  hint?: string;
  error?: string;
}


export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, hint, error, size, variant, className, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="flex flex-col w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1 font-medium text-sm text-foreground">
            {label}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          aria-describedby={hintId}
          aria-invalid={!!error}
          className={cn(inputVariants({ size, variant: error ? "error" : variant }), className)}
          {...props}
        />

        {hint && !error && (
          <span id={hintId} className="mt-1 text-xs text-muted-foreground">
            {hint}
          </span>
        )}

        {error && (
          <span id={errorId} className="mt-1 text-xs text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";


// Usage

{/* <Input 
  label="Username" 
  placeholder="Enter your username" 
  size="md" 
  hint="Your public username" 
/>

<Input 
  label="Email" 
  placeholder="Enter your email" 
  size="lg" 
  error="Invalid email address" 
/> */}
