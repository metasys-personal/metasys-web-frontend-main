"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../../lib/cn";

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  options: RadioOption[];
  className?: string;
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ options, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn("flex flex-col space-y-2", className)}
      {...props}
    >
      {options.map((option: RadioOption) => (
        <label
          key={option.value}
          className={cn(
            "flex items-center space-x-2 cursor-pointer",
            option.disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <RadioGroupPrimitive.Item
            value={option.value}
            disabled={option.disabled}
            className={cn(
              "w-5 h-5 border border-gray-400 rounded-full focus:ring-2 focus:ring-blue-500",
              "flex items-center justify-center"
            )}
          >
            <RadioGroupPrimitive.Indicator className="bg-blue-500 w-3 h-3 rounded-full" />
          </RadioGroupPrimitive.Item>
          <span className="text-sm select-none">{option.label}</span>
        </label>
      ))}
    </RadioGroupPrimitive.Root>
  );
});

RadioGroup.displayName = "RadioGroup";


// Usage

{/* <RadioGroup
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3", disabled: true },
  ]}
  defaultValue="option2"
/> */}
