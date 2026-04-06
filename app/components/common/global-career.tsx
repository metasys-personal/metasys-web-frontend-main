import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CareerLink = {
  label: string;
  href: string;
};

type GlobalCareerProps = {
  title: string;
  description: string;
  links?: CareerLink[];
  mobileImage: string;
  desktopImage?: string;
  sectionId?: string;
  className?: string;
};

export default function GlobalCareer({
  title,
  description,
  links = [],
  mobileImage,
  desktopImage,
  sectionId,
  className = "",
}: GlobalCareerProps) {
  return (
    <section
      id={sectionId}
      className={`relative text-white scroll-mt-[140px] overflow-hidden ${className}`}
    >
      {/* MOBILE BACKGROUND IMAGE */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={mobileImage}
          alt={title}
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative px-2 md:px-6">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            items-center
            min-h-[280px] md:min-h-80 lg:min-h-[300px]
            gap-8 lg:gap-12
          "
        >
          {/* LEFT CONTENT */}
          <div className="space-y-4 max-w-xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              {title}
            </h1>

            <p className="text-white text-sm md:text-xl leading-relaxed">
              {description}
            </p>

            {/* CTA LINKS */}
            {links.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-sm hover:bg-white hover:text-black transition"
                  >
                    <span className="font-medium">{link.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* DESKTOP IMAGE */}
          {desktopImage && (
            <div className="hidden lg:block relative w-full h-full min-h-[300px]">
              <Image
                src={desktopImage}
                alt={title}
                fill
                className="object-cover grayscale"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
