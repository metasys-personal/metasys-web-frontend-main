export type DropdownKey = "whatWeDo" | "careers";

// type DropdownMenuItem = { id: DropdownKey; dropdown: true };
export type DropdownMenuItem = {
  id: DropdownKey;  // ✅ new
  label: string;
  dropdown: true;
};
// type NormalMenuItem = { label: string; dropdown: false; href: string };
export type NormalMenuItem = {
  label: string;
  href: string;
  dropdown: false;
};

// export type MenuItem = DropdownMenuItem | NormalMenuItem;
export type MenuItem = DropdownMenuItem | NormalMenuItem;

type DesktopMenuProps = {
  menu: MenuItem[];
  desktopDropdown: DropdownKey | null;
  setDesktopDropdown: (key: DropdownKey | null) => void;
  // desktopMenuRef: RefObject<HTMLDivElement>;
  desktopMenuRef: RefObject<HTMLDivElement | null>;
};

import { FiChevronDown } from "react-icons/fi";
import FlexStack from "../ui/layout/flexstack/flexstack";
import { RefObject } from "react";
import Link from "next/link";

export default function DesktopMenu({
  menu,
  desktopDropdown,
  setDesktopDropdown,
  desktopMenuRef,
}: DesktopMenuProps) {
  return (
    <div
      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
      ref={desktopMenuRef}
    >
      <FlexStack align="center" gap={10}>
        {menu.map((item) => (
          <div key={item.label} className="relative">
            {!item.dropdown ? (
              <Link
                href={item.href}
                className="relative flex items-center gap-1 cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-white after:w-0 after:transition-all hover:after:w-full"
              >
                <span>{item.label}</span>
              </Link>
            ) : (
              <button
                className={`flex items-center gap-1 select-none ${desktopDropdown === item.id ? "text-white" : ""
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setDesktopDropdown(
                    desktopDropdown === item.id ? null : item.id
                  );
                }}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-white transition-all ${desktopDropdown === item.id ? "w-full" : "w-0"
                      }`}
                  />
                </span>
                <FiChevronDown
                  className={`w-4 h-4 transition-transform ${desktopDropdown === item.id ? "rotate-180" : "rotate-0"
                    }`}
                />
              </button>
            )}
          </div>
        ))}

      </FlexStack>
    </div>
  );
}
