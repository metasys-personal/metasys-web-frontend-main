import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn"

const headingVariants = cva(
  "font-bold text-foreground",
  {
    variants: {
      level: {
        1: "text-4xl md:text-5xl",
        2: "text-3xl md:text-4xl",
        3: "text-2xl md:text-3xl",
        4: "text-xl md:text-2xl",
        5: "text-lg md:text-xl",
        6: "text-base md:text-lg",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      level: 2,
      weight: "bold",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

export function Heading({
  asChild,
  level = 2,
  weight,
  className,
  children,
  ...props
}: HeadingProps) {
  const tag = `h${level}` as keyof HTMLElementTagNameMap;
  const Component = asChild ? Slot : tag;

  return (
    <Component className={cn(headingVariants({ level, weight }), className)} {...props}>
      {children}
    </Component>
  );
}


// Usage

{/* <Heading level={1}>Page Title</Heading>
<Heading level={2} weight="medium">Section Title</Heading>
<Heading level={4} className="text-red-600">Custom Heading</Heading> */}
