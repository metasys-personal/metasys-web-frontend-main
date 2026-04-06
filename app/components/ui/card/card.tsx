import * as React from "react";
import { cn } from "../../../lib/cn"

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white shadow-sm transition-colors",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4 border-b", className)} {...props} />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold", className)} {...props} />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-4", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-4 border-t", className)} {...props} />
  );
}


// Usage

{/* <Card className="max-w-sm">
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
    <CardDescription>This is a clean reusable card.</CardDescription>
  </CardHeader>

  <CardContent>
    <p>Your dashboard is ready.</p>
  </CardContent>

  <CardFooter>
    <button className="text-blue-600">Continue</button>
  </CardFooter>
</Card> */}
