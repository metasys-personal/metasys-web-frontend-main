import Script from "next/script";

import { articles } from "@/app/lib/mock-articles";
import ArticleHero from "../_components/article-hero";
import ArticleContent from "../_components/article-content";
import { getArticleDescription } from "@/app/lib/utils.ts/get-article";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

type PageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    return notFound();
  }

  return (
    <>
      {/* NewsArticle structured data */}
      <Script
        id="article-news-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: getArticleDescription(article),
            image: article.heroImage,
            datePublished: article.publishDate,
            dateModified: article.publishDate,
            author: {
              "@type": "Person",
              name: article.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Metasys",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
            articleSection: article.category,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://yourdomain.com/articles/${article.slug}`,
            },
          }),
        }}
      />


      {/* Breadcrumb structured data */}
      <Script
        id="article-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://yourdomain.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Articles",
                item: "https://yourdomain.com/articles",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: `https://yourdomain.com/articles/${article.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Page UI */}
      <>
        <NavbarNew />

        <main className="bg-[#191919] text-white min-h-screen pt-30 px-4 md:px-8 lg:px-16">
          <Breadcrumb
            overrideSegments={[
              { name: "Articles", href: "/articles" },
              { name: article.title, href: `/articles/${article.slug}` },
            ]}
          />

          <div className="mt-8 grid md:grid-cols-2 gap-12 items-center pt-16">
            {/* LEFT: Image */}
            <ArticleHero article={article} />

            {/* RIGHT: Text + Content */}
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                {article.category}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mt-2">
                {article.title}
              </h1>

              <p className="text-sm text-gray-400 mt-2 mb-6">
                By {article.author} · {article.publishDate}
              </p>

              <ArticleContent content={article.content} />
            </div>
          </div>
        </main>

      </>
    </>
  );
}

// Metadata generation (SEO, not schema)
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: getArticleDescription(article),
  };
}