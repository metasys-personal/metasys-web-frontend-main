"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/unicef.jpg",
    title: "UNICEF builds a foundation for ethical AI",
    description:
      "The United Nations agency is developing a unified strategy for AI, helping it stay at the forefront of technological advancements and build a brighter, safer future for children across the world.",
  },
  {
    id: 2,
    image: "/images/empower.jpg",
    title: "Empowering the Next Generation of Innovators",
    description:
      "Metasys continues to support youth by providing opportunities powered by technology and mentorship.",
  },
  {
    id: 3,
    image: "/images/artificial.jpg",
    title: "AI for Global Development",
    description:
      "Using data and artificial intelligence to drive sustainable impact across communities.",
  },
];

export default function AccentureSlider() {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <div className="relative py-10 px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          speed={800}
          slidesPerView={1.08}
          spaceBetween={20}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          pagination={{
            type: "fraction",
            el: ".custom-pagination", // <- use class selector string instead of ref
          }}
          className="w-full"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col lg:flex-row items-end gap-10">
                {/* LEFT IMAGE */}
                <div className="w-full lg:w-[45%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 sm:h-[380px] lg:h-[450px] object-cover rounded"
                    width={500}
                    height={400}
                  />
                </div>

                {/* RIGHT TEXT */}
                <div className="w-full lg:w-[45%] space-y-6 mb-6">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-2 text-white hover:opacity-80 transition">
                    <span className="underline underline-offset-4">Read more</span>
                    <span className="bg-transparent px-2 py-1 rounded">→</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM CONTROLS */}
        <div className="flex justify-end mt-4 items-center gap-2">
          <button aria-label="Next page" className="prev-button bg-[#373434] hover:bg-[#191919] p-1 md:p-3 transition">
            ←
          </button>
          <div className="custom-pagination text-gray-300 text-sm px-2 flex items-center"></div>
          <button aria-label="Next page" className="next-button bg-[#373434] hover:bg-[#191919] p-1 md:p-3 transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
