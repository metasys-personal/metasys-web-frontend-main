/**
 * Example usage:
 *
 * <FlexStack direction="row" mdDirection="col" lgDirection="row" gap={5}>
 *   <Button>Save</Button>
 *   <Button>Cancel</Button>
 * </FlexStack>
 */

import React from "react";

interface FlexStackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col";
  mdDirection?: "row" | "col";
  lgDirection?: "row" | "col";
  gap?: number; // Tailwind spacing number (0-10)
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  children?: React.ReactNode;
}

const FlexStack: React.FC<FlexStackProps> = ({
  direction = "row",
  mdDirection,
  lgDirection,
  gap = 2,
  align,
  justify,
  children,
  className = "",
  ...props
}) => {
  const baseDir = direction === "row" ? "flex-row" : "flex-col";
  const mdDir = mdDirection ? (mdDirection === "row" ? "md:flex-row" : "md:flex-col") : "";
  const lgDir = lgDirection ? (lgDirection === "row" ? "lg:flex-row" : "lg:flex-col") : "";

  // Tailwind items-*
  const alignMap: Record<string, string> = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };
  const justifyMap: Record<string, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignClass = align ? alignMap[align] : "";
  const justifyClass = justify ? justifyMap[justify] : "";

  // Tailwind gaps mapping (0-10)
  const gapMap: Record<number, string> = {
    0: "gap-0",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
  };
  const gapClass = gapMap[gap] || "gap-2";

  const classes = [
    "flex",
    baseDir,
    mdDir,
    lgDir,
    gapClass,
    alignClass,
    justifyClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default FlexStack;
