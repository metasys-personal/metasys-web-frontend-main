"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Insight } from "../types/insights";
import NavbarNew from "../components/navbar/navbar";
import Breadcrumb from "../components/ui/breadcrumb/breadcrumb";

const ITEMS_PER_PAGE = 6;

export default function InsightsClient({ insights }: { insights: Insight[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const sortedInsights = [...insights].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    } else {
      return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
    }
  });

  const totalPages = Math.ceil(sortedInsights.length / ITEMS_PER_PAGE);
  const paginatedInsights = sortedInsights.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as "newest" | "oldest");
    setCurrentPage(1);
  };

  return (
    <>
      <NavbarNew />
      <section className="bg-[#191919] text-white min-h-screen px-6 md:px-16 pb-12 pt-30">
        <Breadcrumb
          overrideSegments={[

            { name: "Insights", href: "/insights" },
          ]}
        />
        <div className="space-y-6">
          {/* Header + Sort */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-4xl font-bold pt-8">Insights</h1>

            <div className="flex items-center gap-2 text-sm md:text-base">
              <label htmlFor="sort" className="text-gray-400">Sort by:</label>
              <select
                id="sort"
                value={sortOrder}
                onChange={handleSortChange}
                className="text-white border border-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedInsights.map((it: Insight) => (
              <Link
                key={it.id}
                href={`/insights/${it.slug}`}
                className="block border border-gray-800 p-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-md">
                  <Image src={it.coverImage} alt={it.title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <p className="text-xs text-gray-400">
                  {it.category} • {new Date(it.publishDate).toLocaleDateString()}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{it.title}</h2>
                <p className="text-gray-400 text-sm line-clamp-2">{it.description}</p>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex gap-2 justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`px-3 py-1 border rounded-md transition-colors duration-300 ${currentPage === i + 1
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                  }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
