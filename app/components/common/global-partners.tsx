import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Partner = {
  name: string;
  src: string;
  description?: string;
  href?: string;
};

type GlobalPartnersProps = {
  title?: string;
  partners: Partner[];
  limit?: number;
  className?: string;
  sectionId?: string;

  ctaLabel?: string;
  ctaHref?: string;
};

export default function GlobalPartners({
  title,
  partners,
  limit,
  className = "",
  sectionId,
  ctaLabel,
  ctaHref,
}: GlobalPartnersProps) {
  const displayedPartners = limit ? partners.slice(0, limit) : partners;

  return (
    <section id={sectionId} className={`bg-black py-16 ${className}`}>
      <div className="px-4 lg:px-6">
        {/* Title */}
        {title && (
          <div className="mb-8 md:mb-20 ml-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              {title}
            </h2>

            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition hover:underline"
              >
                {ctaLabel}
                <ChevronRight className="mt-1"/>
              </Link>
            )}
          </div>
        )}


        {/* Partners Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {displayedPartners.map((partner) => {
            const isDetailed = partner.description || partner.href;

            return (
              <div
                key={partner.name}
                className={`rounded-lg transition ${isDetailed
                    ? "bg-black p-6 hover:bg-neutral-800"
                    : "flex items-center justify-center"
                  }`}
              >
                {/* Logo */}
                <div
                  className={
                    isDetailed
                      ? "mb-6 h-14 w-40"
                      : "h-14 w-full flex items-center justify-center opacity-80 hover:opacity-100"
                  }
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={150}
                    height={48}
                    className="object-contain grayscale"
                  />
                </div>

                {/* Optional Description */}
                {partner.description && (
                  <p className="mb-6 text-sm leading-relaxed text-neutral-300">
                    {partner.description}
                  </p>
                )}

                {/* Optional CTA */}
                {partner.href && (
                  <Link
                    href={partner.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300"
                  >
                    Learn more
                    <span className="text-lg">→</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}