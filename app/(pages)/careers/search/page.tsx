"use client";

import { useState } from "react";

import { useMobileMenu } from "@/app/providers/mobile-menu-context";

import Filters from "../_components/filters";
import JobList from "../_components/job-list";
import NavbarJobs from "../_components/navbar";
import SearchHeader from "../_components/search-header";
import { FiltersState } from "@/app/types/jobs";
import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function CareersSearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FiltersState>({
    // location: "",
    jobTypes: [],
    levels: [],
    areas: [],
  });

  const { mobileMenuOpen } = useMobileMenu();

  return (
    <>
      <NavbarNew />
      <main className="min-h-screen bg-black text-white md:px-6 lg:px-16 pt-[150px]">
        <Breadcrumb
          overrideSegments={[
            { name: "Open roles", href: "/careers/search" },
          ]}
        />
        {/* Hide navbar when mobile menu is open */}
        {!mobileMenuOpen && <NavbarJobs />}

        <SearchHeader />

        <div className="flex flex-col lg:flex-row">
          {/* Left sidebar */}
          <Filters filters={filters} setFilters={setFilters} />

          {/* Right content */}
          <div className="flex-1 lg:ml-4">
            <JobList
              filters={filters}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setFilters={setFilters}
            />
          </div>
        </div>
      </main>
    </>
  );
}