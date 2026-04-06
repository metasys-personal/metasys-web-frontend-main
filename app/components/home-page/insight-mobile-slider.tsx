"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InsightCard from "./insight-card";
import { Insight } from "@/app/types/insights";

export default function InsightsMobileSlider({
  insights,
  onProgress,
}: {
  insights: Insight[];
  onProgress: (p: number) => void;
}) {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.05}
      onSwiper={(s) => onProgress((s.progress || 0) * 100)}
      onSlideChange={(s) => onProgress((s.progress || 0) * 100)}
    >
      {insights.map((it) => (
        <SwiperSlide key={it.id}>
          <InsightCard item={it} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
