"use client";

import { Insight } from "@/app/types/insights";
import Image from "next/image";
import Link from "next/link";


export default function InsightCard({ item }: { item: Insight }) {
    return (
        <Link
            href={`/insights/${item.slug}`}
            className="block group border border-gray-800 overflow-hidden cursor-pointer bg-neutral-900"
        >
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={false}
                />
            </div>

            <div className="p-6 space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {item.category} • {new Date(item.publishDate).toLocaleDateString()}
                </p>

                <h3 className="text-lg md:text-xl font-semibold group-hover:text-gray-200 transition">
                    {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                </p>
            </div>
        </Link>
    );
}
