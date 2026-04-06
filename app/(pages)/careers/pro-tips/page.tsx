"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, stagger } from "@/app/components/animations";

export default function ProTipsPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-20 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={fadeUp} className="relative h-72 md:h-96">
          <Image
            src="/images/pro-tips-hero.jpg"
            alt="Career pro tips"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Pro Tips for Your <br /> Career Journey
          </h1>
          <p className="text-gray-300 max-w-xl mb-8">
            Actionable advice and insights to help you prepare, apply and
            succeed at every stage of your career search.
          </p>
          <Link
            href="/careers/search"
            className="inline-block bg-white text-black px-6 py-3 text-sm hover:bg-gray-200 transition"
          >
            Explore roles
          </Link>
        </motion.div>
      </motion.section>

      {/* CRAFTING APPLICATION */}
      <TipsSection
        title="Crafting a strong application"
        tips={[
          {
            title: "Be clear and concise",
            desc: "Use simple language, focus on accomplishments and measurable outcomes.",
          },
          {
            title: "Tailor for the role",
            desc: "Highlight experience and skills that align with the position.",
          },
          {
            title: "Show continuous learning",
            desc: "Include courses, certifications or growth experiences.",
          },
          {
            title: "Proofread carefully",
            desc: "Eliminate errors to show professionalism and attention to detail.",
          },
        ]}
      />

      {/* PREPARE FOR INTERVIEWS */}
      <TipsSection
        title="Prepare for interviews"
        tips={[
          {
            title: "Research the role and team",
            desc: "Understand expectations and context before the conversation.",
          },
          {
            title: "Practice common questions",
            desc: "Rehearse responses that show your thought process.",
          },
          {
            title: "Ask thoughtful questions",
            desc: "Demonstrate curiosity about the work, team and priorities.",
          },
          {
            title: "Demonstrate professionalism",
            desc: "Be punctual, dress appropriately and engage actively.",
          },
        ]}
        carousel
      />

      {/* STAY CONNECTED */}
      <section className="px-6 md:px-20 pb-32">
        <h2 className="text-2xl mb-10">Stay connected</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="w-6 h-6 bg-white mb-4" />
            <h3 className="mb-2">Join us</h3>
            <p className="text-gray-300 mb-3">
              Explore open roles that match your skills and interests.
            </p>
            <Link href="/careers/search" className="underline">
              Search jobs →
            </Link>
          </div>

          <div>
            <div className="w-6 h-6 bg-white mb-4" />
            <h3 className="mb-2">Stay in touch</h3>
            <p className="text-gray-300 mb-3">
              Get updates, insights and career inspiration.
            </p>
            <Link href="/careers" className="underline">
              Learn more →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Reusable Section ---------- */

function TipsSection({
  title,
  tips,
  carousel = false,
}: {
  title: string;
  tips: { title: string; desc: string }[];
  carousel?: boolean;
}) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-6 md:px-20 pb-28"
    >
      <motion.h2 variants={fadeUp} className="text-2xl mb-12">
        {title}
      </motion.h2>

      <div
        className={`grid gap-6 ${
          carousel ? "grid-cols-1 md:grid-cols-5" : "grid-cols-1 md:grid-cols-4"
        }`}
      >
        {tips.map((tip, i) => {
          const slug = tip.title
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-neutral-900 border border-gray-800 p-6 flex flex-col justify-between min-h-[280px] hover:border-white transition"
            >
              <div>
                <span className="text-xs uppercase block mb-3 text-gray-400">
                  Blog
                </span>
                <h3 className="mb-3">{tip.title}</h3>
                <p className="text-sm text-gray-400">{tip.desc}</p>
              </div>

              <Link
                href={`/careers/pro-tips/${slug}`}
                className="text-sm mt-6 underline inline-block"
              >
                See more →
              </Link>
            </motion.div>
          );
        })}
      </div>

      {carousel && (
        <div className="flex gap-4 justify-end mt-8">
          <button className="w-10 h-10 border border-white">←</button>
          <button className="w-10 h-10 border border-white">→</button>
        </div>
      )}
    </motion.section>
  );
}