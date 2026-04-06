"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "@/app/components/animations";

export default function BenefitsPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/images/health-benefits.jpg"
          alt="Employee health benefits"
          fill
          priority
          className="object-cover opacity-50"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-6xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Benefits that empower you
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            At Metasys, we invest in your health, growth, and well-being —
            because when you thrive, we all do.
          </p>
        </motion.div>
      </section>

      {/* HEALTH BENEFITS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Comprehensive health benefits
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We provide comprehensive health coverage that supports you
              physically and mentally, giving you peace of mind at every stage
              of your career.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl">
            <Image
              src="/images/health-benefits.jpg"
              alt="Health benefits"
              width={700}
              height={500}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* WELL BEING */}
      <section className="py-24 px-6 bg-neutral-900">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="order-2 md:order-1 overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/well-being.jpg"
              alt="Well being at Metasys"
              width={700}
              height={500}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Your well-being matters
            </h2>
            <p className="text-gray-300 leading-relaxed">
              From flexible work options to mental wellness initiatives, we
              create an environment where balance and productivity go hand in
              hand.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CAREER GROWTH */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Continuous career growth
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Learning never stops at Metasys. We empower you with
              opportunities, mentorship, and experiences that help you grow
              professionally and personally.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl">
            <Image
              src="/images/career-growth.jpg"
              alt="Career growth"
              width={700}
              height={500}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}