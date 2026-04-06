"use client";

import { Job } from "@/app/types/jobs";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4">
      <div className="flex justify-between items-start bg-[#191919] p-5 md:p-4">
        <div>
          <h3 className="text-white font-semibold mb-2 md:mb-1">{job.title}</h3>
          <p className="text-sm text-gray-400">
            {job.location} | {job.jobType} | {job.level}
          </p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Collapse section" : "Expand section"}
          className="text-xl text-white"
        >
          {open ? <Minus /> : <Plus />}
        </button>
      </div>

      {open && (
        <div className="p-4 bg-[#191919]">
          <p className="text-gray-300 text-sm mb-2">{job.description}</p>

          {/* Link to Job Detail Page */}
          <Link
            href={`/careers/search/${job.id}`}
            className="text-blue-400 hover:underline text-sm"
          >
            Read full job description →
          </Link>
        </div>
      )}
    </div>
  );
}
