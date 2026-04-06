"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { services } from "@/app/lib/service-partners.data";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";
import Link from "next/link";

export default function Services() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);
  const [progress, setProgress] = useState(0);

  return (
    <section className="w-full bg-black py-16 px-4 md:px-8 lg:px-16">
      <div className="">
        {/* Mobile Slider */}
        <div className="block sm:hidden relative">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            onSlideChange={(swiper) => setProgress((swiper.progress || 0) * 100)}
            onSwiper={(swiper) => setProgress((swiper.progress || 0) * 100)}
          >
            {services.map((service) => (
              
              <SwiperSlide key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block relative h-96 w-full overflow-hidden border border-gray-800 select-none"
                >
                  {/* Image */}
                  <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.16,.84,.44,1)] group-hover:scale-125 group-hover:opacity-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className="relative p-6 z-20">
                    <p className="text-sm text-gray-300 font-medium mb-5">
                      {t("services.reportLabel")}
                    </p>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex justify-end items-center gap-2">
                      <span className="text-white font-semibold text-sm">
                        {t("services.expand")}
                      </span>
                      <span className="text-white text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

            ))}
          </Swiper>

          {/* Tiny Scrollbar */}
          <div className="absolute bottom-2 left-4 right-4 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-1.5 bg-white rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

        </div>

        {/* Desktop / Tablet Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative h-96 w-full lg:w-[310px] overflow-hidden border border-gray-800 cursor-pointer select-none"
            >
              {/* Image */}
              <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.16,.84,.44,1)] group-hover:scale-125 group-hover:opacity-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
              </div>

              {/* Title */}
              <div className="relative p-6 z-20 pointer-events-none">
                <p className="text-sm text-gray-300 font-medium mb-5">{service.reportLabel}</p>
                <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
              </div>

              {/* Slide-In Description */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(.16,.84,.44,1)]">
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="flex justify-end items-center gap-2">
                  <span className="text-white font-semibold text-sm">{t('services.expand')}</span>
                  <span className="text-white text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}