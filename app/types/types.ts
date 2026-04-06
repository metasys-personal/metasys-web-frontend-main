export type DropdownKey = "whatWeDo" | "careers"; 

export type MenuItem =
  | { id: DropdownKey; label: string; dropdown: true }
  | { label: string; href: string; dropdown: false };
