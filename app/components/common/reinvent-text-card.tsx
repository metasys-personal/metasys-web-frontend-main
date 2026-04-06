 "use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

type Props = {
  subtitle: string;
  title: string;
  hoverTitle: string;
};



export function ReinventTextCard({ subtitle, title, hoverTitle }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="
        h-full w-full
        relative
        bg-[#191919]
        text-white
        p-8
        border border-white/10
        overflow-hidden
        cursor-pointer
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="block w-6 h-[3px] bg-white mb-4" />

      <p className="text-sm tracking-widest text-white mb-6">
        {subtitle}
      </p>

      <div className="relative h-24">
        <motion.h3
          animate={{ y: hovered ? -28 : 0, opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute text-xl md:text-3xl font-semibold max-w-md"
        >
          {title}
        </motion.h3>

        <motion.h3
          animate={{ y: hovered ? 0 : 32, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute text-[16px] font-semibold pt-3"
        >
          {hoverTitle}
        </motion.h3>
      </div>

      <div className="absolute bottom-8 left-8 flex items-center gap-2 text-sm">
        <span>Learn more</span>
        <ArrowRight size={16} />
      </div>
    </div>
  );
}
