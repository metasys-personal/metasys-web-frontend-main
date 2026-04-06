import { Article } from "../mock-articles";

export function getArticleDescription(article?: Article) {
  if (!article) return "";

  const textBlock = article.content.find(
    block => "text" in block
  );

  return textBlock?.text ?? "";
}
