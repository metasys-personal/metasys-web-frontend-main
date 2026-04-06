"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "../../../lib/cn";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons";

export interface SelectProps {
  placeholder?: string;
  options: { label: string; value: string }[];
  onValueChange?: (value: string) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  placeholder = "Select...",
  options,
  onValueChange,
  className,
}) => {
  return (
    <RadixSelect.Root onValueChange={onValueChange}>
      <RadixSelect.Trigger
        className={cn(
          "inline-flex w-full items-center justify-between rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm",
          "focus:outline-none focus:ring-2 focus:ring-neutral-900",
          className
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="overflow-hidden rounded-md border border-neutral-300 bg-white shadow-md"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center py-2">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="p-1">
            {options.map((opt) => (
              <RadixSelect.Item
                key={opt.value}
                value={opt.value}
                className={cn(
                  "flex cursor-pointer items-center justify-between rounded px-2 py-2 text-sm",
                  "hover:bg-neutral-100 focus:bg-neutral-100"
                )}
              >
                <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                  <CheckIcon className="h-4 w-4" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex items-center justify-center py-2">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

// Usage

{/* <Select
  placeholder="Choose a country"
  options={[
    { label: "Nigeria", value: "ng" },
    { label: "Ghana", value: "gh" },
    { label: "Kenya", value: "ke" },
  ]}
  onValueChange={(v) => console.log(v)}
/> */}
