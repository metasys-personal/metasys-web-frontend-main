
import { buildPageMetadata } from '@/app/lib/seo';
import CloudClientPage from './cloud-client'

export const metadata = buildPageMetadata({
  title: "Cloud Services | Metasys",
  description: "Unlock cloud’s true potential by modernizing and reframing it as the engine of AI, innovation and growth.",
  image: "/images/cloud.svg", 
});

export default function CloudPageView() {
  return <CloudClientPage />
}
