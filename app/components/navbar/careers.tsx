"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

type CareersContentProps = {
  onNavigate: (url: string) => void;
  
};

export default function CareersContent({
  onNavigate,
  
}: CareersContentProps) {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);
  
  const findJob = [t('careersDropDown.findJob.searchJobs'), t('careersDropDown.findJob.careerAreas')];
  const lifeAcc = [t('careersDropDown.life.working'), t('careersDropDown.life.benefits'), t('careersDropDown.life.environment'), t('careersDropDown.life.blog')];
  const howHire = [t('careersDropDown.hire.usingAI'), t('careersDropDown.hire.journey'), t('careersDropDown.hire.tips')];

  const findJobLinks: Record<string, string> = {
    "Search for Jobs": "/careers/search",
    "Career Areas": "/careers/areas",
  };

  const lifeAccLinks: Record<string, string> = {
    "Working Here": "/careers/working-here",
    "Benefits": "/careers/benefits",
    "Work Environment": "/careers/work-environment",
    "Careers Blog": "/careers/blog",
  };

  const howHireLinks: Record<string, string> = {
    "Using AI": "/careers/using-ai",
    "Hiring Journey": "/careers/hiring-journey",
    "Pro Tips": "/careers/pro-tips",
  };

  const [jobOpen, setJobOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);

  return (
    <section className="px-3 md:px-4 lg:px-16 lg:py-12">
      <div className="w-full mt-10 lg:mt-10 lg:pb-[55px] text-white bg-[#191919] h-auto">
        {/* TITLE */}
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8">
          {t('careersDropDown.homepage')}
        </h1>

        {/* DESKTOP VIEW */}
        <div className="hidden md:grid grid-cols-3 gap-10 pt-6">
          <div>
            <h2 className="text-sm text-white/70 font-semibold mb-4">{t('careersDropDown.sections.find')}</h2>

            <ul className="grid gap-y-2 text-white">
              {findJob.map((item) => (
                <li key={item} className="cursor-pointer">
                  <span
                    className="relative inline-block font-semibold text-md
                   after:block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300
                   hover:after:w-full"
                    onClick={() => onNavigate(findJobLinks[item])}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm text-white/70 font-semibold mb-4">{t('careersDropDown.sections.life')}</h2>
            
            <ul className="grid gap-y-2 text-white">
              {lifeAcc.map((item) => (
                <li key={item}>
                  <span
                    className="relative inline-block font-semibold text-md
                       after:block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300
                       hover:after:w-full cursor-pointer"
                    onClick={() => onNavigate(lifeAccLinks[item])}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm text-white/70 font-semibold mb-4">{t('careersDropDown.sections.hire')}</h2>
          
            <ul className="grid gap-y-2 text-white">
              {howHire.map((item) => (
                <li key={item}>
                  <span
                    className="relative inline-block font-semibold text-md
                       after:block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300
                       hover:after:w-full cursor-pointer"
                    onClick={() => onNavigate(howHireLinks[item])}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="md:hidden space-y-0">
          {/* Find a job */}
          <div className="bg-[#1A1A1A] rounded-lg">
            <button
              onClick={() => setJobOpen(!jobOpen)}
              className="flex justify-between items-center w-full pb-2"
            >
              <span className="text-sm font-semibold">{t('careersDropDown.sections.find')}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-300 ${jobOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${jobOpen ? "max-h-[500px] mt-3" : "max-h-0"}`}>
              <ul className="grid grid-cols-1 gap-3 text-gray-300 p-2">
                {findJob.map((item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => onNavigate(findJobLinks[item])} // <-- use handler
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Life at Metasys */}
          <div className="bg-[#1A1A1A] rounded-lg">
            <button
              onClick={() => setLifeOpen(!lifeOpen)}
              className="flex justify-between items-center w-full py-2"
            >
              <span className="text-sm font-semibold">{t('careersDropDown.sections.life')}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-300 ${lifeOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${lifeOpen ? "max-h-[500px] mt-3" : "max-h-0"}`}>
              <ul className="grid grid-cols-1 gap-3 text-gray-300 p-2">
                {lifeAcc.map((item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => onNavigate(lifeAccLinks[item])} // <-- use handler
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How we hire */}
          <div className="bg-[#1A1A1A] rounded-lg">
            <button
              onClick={() => setHireOpen(!hireOpen)}
              className="flex justify-between items-center w-full p-0 py-2"
            >
              <span className="text-sm font-semibold">{t('careersDropDown.sections.hire')}</span>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-300 ${hireOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${hireOpen ? "max-h-[500px] mt-3" : "max-h-0"}`}>
              <ul className="grid grid-cols-1 gap-3 text-gray-300 p-2">
                {howHire.map((item) => (
                  <li
                    key={item}
                    className="hover:text-white transition-colors cursor-pointer"
                    onClick={() => onNavigate(howHireLinks[item])} // <-- use handler
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}