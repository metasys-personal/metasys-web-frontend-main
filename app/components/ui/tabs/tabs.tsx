"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../../lib/cn";

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn(
      "inline-flex items-center gap-2 rounded-md bg-muted p-1",
      className
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(
      "px-4 py-2 text-sm rounded-md transition-all data-[state=active]:bg-background data-[state=active]:shadow",
      className
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cn("mt-4", className)} {...props} />
);


// Usage

{/* <Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>

  <TabsContent value="account">
    Your account information goes here.
  </TabsContent>

  <TabsContent value="settings">
    Settings content here.
  </TabsContent>
</Tabs> */}
