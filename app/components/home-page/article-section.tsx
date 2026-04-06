import { Article, articles } from "@/app/lib/mock-articles";
import ArticleCard from "./article-card";
import Link from "next/link";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

export default function ArticlesSection() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);
  const displayedArticles: Article[] = articles.slice(0, 6);

  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{t('articles.title')}</h2>
        <Link
          href="/articles"
          className="text-sm text-gray-300 hover:text-white transition"
        >
          {t('articles.viewAll')} →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
