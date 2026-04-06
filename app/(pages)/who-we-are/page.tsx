import { buildPageMetadata } from "@/app/lib/seo";
import WhoWeArePageClient from './client';

export const generateMetadata = () =>
  buildPageMetadata({
    title: "About Metasys | Who We Are",
    description:
      "Learn about Metasys' vision, mission, and core values driving transformation and innovation for organizations worldwide.",
    image: "/images/og/who-we-are.jpg",
  });

export default function WhoWeArePage() {
  return <WhoWeArePageClient />;
}
