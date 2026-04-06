
"use client";

import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

export default function NavbarJobs() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" fixed top-16 left-0 w-full z-50 backdrop-blur-sm bg-[#191919] text-white">
      <div className="py-2 md:py-4 px-4 lg:px-16 flex items-center justify-between">
        {/* Left */}
        <h1 className="font-semibold text-lg">Careers</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <button className="hover:opacity-70">Job Search</button>
          <button className="hover:opacity-70">Saved Jobs</button>
          <button className="hover:opacity-70">Access Application</button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-md"
        >
          <FiMoreVertical size={20} aria-hidden="true" />
        </button>

      </div>

      {/* MOBILE FULL-WIDTH DROPDOWN */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#191919] 
          ${open ? "max-h-60" : "max-h-0"}
        `}
      >
        <nav className="flex flex-col text-sm">
          <button className="w-full text-left px-6 py-4 hover:bg-gray-100">
            Job Search
          </button>
          <button className="w-full text-left px-6 py-4 hover:bg-gray-100">
            Saved Jobs
          </button>
          <button className="w-full text-left px-6 py-4 hover:bg-gray-100">
            Access Application
          </button>
        </nav>
      </div>
    </header>
  );
}
