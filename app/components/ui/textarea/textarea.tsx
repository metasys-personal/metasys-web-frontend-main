"use client";

import * as React from "react";
import { cn } from "../../../lib/cn";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  resize?: "none" | "vertical" | "horizontal" | "both";
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, resize = "vertical", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900",
          "placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1",
          {
            "resize-none": resize === "none",
            "resize-y": resize === "vertical",
            "resize-x": resize === "horizontal",
            "resize": resize === "both",
          },
          className
        )}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

// Usage

{/* <TextArea placeholder="Write something..." resize="vertical" />
<TextArea placeholder="No resize allowed" resize="none" />
<TextArea placeholder="Resizable both ways" resize="both" /> */}
