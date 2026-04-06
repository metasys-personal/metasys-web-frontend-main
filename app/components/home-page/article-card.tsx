import { Article } from "@/app/lib/mock-articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }: { article: Article }) {
  // Use first paragraph as description
  const firstParagraph = article.content.find(c => c.type === "paragraph")?.text ?? "";

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block group border border-gray-800 overflow-hidden cursor-pointer bg-neutral-900"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div className="p-6 space-y-2">
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {article.category} • {new Date(article.publishDate).toLocaleDateString()}
        </p>

        <h3 className="text-lg md:text-xl font-semibold group-hover:text-gray-200 transition">
          {article.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {firstParagraph}
        </p>
      </div>
    </Link>
  );
}
