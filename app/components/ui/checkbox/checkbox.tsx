"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "../../../lib/cn";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label?: string;
  className?: string;
}

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, ...props }, ref) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          "w-5 h-5 border border-gray-400 rounded focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="w-4 h-4 text-blue-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <span className="text-sm select-none">{label}</span>}
    </label>
  );
});

Checkbox.displayName = "Checkbox";

// Usage

{/* <Checkbox label="I agree to the terms" />
<Checkbox label="Subscribe to newsletter" checked disabled />
<Checkbox className="border-red-500" label="Custom styled" /> */}
