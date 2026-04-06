"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "@/app/components/animations";

export default function BenefitsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative h-[80vh] flex items-center px-6 md:px-20"
      >
        <Image
          src="/images/work-environment-hero.jpg"
          alt="Work environment"
          fill
          priority
          className="object-cover opacity-40"
        />
        <motion.div variants={fadeUp} className="relative max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Work environment
          </h1>
          <p className="text-gray-300 text-lg">
            Spaces designed to inspire creativity, collaboration and focus —
            wherever you do your best work.
          </p>
        </motion.div>
      </motion.section>

      {/* FLEXIBLE WORK */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 py-32 grid md:grid-cols-2 gap-20 items-center"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl mb-4">Flexible work</h2>
          <p className="text-gray-400 leading-relaxed">
            We support flexibility through hybrid models, adaptable schedules
            and a culture that values outcomes over hours.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative h-80 rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/flexible-work.jpg"
            alt="Flexible work"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </motion.section>

      {/* SPACES BUILT FOR TEAMWORK */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-32"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-12">
          Spaces built for teamwork
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Open collaboration", img: "/images/open-team.jpg" },
            { title: "Focus rooms", img: "/images/focus-room.jpg" },
            { title: "Innovation labs", img: "/images/innovation-lab.jpg" },
          ].map(({ title, img }) => (
            <motion.div key={title} variants={fadeUp}>
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mb-2">{title}</h3>
              <p className="text-gray-400">
                Purpose-built environments that support the way teams work best.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA STRIP */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 py-24 bg-neutral-900"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl mb-4">
            Where people and ideas come together
          </h2>
          <p className="text-gray-400">
            Our workplaces are designed to empower individuals, foster
            collaboration and fuel innovation.
          </p>
        </div>
      </motion.section>

      {/* AWARDS & RECOGNITION — FIXED */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 py-32"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-12">
          Awards & recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Metasys recognized as a Leader in Gartner® Magic Quadrant™ for Finance Transformation Strategy Consulting.",
            "Metasys named a Leader in the IDC EMEA CSRD Compliance Report 2024.",
            "Metasys recognized as a Leader in Innovation Consulting by Forrester, Q2 2024.",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-neutral-200 text-black p-8 rounded-lg text-lg leading-relaxed hover:bg-neutral-300 transition-colors"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* DESIGNED FOR IMPACT */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-32"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-6">
          Designed for impact
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-400 max-w-3xl mb-12">
          From collaboration to recognition, every experience is crafted to help
          people do meaningful work.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: "Collaboration", img: "/images/impact-collaboration.jpg" },
            { title: "Engagement", img: "/images/impact-engagement.jpg" },
            { title: "Recognition", img: "/images/impact-recognition.jpg" },
          ].map(({ title, img }) => (
            <motion.div key={title} variants={fadeUp}>
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mb-2">{title}</h3>
              <p className="text-gray-400">
                Thoughtfully designed experiences that create lasting impact.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* STAY CONNECTED */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 py-24 bg-neutral-900"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl mb-4">Stay connected</h2>
          <p className="text-gray-400">
            Discover how our teams collaborate, grow and build what’s next —
            together.
          </p>
        </div>
      </motion.section>
    </main>
  );
}