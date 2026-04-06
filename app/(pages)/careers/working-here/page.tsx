"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUp, stagger } from "@/app/components/animations";

export default function WorkingHerePage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="px-6 md:px-20 pt-32 pb-32 grid grid-cols-1 gap-12"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-light max-w-4xl"
        >
          Here, anything is possible
        </motion.h1>

        <motion.p variants={fadeUp} className="text-gray-300 max-w-xl">
          Thrive and collaborate with extraordinary people, build in-demand
          skills, and create meaningful change for clients, communities and the
          world.
        </motion.p>
      </motion.section>

      {/* WORK WITH REACH */}
      <section className="px-6 md:px-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-4">Work with reach</h2>
          <p className="text-gray-300 max-w-md">
            Metasys is big. Really big. When you join us, you’ll work with the
            top companies and leaders from every industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full h-80"
        >
          <Image
            src="/images/reach.jpg"
            alt="Work with reach"
            fill
            className="object-cover rounded-xl transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* RECOGNITION */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 md:px-20 pb-32"
      >
        <motion.h2 variants={fadeUp} className="text-2xl mb-12 max-w-3xl">
          From our I&D actions to our ethical approach to business, Metasys is
          recognized around the world.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          {[
            "Leader in Gartner Magic Quadrant™ for Finance Transformation Strategy Consulting",
            "Leader in IDC MarketScape Worldwide Consulting",
            "Leader in Innovation Consulting by Forrester",
            "Leader in ESG Compliance Reporting",
            "Leader in Digital Transformation Services",
            "Leader in Cloud & AI Advisory",
          ].map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-700/60 p-8 text-sm rounded-lg bg-black/40"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WORK WITH PURPOSE */}
      <section className="px-6 md:px-20 pb-36">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl mb-6"
        >
          Work with purpose
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mb-20"
        >
          Be part of creating positive change and making the world better for
          our people, our clients, and the communities where we live and work.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              title: "Sustainability",
              img: "sustainability-work.jpg",
              text: "Committed to net-zero and responsible growth.",
            },
            {
              title: "Inclusion & diversity",
              img: "inclusion-diversity.jpg",
              text: "A culture where everyone belongs.",
            },
            {
              title: "Responsible AI",
              img: "responsible-ai.jpg",
              text: "Ethical innovation that benefits society.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative w-full h-60 mb-6">
                <Image
                  src={`/images/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BECOME YOUR NEXT BEST SELF */}
      <section className="px-6 md:px-20 pb-36 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl mb-4">Become your next best self</h2>
          <p className="text-gray-300 mb-8">
            Continuous learning and curiosity fuel growth at Metasys.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/career-growth.jpg"
              alt="Growth at Metasys"
              width={600}
              height={380}
              className="rounded-xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="mb-2">Grow with purpose</h3>
          <p className="text-gray-400 mb-6">
            Build skills, explore career paths and create impact.
          </p>

          <Link href="/careers/search" className="underline">
            Search jobs →
          </Link>
        </motion.div>
      </section>

      {/* STAY CONNECTED */}
      <section className="px-6 md:px-20 pb-36">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl mb-12"
        >
          Stay connected
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div variants={fadeUp} whileHover={{ x: 4 }}>
            <h3 className="mb-2">Join us</h3>
            <p className="text-gray-400 mb-4">
              Explore roles that match your passion.
            </p>
            <Link href="/careers/search" className="underline">
              Search jobs →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} whileHover={{ x: 4 }}>
            <h3 className="mb-2">Stay in touch</h3>
            <p className="text-gray-400 mb-4">
              Get career insights and updates.
            </p>
            <Link href="/careers/blog" className="underline">
              Learn more →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}