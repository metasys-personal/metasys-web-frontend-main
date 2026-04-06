import { articles } from "@/app/lib/mock-articles";
import ArticleCard from "@/app/components/home-page/article-card";
import NavbarNew from "../components/navbar/navbar";
import Breadcrumb from "../components/ui/breadcrumb/breadcrumb";

export default function ArticlesPage() {
  return (
    <>
      <NavbarNew />
      <main className="bg-[#191919] text-white min-h-screen pb-16 pt-30 px-4 md:px-8 lg:px-16">
        <Breadcrumb
          overrideSegments={[

            { name: "Articles", href: "/articles" },
          ]}
        />
        <h1 className="text-4xl md:text-5xl font-bold my-10">All Articles</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles
            .filter(article => article.published)
            .map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
        </div>
      </main>
    </>
  );
}
