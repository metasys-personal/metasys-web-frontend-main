"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ReinventedPage() {
    return (
        <main>
            {/* ================= TOP TITLE ================= */}
            <section className="px-0 lg:px-16 mb-16 lg:mb-24">
                <div className="relative flex flex-col justify-center lg:justify-start overflow-hidden">

                    {/* LINE 1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white"
                    >
                        WHERE STRATEGY
                    </motion.h1>

                    {/* LINE 2 */}
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="md:pl-[28%] lg:pl-[30%] pl-0 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white"
                    >
                        MEETS SCALE.
                    </motion.h2>

                    {/* BRAND */}
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:pl-[55%] md:pl-[55%] pl-0 text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight none text-white"
                    >
                        METASYS!
                    </motion.p>

                </div>

            </section>

            {/* ================= CONTENT SECTION ================= */}
            <section className="grid lg:grid-cols-2 gap-10 items-start max-w-[1400px] mx-auto">

                {/* LEFT — TEXT CONTENT */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Leading the next move
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        In a landscape defined by constant change, reinvention isn’t a
                        one-time play, it’s a continuous strategy. As goals shift and the
                        field evolves, organizations are reimagining how they operate,
                        compete, and grow with greater precision and purpose.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
                       This approach sits at the heart of our work, as we help organizations shape their future Sfrom transforming operations and elevating customer experiences to enabling sustainable, global growth.
                    </p>

                    {/* <button className="text-white border w-full md:w-auto border-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition">
                        Learn more
                    </button> */}
                </div>

                {/* RIGHT — IMAGE + CAPTION */}
                <div className="ml-auto flex flex-col gap-6 items-end text-right w-full">
                    <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                            src="/images/campaign.jpg"
                            alt="Reinvented with Metasys"
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
