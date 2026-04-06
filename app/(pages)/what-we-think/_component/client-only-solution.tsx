"use client";

import { solutions } from "@/app/lib/solutions.data";
import { motion, Variants } from "framer-motion";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { Locale } from "@/app/providers/locale-context";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

type ClientOnlySolutionsGridProps = {
  locale: Locale; // use your global Locale type
};

export default function ClientOnlySolutionsGrid({ locale }: ClientOnlySolutionsGridProps) {
   const { t, isLoading } = useClientTranslation(locale);
  if (isLoading) return <p>Loading...</p>;

  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden pb-16"
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
      {solutions.map((item) => (
        <motion.div key={item.id} className="bg-black/20 rounded-xl p-6 flex flex-col gap-4 hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer" variants={cardVariants}>
          <div className="w-16 h-16 relative">
            <item.icon className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-xl font-semibold">{t(item.titleKey)}</h2>
          <p className="text-gray-300 text-base leading-relaxed">{t(item.descriptionKey)}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
