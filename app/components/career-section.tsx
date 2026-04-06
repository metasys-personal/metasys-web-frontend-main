"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useClientTranslation } from "../hooks/useTranslations";
import Link from "next/link";
import { useLocale } from "../providers/locale-context";

export default function CareersSection() {
    const { locale } = useLocale();
    const { t } = useClientTranslation(locale);
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrame: number;

        const updateScroll = () => {
            if (!sectionRef.current || !imageRef.current || !textRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;

            if (rect.bottom < 0 || rect.top > windowH) {
                animationFrame = requestAnimationFrame(updateScroll);
                return;
            }

            const progress = Math.min(1, Math.max(0, (windowH - rect.top) / windowH));

            // -----------------------------
            // Width logic (always full width on tablet/mobile)
            // -----------------------------
            let width = 100; // full width for mobile/tablet/desktop
            if (window.innerWidth >= 1024) {
                // LG desktop: allow shrink width
                width = Math.max(50, 100 - progress * 50);
            }

            // -----------------------------
            // Height logic (shrink based on screen)
            // -----------------------------
            let minHeight = 50; // LG default
            if (window.innerWidth < 1024 && window.innerWidth >= 768) {
                // Tablet
                minHeight = 40; // smaller height
            } else if (window.innerWidth < 768) {
                // Mobile
                minHeight = 40; // even smaller
            }

            const height = Math.max(minHeight, 100 - progress * (100 - minHeight));

            // Apply styles
            imageRef.current.style.width = `${width}%`;
            imageRef.current.style.height = `${height}vh`;

            textRef.current.style.opacity = `${progress}`;
            textRef.current.style.transform = `translateY(${50 * (1 - progress)}px)`;

            animationFrame = requestAnimationFrame(updateScroll);
        };

        animationFrame = requestAnimationFrame(updateScroll);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-black overflow-hidden">
            {/* <div className="flex flex-col md:flex-col lg:flex-row lg:gap-[60px] gap-0 md:gap-0 items-center justify-center px-6"> */}
            <div className="flex flex-col md:flex-col lg:flex-row lg:gap-[60px] gap-0 md:gap-0 items-start lg:items-center justify-start lg:justify-center px-6">


                {/* IMAGE */}
                <div
                    ref={imageRef}
                    className="relative shrink-0 overflow-hidden w-full"
                    style={{
                        width: "100%",
                        height: "100%",
                        transition: "width 0.3s ease, height 0.3s ease",
                    }}
                >
                    <Image
                        src="/images/campaign.jpg"
                        alt="Careers"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* TEXT */}
                <div
                    ref={textRef}
                    className="mt-6 md:mt-6 w-full text-left md:w-full lg:w-[520px] shrink-0 text-white flex flex-col items-start"
                    style={{
                        opacity: 0,
                        transform: "translateY(50px)",
                        transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                    }}
                >
                    <span className="block uppercase text-sm tracking-wider mb-4 text-gray-300">
                        {t('careers.label')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        {t('careers.title')} <br />
                        <span className="text-white">{t('careers.subtitle')}</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-300">
                        {t('careers.description')}
                    </p>
                    <Link href='/careers/search' className="group flex items-center bg-black text-white text-lg font-semibold hover:underline transition px-0 py-4">
                        {t('careers.cta')}
                        <svg
                            className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}