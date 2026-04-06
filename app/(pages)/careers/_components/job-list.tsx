"use client";

import { jobs } from "@/app/lib/jobs.data";
import JobCard from "./job-card";

import { ChevronDown, MoveLeft, MoveRight } from "lucide-react";
import { FiltersState } from "@/app/types/jobs";

const JOBS_PER_PAGE = 5;

export default function JobList({ filters, setFilters, currentPage, setCurrentPage }: { filters: FiltersState, setFilters: React.Dispatch<React.SetStateAction<FiltersState>>; currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) {

    const filteredJobs = jobs.filter((job) => {
//   if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
//     return false;
//   }

  if (filters.jobTypes.length && !filters.jobTypes.includes(job.jobType)) {
    return false;
  }

  if (filters.levels.length && !filters.levels.includes(job.level)) {
    return false;
  }

  if (filters.areas.length && !filters.areas.includes(job.areaOfInterest)) {
    return false;
  }

  return true;
});


    const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);

    const currentJobs = filteredJobs.slice(
        (currentPage - 1) * JOBS_PER_PAGE,
        currentPage * JOBS_PER_PAGE
    );


    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };


    return (
        <section className="flex-1 lg:p-4">
            <div className="lg:flex justify-end items-end gap-2 mb-4 text-sm hidden">
                <span className="text-white">{filteredJobs.length} Results</span>
                <span className="text-gray-400 flex items-center">
                    Sort by Newest <ChevronDown />
                </span>
            </div>

            {filteredJobs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
                    <h3 className="text-lg font-semibold text-white mb-2">
                        No roles found
                    </h3>
                    <p className="max-w-md">
                        We don’t currently have any openings that match your selected filters.
                        Try adjusting or clearing your filters to see more roles.
                    </p>

                    {/* Optional: Add a Clear Filters button */}
                    <button
                        onClick={() =>
                            setFilters({
                                // location: "",
                                jobTypes: [],
                                levels: [],
                                areas: [],
                            })
                        }
                        className="mt-6 text-sm underline text-white"
                    >
                        Clear all filters
                    </button>
                </div>
            ) : (
                <>
                    {currentJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}

                    {/* Pagination */}
                    <div className="flex justify-end gap-4 md:gap-10 py-6 text-gray-400">
                        <button onClick={() => goToPage(currentPage - 1)} aria-label="Previous page">
                            <MoveLeft aria-hidden="true" />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => goToPage(i + 1)}
                                aria-current={currentPage === i + 1 ? "page" : undefined}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button onClick={() => goToPage(currentPage + 1)} aria-label="Next page">
                            <MoveRight aria-hidden="true" />
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}