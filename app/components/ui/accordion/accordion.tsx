"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/cn";
import React from "react";

/* ------------------------------------
   Accordion Root
------------------------------------ */
export function Accordion({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root className={cn(className)} {...props} />;
}

/* ------------------------------------
   Accordion Item
------------------------------------ */
export function AccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-border", className)}
      {...props}
    />
  );
}

/* ------------------------------------
   Accordion Trigger
------------------------------------ */
export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        className={cn(
          "flex w-full items-center justify-between py-3 text-left text-lg font-medium transition-all hover:opacity-80",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/* ------------------------------------
   Accordion Content
------------------------------------ */
export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm text-muted-foreground transition-all",
        className
      )}
      {...props}
    >
      <div className="py-3">{children}</div>
    </AccordionPrimitive.Content>
  );
}


// Usage

{/* <Accordion type="single" collapsible className="w-full max-w-xl mx-auto">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is your refund policy?</AccordionTrigger>
    <AccordionContent>
      We offer a 30-day money back guarantee. No questions asked.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2">
    <AccordionTrigger>Do you offer support?</AccordionTrigger>
    <AccordionContent>
      Yes, 24/7 via chat and email.
    </AccordionContent>
  </AccordionItem>
</Accordion> */}
