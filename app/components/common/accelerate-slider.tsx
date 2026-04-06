"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AccelerateProps } from "@/app/lib/partners.data";

type AccelerateSliderProps = {
    title?: string;
    partners: AccelerateProps[];
    showLearnMore?: boolean;
};


export default function AccelerateSlider({
    title,
    partners,
    showLearnMore = true,
}: AccelerateSliderProps) {
    return (
        <section className="bg-black text-white py-10">
            {title && (
                <h2 className="text-2xl font-semibold mb-6 px-6">
                    {title}
                </h2>
            )}

            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1.1}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
            >
                {partners.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Image
                                src={item.src}
                                alt={item.titletwo ?? item.name ?? "Partner"}
                                className="w-full lg:w-[45%] rounded object-cover"
                                width={400}
                                height={250}
                            />

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    {item.titletwo ?? item.name}
                                </h3>

                                <p className="text-gray-300">
                                    {item.description}
                                </p>

                                {showLearnMore && item.href && (
                                    <a
                                        href={item.href}
                                        className="inline-block underline underline-offset-4"
                                    >
                                        Learn more →
                                    </a>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}
