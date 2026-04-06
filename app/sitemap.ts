import { MetadataRoute } from "next";

// Mock data
import { INSIGHTS } from "@/app/lib/insights.data";
import { jobs } from "@/app/lib/jobs.data";

// Base URL (prod or local)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://metasys-hwvq.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ========================
    // Core pages
    // ========================
    { url: `${BASE_URL}`, lastModified: now },
    { url: `${BASE_URL}/capabilities`, lastModified: now },
    { url: `${BASE_URL}/industries`, lastModified: now },
    { url: `${BASE_URL}/insights`, lastModified: now },
    { url: `${BASE_URL}/case-studies`, lastModified: now },
    { url: `${BASE_URL}/leadership`, lastModified: now },
    { url: `${BASE_URL}/careers`, lastModified: now },

    // ========================
    // Capabilities (static children)
    // ========================
    { url: `${BASE_URL}/capabilities/cloud`, lastModified: now },
    { url: `${BASE_URL}/capabilities/cyber-security`, lastModified: now },
    { url: `${BASE_URL}/capabilities/customer-service`, lastModified: now },
    // add more capabilities here as needed

    // ========================
    // Industries (static children)
    // ========================
    { url: `${BASE_URL}/industries/healthcare`, lastModified: now },
    { url: `${BASE_URL}/industries/finance`, lastModified: now },
    { url: `${BASE_URL}/industries/retail`, lastModified: now },
    // add more industries here as needed

    // ========================
    // Insights (dynamic from mock data)
    // ========================
    ...INSIGHTS.map((insight) => ({
      url: `${BASE_URL}/insights/${insight.slug}`,
      lastModified: new Date(insight.publishDate),
    })),

    // ========================
    // Jobs (dynamic from mock data)
    // Use `id` or `slug` if you have it
    // ========================
    ...jobs
      .filter((job) => job.id) // make sure it has a valid id
      .map((job) => ({
        url: `${BASE_URL}/careers/${job.id}`,
        lastModified: now, // could also add updatedAt if available
      })),
  ];
}
