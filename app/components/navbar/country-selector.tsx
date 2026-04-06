"use client";

import { useState, useEffect, useRef } from "react";
import { FiGlobe } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  countries: string[];
  selected: string; // lifted state
  setSelected: (country: string) => void; // lifted state
};

export default function CountrySelector({ countries, selected, setSelected }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleCountrySelect = (country: string) => {
    setSelected(country);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Trigger */}
      <button
        // onClick={() => setOpen(prev => !prev)}
        onClick={() => {
          console.log("[CountrySelector] clicked — dropdown disabled temporarily");
        }}
        className="flex items-center gap-2 cursor-pointer text-white select-none"
      >
        <FiGlobe className="md:block w-5 h-5" />
        <span className="text-sm md:text-base hidden md:block">{selected}</span>
        {/* <FiChevronDown
          size={16}
          className={`${open ? "rotate-180" : ""} transition-transform md:block`}
        /> */}
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="
              absolute top-10 right-0
              w-72 max-h-80 overflow-y-auto
              bg-[#0f0f0f] text-white 
              border border-white/10 rounded-lg 
              shadow-xl z-999
              p-2
              custom-scrollbar
            "
          >
            {countries.map((country, index) => (
              <div
                key={country}
                onClick={() => handleCountrySelect(country)}
                className={`
                  py-3 px-4 
                  cursor-pointer text-sm 
                  hover:bg-white/10 transition
                  ${index !== countries.length - 1 ? "border-b border-white/10" : ""}
                  ${country === selected ? "bg-white/10" : ""}
                `}
              >
                {country}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}