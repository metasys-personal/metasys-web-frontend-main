"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, stagger } from "@/app/components/animations";

export default function HiringJourneyPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-20 pt-24 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl md:text-5xl mb-6">Your journey to Metasys</h1>

          <p className="text-gray-400 max-w-2xl">
            Learn what happens after you apply—how we bring people, skills and
            ideas together through purpose-driven journeys.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/career-journey-hero.jpg"
            alt="Career journey at Metasys"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.section>

      {/* OUR HIRING PROCESS */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl mb-6">Our hiring process</h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Confirming receipt</li>
            <li>Reviewing your application</li>
            <li>Reaching out</li>
            <li>Meeting you</li>
            <li>Assessing your skills</li>
            <li>Offering you a role</li>
          </ul>

          <p className="text-xs text-gray-500 mt-6 max-w-md">
            We’ve been alerted to fraudulent recruitment messages asking for
            payments or personal information. Metasys does not request payment
            at any stage of employment.
            <span className="underline ml-1 cursor-pointer">Learn more</span>.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden"
        >
          <Image
            src="/images/hiring-process.jpg"
            alt="Hiring process overview"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      {/* FAQ SECTIONS */}
      {[
        {
          title: "Frequently asked questions",
          items: [
            [
              "Why Metasys is a great place to start or build my career?",
              "Metasys offers meaningful work, multidisciplinary teams, and a commitment to continuous learning and ethical business practices.",
            ],
            [
              "What is a typical workday like?",
              "Your day may vary depending on the work you do, but collaboration and innovation are always central.",
            ],
            [
              "What is the work environment like?",
              "We offer flexible work options, inclusive spaces, and a culture that values creativity and teamwork.",
            ],
          ],
        },
        {
          title: "Finding the right fit",
          items: [
            [
              "How can I find an internship?",
              "We offer internships for students at all levels.",
            ],
            [
              "What degrees or training do I need?",
              "There’s no single requirement—we value skills, curiosity, and experience.",
            ],
            [
              "Am I eligible if I’m a former employee?",
              "Yes, alumni in good standing are welcome to return.",
            ],
            [
              "Where can I explore leadership roles?",
              "Search opportunities for experienced professionals and leaders.",
            ],
            [
              "How can I find roles that match me?",
              "Set up job alerts to receive relevant opportunities.",
            ],
            [
              "Does Metasys have an employee referral program?",
              "Yes—current and former employees can refer candidates.",
            ],
            [
              "Is work authorization required?",
              "Authorization requirements depend on the role and location.",
            ],
          ],
        },
        {
          title: "Understanding the application process",
          items: [
            [
              "I can’t find the role I was asked to apply for",
              "Try searching by keyword or reach out to your recruiter.",
            ],
            [
              "I forgot my username or password",
              "Use the recovery option on the Apply portal.",
            ],
            [
              "I need accommodations",
              "Contact our recruiting team for assistance.",
            ],
            [
              "How long does it take to apply?",
              "Most applications take about 10 minutes.",
            ],
            [
              "When will I hear back?",
              "Timelines vary by role, but we’ll keep you informed.",
            ],
            [
              "How will I be notified?",
              "You’ll receive an email or phone call.",
            ],
            [
              "How should I prepare?",
              "Preparation depends on the role—your recruiter can guide you.",
            ],
            [
              "Can I reapply if not selected?",
              "Yes—future opportunities may be a better fit.",
            ],
            [
              "If a similar role opens, do I reapply?",
              "Yes—each role requires a new application.",
            ],
            [
              "How is my data handled?",
              "Data usage is outlined in our Privacy Policy.",
            ],
          ],
        },
      ].map((section) => (
        <motion.section
          key={section.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-20 pb-24"
        >
          <h2 className="text-xl mb-8">{section.title}</h2>

          <div className="divide-y divide-gray-800 text-sm text-gray-400">
            {section.items.map(([q, a]) => (
              <div key={q} className="py-4">
                <p className="text-white mb-1">{q}</p>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </motion.section>
      ))}

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