"use client";

import { useState } from "react";
import { areasOfInterest, experienceType, jobTypes } from "@/app/lib/jobs.data";
import JobFilter from "./job-filter";
import { MoveLeft, SlidersHorizontal } from "lucide-react";
import { FiltersState } from "@/app/types/jobs";

type FiltersProps = {
    filters: {
        // location: string;
        jobTypes: string[];
        levels: string[];
        areas: string[],
    };
    setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
};


export default function Filters({ filters, setFilters }: FiltersProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const clearFilters = () => {
        setFilters({
            // location: "",
            jobTypes: [],
            levels: [],
            areas: [],
        });
        setMobileOpen(false);
    };

    return (
        <>

            {/* MOBILE + TABLET FILTER TOGGLE */}
            <div className="flex w-full lg:hidden items-center justify-between px-4 py-3 border-b border-white/10">
                {/* Left: results count */}
                <span className="text-sm text-white">41 results</span>

                {/* Right: filter button */}
                <button
                    onClick={() => setMobileOpen(true)}
                    className="flex items-center gap-2 text-sm text-white"
                >
                    <span>Filter</span>
                    <SlidersHorizontal className="w-4 h-4" />
                </button>
            </div>

            <aside className="hidden lg:block p-4 w-full md:w-80 lg:w-[400px]">
                {/* Desktop header */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-white text-xl font-semibold">Filters</h2>
                    <button
                        onClick={clearFilters}
                        className="text-sm text-gray-300 hover:underline"
                    >
                        Clear filters ⟳
                    </button>

                </div>

                {/* <FilterContent /> */}
                <FilterContent filters={filters} setFilters={setFilters} />
            </aside>


            {/* MOBILE FILTER OVERLAY */}
            <div
                className={`fixed inset-0 p-3 md:p-5 z-50 bg-black text-white lg:hidden transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 text-sm"
                    >
                        <MoveLeft className="w-4 h-4" />
                        Back
                    </button>

                    <button
                        onClick={clearFilters}
                        className="text-sm flex items-center gap-2"
                    >
                        Clear filters
                        <span>⟳</span>
                    </button>

                </div>

                {/* Filters */}
                <div className="p-4 overflow-y-auto h-full">
                    {/* <FilterContent /> */}
                    <FilterContent filters={filters} setFilters={setFilters} />

                </div>
            </div>
        </>
    );
}


type FilterContentProps = {
    filters: {
        // location: string;
        jobTypes: string[];
        levels: string[];
        areas: string[],
    };
    setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
};

function FilterContent({ filters, setFilters }: FilterContentProps) {
    return (
        <>
            {/* <JobFilter title="Location">
                <label htmlFor="location-search" className="sr-only">
                    Search locations
                </label>

                <input
                    value={filters.location}
                    onChange={(e) =>
                        setFilters((prev) => ({
                            ...prev,
                            location: e.target.value,
                        }))
                    }
                    placeholder="Search locations"
                />
            </JobFilter> */}

            <JobFilter title="Area of Interest">
                {areasOfInterest.map((area) => (
                    <label key={area.name} className="flex justify-between py-2.5 cursor-pointer">
                        <span className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.areas.includes(area.name)}
                                onChange={(e) =>
                                    setFilters((prev) => ({
                                        ...prev,
                                        areas: e.target.checked
                                            ? [...prev.areas, area.name]
                                            : prev.areas.filter((a) => a !== area.name),
                                    }))
                                }
                            />
                            {area.name}
                        </span>
                        <span className="text-gray-400">{area.count}</span>
                    </label>
                ))}

            </JobFilter>

            <JobFilter title="Job Type">
                {jobTypes.map((job) => (
                    <label key={job.name} className="flex justify-between py-2.5">
                        <span>

                            <input
                                type="checkbox"
                                checked={filters.jobTypes.includes(job.name)}
                                onChange={(e) => {
                                    setFilters((prev) => ({
                                        ...prev,
                                        jobTypes: e.target.checked
                                            ? [...prev.jobTypes, job.name]
                                            : prev.jobTypes.filter((j) => j !== job.name),
                                    }));
                                }}
                            />
                            <span className="ml-2">{job.name}</span>
                        </span>
                        <span className="text-white/70">{job.count}</span>
                    </label>
                ))}
            </JobFilter>

            <JobFilter title="Experience">
                {experienceType.map((exp) => (
                    <label key={exp.name} className="flex justify-between py-2.5">

                        <span className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.levels.includes(exp.name)}
                                onChange={(e) => {
                                    setFilters((prev) => ({
                                        ...prev,
                                        levels: e.target.checked
                                            ? [...prev.levels, exp.name]
                                            : prev.levels.filter((l) => l !== exp.name),
                                    }));
                                }}
                            />
                            <span>{exp.name}</span>
                        </span>

                        <span className="text-gray-400">{exp.count}</span>
                    </label>
                ))}
            </JobFilter>
        </>
    );
}