"use client";

import { fadeUp, stagger } from "@/app/components/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const expertiseAreas = [
  "Consulting",
  "Strategy",
  "Song",
  "Operations",
  "Digital Engineering & Manufacturing",
  "AI & Analytics",
  "Cybersecurity",
  "Cloud",
  "Salesforce",
  "SAP",
  "Oracle",
  "Workday",
  "Technical Architect",
  "Corporate Functions",
];

export default function CareerAreasPage() {
  return (
    <div className="bg-black text-white overflow-hidden antialiased">
      {/* HERO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-20 pt-28 pb-24"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-light tracking-tight max-w-4xl leading-tight"
        >
          Where you can make an impact?
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-gray-300 max-w-3xl text-lg leading-relaxed"
        >
          Accelerate growth, inspire innovation by placing technology at the
          center of business strategy, operations and customer value creation.
        </motion.p>
      </motion.section>

      {/* WORKING HERE – VISUAL PILLARS */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-16 tracking-wide">
          What it’s like working here
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {[
            { title: "Reach", img: "/images/reach.jpg" },
            { title: "Sustainability", img: "/images/sustainability-work.jpg" },
            {
              title: "Inclusion & Diversity",
              img: "/images/inclusion-diversity.jpg",
            },
            { title: "Responsible AI", img: "/images/responsible-ai.jpg" },
            { title: "Career Growth", img: "/images/career-growth.jpg" },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="group">
              <div className="relative h-72 mb-8 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg tracking-wide">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* AREAS OF EXPERTISE */}
      <section className="px-6 md:px-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-2xl mb-10 tracking-wide">
            Areas of expertise
          </motion.h2>

          <ul className="space-y-3 text-gray-300">
            {expertiseAreas.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="group flex items-center gap-3 cursor-default transition-all duration-300 hover:text-white"
              >
                <span className="h-1px w-4 bg-gray-600 group-hover:w-8 transition-all duration-300" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONSULTING FEATURE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-gray-700/70 p-10 rounded-sm hover:border-gray-500 transition-colors duration-300"
        >
          <h3 className="text-xl mb-5 tracking-wide">Consulting</h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Providing insight, strategy and solutions that help organizations
            reinvent themselves and solve complex challenges.
          </p>

          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src="/images/consulting.jpg"
              alt="Consulting careers"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* FIND YOUR FIT */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-36"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-6 tracking-wide">
          Find your fit
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-300 max-w-3xl mb-20 text-lg leading-relaxed"
        >
          Whether you’re a student, an experienced professional or a leader,
          there’s a place for your passion, expertise and ambition on our teams.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {[
            {
              title: "Students & Graduates",
              img: "/images/students-graduate.jpg",
              link: "/careers/search",
              text: "Opportunities tailored for early career growth",
            },
            {
              title: "Early career professionals",
              img: "/images/early-career-professionals.jpg",
              link: "/careers/working-here",
              text: "Programs designed to help you transition and grow.",
            },
            {
              title: "Experienced professionals",
              img: "/images/experienced-professionals.jpg",
              link: "/careers/hiring-journey",
              text: "Roles for deep expertise and impact.",
            },
            {
              title: "Leadership Opportunities",
              img: "/images/leadership-opportunities.jpg",
              link: "/careers/work-environment",
              text: "Strategic positions for senior leaders.",
            },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="group">
              <div className="overflow-hidden mb-8">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={350}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg mb-3 tracking-wide">{item.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{item.text}</p>
              <Link
                href={item.link}
                className="inline-block underline underline-offset-8 hover:opacity-80 transition-opacity"
              >
                Explore opportunities →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* STAY CONNECTED */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-36 border-t border-gray-800"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-14 tracking-wide">
          Stay connected
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div variants={fadeUp}>
            <h3 className="mb-3 tracking-wide">Ready to begin?</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Explore open roles that match your skills and interests.
            </p>
            <Link
              href="/careers/search"
              className="underline underline-offset-8"
            >
              Search jobs →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="mb-3 tracking-wide">Stay in touch</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Explore content and career updates.
            </p>
            <Link href="/careers/blog" className="underline underline-offset-8">
              Learn more →
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}