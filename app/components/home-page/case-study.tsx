"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

type CaseStudy = {
  id: string;
  title: string;
  description: string;
  metric: string;
  image: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "AI-Powered Clinical Research Assistant",
    description:
      "Reduced processing time by 62% using automation and ML workflows.",
    metric: "62% Faster",
    image: "/images/case1.jpg",
    link: "/case-study/ai-powered",
  },
  {
    id: "7",
    title: "Cross Channel Marketing",
    description:
      "Cross Channel Marketing Dashboard From Google Ads to Tiktok in One View",
    metric: "Unified Data",
    image: "/images/channel-mkt.jpg",
    link: "/case-study/cross-channel-mkt",
  },
  {
    id: "2",
    title:
      "Agentic Data Extraction: Any source, Any system, Any time.",
    description:
      "Migrated 480+ apps with zero downtime, improving performance across regions.",
    metric: "480 Apps",
    image: "/images/case2.jpg",
    link: "/case-study/agentic-data",
  },
  {
    id: "3",
    title:
      "Event-Based Analytics to Boost Retention and Reduce Churn",
    description:
      "Boosted customer engagement with a real-time recommendation system.",
    metric: "+37% Engagement",
    image: "/images/case3.jpg",
    link: "/case-study/event-analytics",
  },
  {
    id: "8",
    title: "Lead Management System",
    description:
      "Lead Management System From Capture to Conversion in One Platform",
    metric: "Unified Data",
    image: "/images/lead-mgt.jpg",
    link: "/case-study/lead-management",
  },
  {
    id: "4",
    title: "AI-Driven Social Media Automation",
    description:
      "Automated content publishing and analytics for multiple global brands.",
    metric: "+55% Efficiency",
    image: "/images/case4.jpg",
    link: "/case-study/social-media",
  },
  {
    id: "5",
    title: "STTMS – From Data Silos to Strategic Clarity",
    description:
      "Unified data pipeline enabled faster decision-making across teams.",
    metric: "Unified Data",
    image: "/images/case5.jpg",
    link: "/case-study/sttms",
  },
  {
    id: "6",
    title: "MediRate",
    description:
      "MediRate - A Cutting-Edge Solution for MediCaid Rate intelligence",
    metric: "Unified Data",
    image: "/images/medirate.jpg",
    link: "/case-study/medirate",
  },
];

export default function CaseStudyHighlight() {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-black text-white py-10">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Case Studies
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.pagination &&
                typeof swiper.params.pagination !== "boolean"
              ) {
                swiper.params.pagination.el = paginationRef.current;
              }
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.pagination) {
                  swiper.pagination.init();
                  swiper.pagination.update();
                }
              });
            }}
            spaceBetween={30}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.2 },
              1400: { slidesPerView: 2.6 },
            }}
            className="pb-10"
          >
            {caseStudies.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl h-full flex flex-col"
                >
                  <div className="relative w-full h-64 md:h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 text-sm font-semibold rounded-full">
                      {item.metric}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow min-h-[220px]">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-3 grow">
                      {item.description}
                    </p>

                    <Link
                      href={item.link}
                      className="text-white font-medium flex items-center gap-2 mt-auto"
                    >
                      Read full case
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination outside */}
          <div
            ref={paginationRef}
            className="custom-pagination flex justify-center gap-2 mt-6"
          />
        </div>
      </div>

      {/* Pagination styling */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background: white !important;
        }
      `}</style>
    </section>
  );
}