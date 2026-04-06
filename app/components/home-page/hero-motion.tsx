"use client";

import { Play, Pause, MoveRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useClientTranslation } from "@/app/hooks/useTranslations";

type HeroMotionProps = {
  locale?: string;
};

export default function HeroMotion({ locale = 'en' }: HeroMotionProps) {
  const { t } = useClientTranslation(locale);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const goToRequestProposal = () => router.push("/request-proposal");
  const goToInsight = () => router.push("/insights/strategy/extras");

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => { });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const leftTextVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const rightCardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <>
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover object-[center_20%] transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        onCanPlayThrough={() => setVideoLoaded(true)}
      >
        <source src="/video/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-6 lg:px-16 md:h-[70vh] flex items-start">
        <div className="grid lg:grid-cols-[60%_40%] w-full items-start">
          {/* LEFT SIDE — MAIN TEXT */}
          <motion.div
            className="flex flex-col justify-start pt-30 md:pt-40"
            initial="hidden"
            animate="visible"
            variants={leftTextVariants}
          >
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-4">
              {t('hero.tagline1')}
            </h1>

            <div className="mt-2 space-y-1 lg:mb-10">
              <div className="pl-0 md:pl-20 lg:pl-[150px]">
                <span className="text-4xl md:text-7xl font-bold text-white leading-none">
                  {t('hero.tagline2')}
                </span>
              </div>
              {/* <div className="pl-0 md:pl-[380px] lg:pl-[450px]">
                <span className="text-4xl md:text-7xl font-extrabold text-white leading-none">
                  {t('hero.tagline3')}
                </span>
              </div> */}
            </div>

            <button
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors mt-20 ml-0"
            >
              {isPlaying ? <Pause size={20} className="fill-white" /> : <Play size={20} aria-hidden="true" className="fill-white" />}
            </button>
          </motion.div>

          {/* RIGHT SIDE — INFO CARD */}
          <motion.div
            className="flex flex-col justify-start mt-5 lg:pt-60"
            initial="hidden"
            animate="visible"
            variants={rightCardVariants}
          >
            <div className="md:mb-4">
              <div className="w-12 h-1 bg-white mb-4"></div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
                {t('hero.title')}
              </h2>

            </div>
            <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed lg:mb-6 max-w-[90%]">
              {t('hero.description')}
            </p>

            <div className="flex flex-col md:flex-row items-start my-6 lg:my-0 md:items-center gap-2">
              <div className=" flex flex-wrap gap-4 ">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToRequestProposal();
                  }}
                  className="
                  px-6 py-3 md:px-4 md:py-2
                  bg-black text-white border border-white/60
                  font-semibold
                  rounded-sm
                  hover:bg-[#191919]
                  transition-colors
                  flex items-center gap-2
                 "
                >
                  {t('hero.cta1')}
                  <MoveRight size={18} />
                </button>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToInsight();
                }}
                className="
                  px-6 py-3 md:px-4 md:py-2
                  bg-black text-white border border-white/60
                  font-semibold
                  rounded-sm
                  hover:bg-[#191919]
                  transition-colors
                  flex items-center gap-2
                 "
              >
                <span className="font-semibold">{t('hero.cta2')}</span>
                <MoveRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}