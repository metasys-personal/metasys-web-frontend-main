"use client";

import Image from "next/image";
import Link from "next/link";

export type Leader = {
  name: string;
  image: string;
  slug: string;
  title: string;
};

type GlobalLeadersProps = {
  title?: string;
  leaders: Leader[];
  sectionId?: string;
  className?: string;
  limit?: number;     
  imageSize?: string;
};

export default function GlobalLeaders({
  title = "Our leaders",
  leaders,
  sectionId,
  className = "",
  limit,
  imageSize,
}: GlobalLeadersProps) {
  // Apply limit if provided
  const displayedLeaders = limit ? leaders.slice(0, limit) : leaders;

  // Dynamic grid class based on number of leaders
  const gridColsClass = () => {
    const count = displayedLeaders.length;
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 md:grid-cols-2";
    if (count <= 4) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
    if (count <= 5) return "grid-cols-1 sm:grid-cols-3 lg:grid-cols-5";
    return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";
  };

  return (
    <section
      id={sectionId}
      className={`scroll-mt-[140px] bg-black text-white py-8 md:py-8 ${className}`}
    >
      <div className="px-2 md:px-6">
        {/* Optional heading */}
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-12">
            {title}
          </h2>
        )}

        {/* Leaders grid */}
        <div className={`grid gap-6 ${gridColsClass()}`}>
          {displayedLeaders.map((leader) => (
            <Link
              key={leader.slug}
              href={`/leaders/${leader.slug}`}
              className="group block"
            >
              <div className="cursor-pointer">
                <div className={`relative overflow-hidden bg-white/5 ${imageSize || "w-36 h-36"}`}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={150}
                    height={150}
                  />
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="text-base font-semibold">{leader.name}</h3>
                  <p className="text-sm text-white/60">{leader.title}</p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
