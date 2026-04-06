"use client"

import * as Dropdown from "@radix-ui/react-dropdown-menu"
import { cn } from "../../../lib/cn"

export const DropdownMenu = Dropdown.Root
export const DropdownMenuTrigger = Dropdown.Trigger
export const DropdownMenuGroup = Dropdown.Group
export const DropdownMenuLabel = Dropdown.Label
export const DropdownMenuSeparator = Dropdown.Separator

export function DropdownMenuContent({
  className,
  sideOffset = 6,
  align = "start",
  ...props
}: React.ComponentPropsWithoutRef<typeof Dropdown.Content>) {
  return (
    <Dropdown.Portal>
      <Dropdown.Content
        role="menu"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-40 rounded-md border bg-white p-1 shadow-lg outline-none",
          "animate-in fade-in-0 zoom-in-95",
          className
        )}
        {...props}
      />
    </Dropdown.Portal>
  )
}

export function DropdownMenuItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dropdown.Item>) {
  return (
    <Dropdown.Item
      role="menuitem"
      className={cn(
        "cursor-pointer select-none rounded-md px-3 py-2 text-sm outline-none",
        "focus:bg-gray-100 focus:text-gray-900",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        className
      )}
      {...props}
    />
  )
}



// Usage

{/* <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="px-3 py-2 bg-black text-white rounded">Menu</button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="start">
    <DropdownMenuItem onClick={() => alert("Profile")}>
      Profile
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => alert("Settings")}>
      Settings
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => alert("Logout")}>
      Logout
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> */}

