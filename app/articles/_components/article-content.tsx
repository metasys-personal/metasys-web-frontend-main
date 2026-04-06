import { ArticleBlock } from "@/app/lib/mock-articles";

type Props = {
  content: ArticleBlock[];
};

export default function ArticleContent({ content }: Props) {
  return (
    <article className="prose prose-invert py-10">
      {content.map((block, i) => {
        switch (block.type) {
          case "heading":
            return <h2 key={i}>{block.text}</h2>;

          case "paragraph":
            return <p key={i}>{block.text}</p>;

          case "quote":
            return (
              <blockquote key={i} className="border-l-4 border-white pl-4 italic">
                {block.text}
              </blockquote>
            );

          case "code":
            return (
              <pre key={i} className="bg-neutral-900 rounded-md p-4 overflow-x-auto">
                <code>{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}