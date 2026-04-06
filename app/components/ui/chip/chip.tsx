import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { X } from "lucide-react";
import { cn } from "../../../lib/cn"

const chipVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors select-none",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground",
        outline: "border border-border text-foreground",
        soft: "bg-muted/50 text-muted-foreground",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
        lg: "text-base px-4 py-1.5",
      },
      intent: {
        default: "",
        success: "bg-green-500/15 text-green-600 border-green-600/20",
        warning: "bg-yellow-500/15 text-yellow-600 border-yellow-600/20",
        error: "bg-red-500/15 text-red-600 border-red-600/20",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
      intent: "default",
    },
  }
);


export interface ChipProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof chipVariants> {
  asChild?: boolean;
  onRemove?: () => void;
}

export function Chip({
  asChild,
  variant,
  size,
  intent,
  onRemove,
  className,
  children,
  ...props
}: ChipProps) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(chipVariants({ variant, size, intent }), className)}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove tag"
          className="ml-1 rounded-full p-0.5 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </Comp>
  );
}


// Usage

// import { Chip } from "@/components/ui/chip";

// export default function ChipDemo() {
//   return (
//     <div className="flex gap-3 p-6">
//        <Chip intent="success">Success</Chip>
//        <Chip intent="warning">Warning</Chip>
//        <Chip intent="error">Error</Chip>
//     </div>
//   );
// }
