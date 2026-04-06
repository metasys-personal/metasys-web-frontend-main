// components/ui/Tooltip.tsx
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../../lib/cn";

export interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {
  content: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, className, children, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className={cn(
            "rounded bg-gray-900 text-white text-sm px-2 py-1 shadow-md z-50",
            className
          )}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-gray-900" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;

// Usage

{/* <Tooltip content="This is a tooltip">
  <button className="px-4 py-2 bg-blue-500 text-white rounded">
    Hover me
  </button>
</Tooltip> */}
