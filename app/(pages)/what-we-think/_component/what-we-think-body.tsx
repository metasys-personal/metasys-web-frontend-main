"use client"

import { useState } from "react"

const TOPIC = [
    "Cloud & Infrastructure",
    "Customer Service",
    "Cybersecurity",
    "Data & Artificial Intelligence",
    "Emerging Technology",
    "Strategy & Leadership",
    "Sustainability",
    "Talent & Organization",
    "Tech Transformation"
]

const INDUSTRIES = [
    'Aerospace & Defense',
    'Automotive',
    'Banking & Finance',
    'Consumer Goods & Service',
    'Energy & Utilities',
    'Healthcare & Life Sciences',
    'Public Service',
    'Retail',
]

const CONTENT = [
    "Research Report",
    "Perspective",
    "Case studies",
    "News Articles",
    "Blogs"
]

const FILTERS = [
    { key: 'topic', label: 'Topic' },
    { key: 'industry', label: 'Industry' },
    { key: 'content', label: 'Content Type' },
]

const FILTER_OPTIONS: Record<string, string[]> = {
    topic: TOPIC,
    industry: INDUSTRIES,
    content: CONTENT,
}


export default function WhatWeThinkBody() {
    const [openFilter, setOpenFilter] = useState<string | null>('')

    return (
        <div className="px-4 md:px-8 lg:px-12 pt-10 pb-16">

            {/* HEADER */}
            <section className="mb-20">
                <h1 className="text-4xl md:text-5xl lg:tex-6xl font-semibold mb-6">
                    Stay ahead of change
                </h1>
                <p className="text-gray-300 text-[18px] leading-relaxed max-w-3xl">
                    Explore our research, perspectives and real client impact designed to help you
                    understand the key forces shaping business and technology and get to value faster.
                </p>
            </section>

            {/* FILTER BAR */}
            <section className="border-y border-gray-700 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {FILTERS.map((filter) => (
                        <FilterItem
                            key={filter.key}
                            label={filter.label}
                            isOpen={openFilter === filter.key}
                            onClick={() =>
                                setOpenFilter(openFilter === filter.key ? null : filter.key)
                            }
                        >
                            {FILTER_OPTIONS[filter.key] && (
                                <div className="flex flex-wrap gap-4 mt-4">
                                    {FILTER_OPTIONS[filter.key].map((item) => (
                                        <button
                                            key={item}
                                            className="text-[17px] text-left text-gray-300 hover:text-white border border-gray-700 px-3 py-2 rounded"
                                        >
                                            {item}
                                        </button>
                                    ))}

                                </div>
                            )}
                        </FilterItem>
                    ))}

                </div>

                {/* ACTIONS */}
                <div className="flex justify-end items-center gap-6 mt-6">
                    <button className="text-sm text-gray-400 hover:text-white">
                        Clear all
                    </button>
                    <button className="bg-white text-black px-6 py-2 text-sm">
                        Show results
                    </button>
                </div>
            </section>

            {/* RESULTS */}
            <ResultsSection />
        </div>
    )
}


function FilterItem({
    label,
    isOpen,
    onClick,
    children,
}: {
    label: string
    isOpen: boolean
    onClick: () => void
    children?: React.ReactNode
}) {
    return (
        <div>
            <button
                onClick={onClick}
                className="flex items-center gap-3 p-4 border-gray-700 text-lg uppercase tracking-wide border w-full"
            >
                <span className="text-lg">{isOpen ? '−' : '+'}</span>
                {label}
            </button>
            {isOpen && children}
        </div>
    )
}

function ResultsSection() {
    return (
        <section className="mt-14">

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Card key={item} />
                ))}
            </div>

            {/* SHOW MORE */}
            <div className="flex justify-center mt-10">
                <button className="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition">
                    Show more
                </button>
            </div>
        </section>
    )
}

function Card() {
    return (
        <div className="bg-white text-black p-6 h-[250px] flex flex-col justify-between">
            <div>
                <p className="text-xs uppercase text-gray-500 mb-3">
                    Research Report
                </p>
                <h3 className="text-lg font-medium leading-snug">
                    Strategic Forces Driving Change
                </h3>
            </div>
        </div>
    )
}