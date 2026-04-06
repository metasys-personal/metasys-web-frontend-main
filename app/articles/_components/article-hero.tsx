import Image from "next/image";
import { Article } from "@/app/lib/mock-articles";

type Props = {
  article: Article;
};

export default function ArticleHero({ article }: Props) {
  return (
    <div className="relative w-full h-[280px] md:h-[420px]">
      <Image
        src={article.heroImage}
        alt={article.title}
        fill
        className="object-cover rounded-none"
        priority
      />
    </div>
  );
}
