"use client";

import Link from "next/link";
import { capabilities, industries } from "@/app/lib/capabilities.data";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

type LabelKey = string;

type CapabilityItem = {
  href: string;
  labelKey: LabelKey;
};

type IndustryItem = {
  href: string;
  labelKey: LabelKey;
};

export default function WhatWeDoContent() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);

  return (
    <section className="text-white">
      <div className="px-8 md:px-16 py-12 mt-10 lg:mt-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            {t("whatwedo.title")}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Capabilities */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white/70 mb-6">
              {t("whatwedo.capabilities")}
            </h3>

            <div className="grid grid-cols-2 gap-y-3 gap-x-10">
              {(capabilities as CapabilityItem[]).map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="relative inline-block hover:after:w-full">
                    {t(item.labelKey)}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white/70 mb-6">
              {t("whatwedo.industries")}
            </h3>

            <div className="grid grid-cols-2 gap-y-3 gap-x-10">
              {(industries as IndustryItem[]).map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="relative inline-block
                    after:block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    {t(item.labelKey)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}