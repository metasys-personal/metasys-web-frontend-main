type ProTipPageProps = {
  params?: {
    slug?: string;
  };
};

export default function ProTipDetailPage({ params }: ProTipPageProps) {
  const slug = params?.slug ?? "";

  const title = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Pro Tip";

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 pt-28 pb-24">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h1>

      <p className="text-gray-400 max-w-2xl">
        This is where the detailed content for <strong>{title}</strong> will go.
        You can expand this with blog text, images, tips, or examples.
      </p>
    </main>
  );
}