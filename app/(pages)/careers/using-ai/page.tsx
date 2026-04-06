"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUp, stagger } from "@/app/components/animations";

export default function UsingAIPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-20 pt-24 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <motion.div variants={fadeUp} className="relative w-full h-72">
          <Image
            src="/images/ai-future.jpg"
            alt="AI future"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Using AI to Strengthen
            <br /> Your Job Search
          </h1>
          <p className="text-gray-300 max-w-xl">
            See how artificial intelligence can help you prepare, present and
            engage effectively throughout your hiring journey.
          </p>
        </motion.div>
      </motion.section>

      {/* AI IN YOUR JOURNEY */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-24"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-4">
          AI in your hiring journey
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-400 mb-10 max-w-2xl">
          AI can help you prepare and present your best self.
        </motion.p>

        <motion.h3 variants={fadeUp} className="text-lg mb-6">
          AI tools that can support you
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            [
              "Research insights",
              "Learn about the organization, its work and industry context.",
            ],
            [
              "Resume and cover letters",
              "Improve grammar, clarity and structure while keeping your authentic story.",
            ],
            [
              "Interview preparation",
              "Practice responses and get feedback to boost confidence.",
            ],
          ].map(([title, desc]) => (
            <motion.div key={title} variants={fadeUp}>
              <div className="w-6 h-6 bg-gray-500 mb-4" />
              <h4 className="mb-2">{title}</h4>
              <p className="text-gray-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* AI USE TO AVOID */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        <div>
          <h3 className="text-lg mb-4">AI use to avoid</h3>
          <ul className="text-gray-400 space-y-2 text-sm list-disc list-inside">
            <li>Falsifying skills or experiences on your resume</li>
            <li>Generating interview answers during live evaluation</li>
            <li>Using AI to complete assessments unless explicitly allowed</li>
            <li>Using voice cloning or deepfake tools</li>
          </ul>

          <p className="text-xs text-gray-500 mt-6 max-w-md">
            These uses violate our Responsible AI principles and can result in
            disqualification. We use AI-detection and proctoring tools to ensure
            a level playing field.
          </p>
        </div>

        <div className="relative w-full h-64">
          <Image
            src="/images/responsible-ai.jpg"
            alt="Responsible AI usage"
            fill
            className="object-cover"
          />
        </div>
      </motion.section>

      {/* HOW AI SUPPORTS HIRING */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-24"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-10">
          How AI supports hiring
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            [
              "Drafting inclusive job descriptions",
              "Helping hiring teams frame roles fairly and clearly.",
            ],
            [
              "Candidate matching assistance",
              "Identifying skills and experience alignment patterns.",
            ],
            [
              "Application support tools",
              "Smoothing candidate experiences while filtering applications.",
            ],
            [
              "Resume screening highlights",
              "Highlighting strong alignment with job criteria.",
            ],
            ["Automated scheduling", "Simplifying coordination of interviews."],
          ].map(([title, desc]) => (
            <motion.div key={title} variants={fadeUp}>
              <div className="w-6 h-6 bg-gray-500 mb-4" />
              <h4 className="mb-2">{title}</h4>
              <p className="text-gray-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-10 max-w-3xl">
          We use AI to enhance—not replace—human decision-making. Every AI tool
          is reviewed for fairness, reliability and transparency. Human
          oversight is built into every step.
        </p>
      </motion.section>

      {/* RESPONSIBLE AI */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-24"
      >
        <h2 className="text-2xl mb-6">Principles of responsible AI</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Human-by-design: Technology supports humans, not replaces them
            </li>
            <li>Fairness: Bias is actively mitigated</li>
            <li>Transparency: Candidates are informed about AI use</li>
          </ul>

          <ul className="space-y-2 list-disc list-inside">
            <li>Safety & privacy: Personal data is protected</li>
            <li>Accountability: Ethical oversight at all stages</li>
          </ul>
        </div>
      </motion.section>

      {/* WHAT MATTERS MOST */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-24"
      >
        <h2 className="text-2xl mb-4">What matters most</h2>
        <p className="text-gray-400 max-w-2xl">
          AI can support you along the way, but what matters most are your
          authentic skills, story and potential.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-700 px-6 md:px-20 py-16"
      >
        <h2 className="text-2xl mb-4">Ready to begin?</h2>

        <div className="flex gap-4">
          <Link
            href="/careers/working-here"
            className="bg-white text-black px-6 py-2 text-sm"
          >
            Continue →
          </Link>

          <Link
            href="/careers/search"
            className="border border-white px-6 py-2 text-sm"
          >
            Search open roles →
          </Link>
        </div>
      </motion.section>

      {/* STAY CONNECTED */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 py-24"
      >
        <h2 className="text-2xl mb-10">Stay connected</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="mb-2">Join us</h3>
            <p className="text-gray-400 mb-3">
              Explore open roles that match your skills and interests.
            </p>
            <Link href="/careers/search" className="underline">
              Search jobs →
            </Link>
          </div>

          <div>
            <h3 className="mb-2">Stay in touch</h3>
            <p className="text-gray-400 mb-3">
              Explore content and career updates.
            </p>
            <Link href="/careers/blog" className="underline">
              Learn more →
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}