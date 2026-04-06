"use client";

import { useState, useRef, useEffect } from "react";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right" | "center";
}

export default function Popover({ trigger, children, align = "left" }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const alignment = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }[align];

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>

      {open && (
        <div
          className={`absolute z-50 mt-2 ${alignment} bg-white shadow-lg rounded-xl border p-2`}
        >
          {children}
        </div>
      )}
    </div>
  );
}


// Usage

// import Popover from "@/components/ui/popover";

// export default function PopoverExample() {
//   return (
//     <div className="p-10">
//       <Popover
//         trigger={
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             aria-label="Open Popover"
//           >
//             Open Popover
//           </button>
//         }
//         align="center"
//       >
//         <div className="p-4 w-48">
//           <p className="text-sm">This is a reusable Popover!</p>
//           <button
//             className="mt-2 px-3 py-1 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Action
//           </button>
//         </div>
//       </Popover>
//     </div>
//   );
// }
