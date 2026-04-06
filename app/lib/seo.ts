import { Metadata } from "next";

type PageSeo = {
  title?: string;
  description?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  image,
}: PageSeo): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
