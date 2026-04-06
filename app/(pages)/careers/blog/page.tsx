"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Blog = {
  title: string;
  image?: string;
};

const careerAdvice: Blog[] = [
  {
    title: "Key tips to set yourself up for career success",
    image: "/images/blog-1.jpg",
  },
  {
    title: "Secrets to a successful case-study interview",
    image: "/images/blog-2.jpg",
  },
  { title: "Ways to help your resume stand out", image: "/images/blog-3.jpg" },
  {
    title: "Tips to perfect your video interview",
    image: "/images/blog-4.jpg",
  },
];

const insiderViews: Blog[] = [
  {
    title: "How you can thrive in a transforming workplace",
    image: "/images/insider-1.jpg",
  },
  {
    title: "How generative AI will transform how you work",
    image: "/images/insider-2.jpg",
  },
  {
    title: "Why we’re one of the best workplaces and what that means",
    image: "/images/insider-3.jpg",
  },
  {
    title: "Where reinvention could take your career",
    image: "/images/insider-4.jpg",
  },
];

const BlogCard = ({ blog }: { blog: Blog }) => (
  <motion.article
    whileHover={{ y: -8 }}
    transition={{ duration: 0.35 }}
    className="group bg-neutral-900 rounded-xl overflow-hidden flex flex-col"
  >
    {blog.image && (
      <div className="relative h-44 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    )}

    <div className="p-6 flex flex-col justify-between flex-1">
      <div>
        <p className="text-xs tracking-widest text-gray-500 mb-3">BLOG</p>
        <h3 className="text-lg font-light leading-snug">{blog.title}</h3>
      </div>

      <span className="mt-6 text-sm text-white/70 group-hover:text-white transition">
        Read more →
      </span>
    </div>
  </motion.article>
);

export default function BlogsPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-20 gap-12">
        {/* LEFT IMAGE (NEW) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/hero.jpg"
            alt="Careers at Metasys"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-widest text-gray-400 mb-4">
            CAREERS BLOG
          </p>
          <h1 className="text-4xl md:text-6xl font-light mb-6">Careers blog</h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Insights, advice and stories to help you grow your career and thrive
            in the world of work.
          </p>
        </motion.div>
      </section>

      {/* WHAT YOU’LL FIND */}
      <section className="px-6 md:px-20 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-6">
            What you’ll find here
          </h2>
          <p className="text-gray-400 max-w-md mb-8">
            Explore tips, insider views and real stories that offer practical
            advice for job seekers, career builders and professionals.
          </p>
          <Link href="/careers/blogs" className="underline underline-offset-4">
            View all blogs →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-72 rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/career-insights.jpg"
            alt="Career insights"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* CAREER ADVICE */}
      <section className="px-6 md:px-20 pb-28">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-light">Career advice</h2>
          <Link href="/careers/blogs" className="underline underline-offset-4">
            View all blogs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerAdvice.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </section>

      {/* INSIDER VIEWS */}
      <section className="px-6 md:px-20 pb-36">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-light">Insider views</h2>
          <Link href="/careers/blogs" className="underline underline-offset-4">
            View all blogs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {insiderViews.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}