"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

export type PartnerWithText = {
  name: string;
  src: string;
  description: string;
  href?: string;
};

type PartnersWithTextProps = {
  title: string;
  partners: PartnerWithText[];
  showLearnMore?: boolean;
  sectionId?: string;
  className?: string;
};

export default function PartnersWithText({
  title,
  partners,
  showLearnMore = true,
  sectionId,
  className = "",
}: PartnersWithTextProps) {
  return (
    <section
      id={sectionId}
      className={`scroll-mt-[140px] bg-black text-white lg:py-5 ${className}`}
    >
      <div className="px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl lg:max-w-3xl font-semibold mb-6">
          {title}
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.05}
          spaceBetween={24}
          speed={700}
          navigation={{
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 1.3 },
            1024: { slidesPerView: 1.6 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg pt-6 h-full flex flex-col justify-between bg-black">
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={150}
                    height={50}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <p className="text-white lg:max-w-xl leading-relaxed text-base md:text-lg">
                  {partner.description}
                </p>

                {/* CTA */}
                {showLearnMore && partner.href && (
                  <Link
                    href={partner.href}
                    className="flex items-center gap-2 mt-10 text-sm font-medium group"
                  >
                    <span className="underline underline-offset-4">
                      Learn more
                    </span>
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="partners-prev ..." aria-label="Previous slide">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button className="partners-next ..." aria-label="Next slide">
            <ArrowRight size={18} aria-hidden="true" />
          </button>

        </div>
      </div>
    </section>
  );
}
