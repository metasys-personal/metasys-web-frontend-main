import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn"

const textVariants = cva("leading-relaxed", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      danger: "text-red-600",
      success: "text-green-600",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: {
    size: "base",
    tone: "default",
    weight: "normal",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof textVariants> {
  asChild?: boolean;
}

export function Text({
  asChild,
  size,
  tone,
  weight,
  className,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn(textVariants({ size, tone, weight }), className)}
      {...props}
    />
  );
}


// Usage

// import { Text } from "@/components/ui/text";

// export default function TextDemo() {
//   return (
//     <div className="space-y-3 p-6">
//       <Text>Base text</Text>
//       <Text tone="muted">Muted text</Text>
//       <Text tone="danger">Error message text</Text>
//       <Text size="lg" weight="semibold">
//         Large + Semibold text
//       </Text>
//     </div>
//   );
// }
