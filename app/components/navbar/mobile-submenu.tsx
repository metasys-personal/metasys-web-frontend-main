"use client";

import { MoveLeft } from "lucide-react";
import { FiChevronDown, FiGlobe } from "react-icons/fi";
import { DropdownKey } from "../../types/types";
import { JSX } from "react/jsx-runtime";

type MobileSubmenuProps = {
  subMenuPanel: DropdownKey | null;
  dropdownContent: Record<DropdownKey, JSX.Element>;
  selectedCountry: string;
  showCountryModal: boolean;
  countries: string[];
  setSelectedCountry: (country: string) => void;
  setShowCountryModal: (show: boolean) => void;
  close: () => void;
};

export default function MobileSubmenu({
  subMenuPanel,
  dropdownContent,
  selectedCountry,
  close,
}: MobileSubmenuProps) {
  return (
    <div
      className={`
        fixed top-0 right-0 w-full h-full bg-[#191919] text-white z-50 
        transform transition-transform duration-300 ease-out flex flex-col lg:hidden
      `}
      style={{
        transform: subMenuPanel ? "translateX(0)" : "translateX(100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <button onClick={(e) => {
          e.stopPropagation();   
          e.preventDefault();    
          close();
        }} className="flex items-center gap-2">
          <MoveLeft className="w-4 h-4" />
          <span className="text-sm">back</span>
        </button>

        {/* Static Globe */}
        <div className="flex items-center gap-2 text-sm cursor-default select-none">
          <FiGlobe className="w-4 h-4" />
          <span>{selectedCountry}</span>
          <FiChevronDown size={14} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {subMenuPanel && dropdownContent[subMenuPanel]}
      </div>
    </div>
  );
}
