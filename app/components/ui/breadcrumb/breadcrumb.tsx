// components/Breadcrumb.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

interface BreadcrumbProps {
  overrideSegments?: { name: string; href: string }[];
}

export default function Breadcrumb({ overrideSegments }: BreadcrumbProps) {
  const pathname = usePathname();

  const segments =
    overrideSegments ||
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, arr) => ({
        name: segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()), 
        href: "/" + arr.slice(0, index + 1).join("/"),
      }));

  // Don't show breadcrumb on home page
  if (segments.length === 0) return null;

  return (
    <>
      <nav className="text-gray-400 text-sm mb-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          {segments.map((seg, idx) => (
            <li key={seg.href} className="flex items-center gap-2">
              <span>/</span>
              {idx === segments.length - 1 ? (
                <span className="text-white font-semibold">{seg.name}</span>
              ) : (
                <Link href={seg.href} className="hover:text-white">
                  {seg.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Breadcrumb structured data for SEO */}
      <Script
        id="breadcrumb-schema"
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
                item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}`,
              },
              ...segments.map((seg, idx) => ({
                "@type": "ListItem",
                position: idx + 2,
                name: seg.name,
                item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}${seg.href}`,
              })),
            ],
          }),
        }}
      />
    </>
  );
}