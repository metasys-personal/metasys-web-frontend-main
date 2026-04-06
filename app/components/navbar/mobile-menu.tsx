"use client";

import React, { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { ChevronDown, MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { capabilities, industries } from "@/app/lib/capabilities.data";
import type { 
  // DropdownKey,
   MenuItem } from "../../types/types";

import CareersContent from "./careers";
import CountrySelector from "./country-selector";

import { countryToLocale } from "@/app/lib/i18n";
import { Locale, useLocale } from "@/app/providers/locale-context";
import { useClientTranslation } from "@/app/hooks/useTranslations";

type MobileMenuProps = {
  menu: MenuItem[];
  mobileMenuOpen: boolean;
  selectedCountry: string;

  showCountryModal?: boolean;

  countries?: string[];
  setSelectedCountry?: (country: string) => void;

  closeMobileMenu: () => void;

  setShowCountryModal?: () => void;
  setSubMenuPanel?: () => void;

  onLocaleChange?: (locale: Locale) => void;
};

export default function MobileMenu({
  menu,
  mobileMenuOpen,
  selectedCountry,
  closeMobileMenu,
  // showCountryModal,
  // setShowCountryModal,
  // setSubMenuPanel,
  countries,
  setSelectedCountry,
  onLocaleChange,
}: MobileMenuProps) {
  const router = useRouter();

  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);

  const [showWhatWeDo, setShowWhatWeDo] = useState(false);
  const [showCareers, setShowCareers] = useState(false);

  const [capOpen, setCapOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);

  const handleCountryChange = (country: string) => {
    setSelectedCountry?.(country);

    const localeValue: Locale = countryToLocale[country] ?? "en";
    onLocaleChange?.(localeValue);
  };

  return (
    <>
      {/* MAIN MOBILE MENU */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed top-0 right-0 w-full h-full bg-[#191919] text-white z-100 transform transition-transform duration-300 flex flex-col lg:hidden"
        style={{
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <button onClick={closeMobileMenu}>
            <FiX size={24} />
          </button>

          <CountrySelector
            countries={countries ?? []}
            selected={selectedCountry}
            setSelected={handleCountryChange}
          />
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto p-4">
          {menu.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                item.label === "What we do" ? (
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      setShowWhatWeDo(true);
                    }}
                    className="w-full flex items-center justify-between py-3 text-base"
                  >
                    <span>{item.label}</span>
                    <FiChevronDown size={18} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      closeMobileMenu();
                      setShowCareers(true);
                    }}
                    className="w-full flex items-center justify-between py-3 text-base"
                  >
                    <span>{item.label}</span>
                    <FiChevronDown size={18} />
                  </button>
                )
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={closeMobileMenu}
                  className="block py-3"
                >
                  {item.label}
                </Link>
              )}

              <div className="border-b border-white/10" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 space-y-4">
          <div className="space-y-3">
            <a href="#contact">Contact Us</a>
            <a href="#careers">Careers</a>
            <a href="#locations">Locations</a>
          </div>

          <div className="flex gap-4 pt-4">
            <FaLinkedin size={20} />
            <FaFacebook size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div
        className="fixed top-0 bg-[#191919] right-0 w-full h-full text-white z-50 transform transition-transform duration-300 flex flex-col lg:hidden"
        style={{
          transform: showWhatWeDo ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-center p-4 border-b border-white/10">
          <button
            onClick={() => setShowWhatWeDo(false)}
            className="flex items-center gap-2"
          >
            <MoveLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <h2 className="text-xl font-semibold mt-4 mb-10">
            What we do
          </h2>

          {/* Capabilities */}
          <div className="bg-[#1A1A1A] rounded-lg">
            <button
              onClick={() => setCapOpen(!capOpen)}
              className="flex justify-between items-center w-full p-3"
            >
              <span>Capabilities</span>
              <ChevronDown className={capOpen ? "rotate-180" : ""} />
            </button>

            {capOpen && (
              <ul className="p-3 text-gray-300 grid gap-2">
                {capabilities.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setShowWhatWeDo(false);
                        closeMobileMenu();
                      }}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Industries */}
          <div className="bg-[#1A1A1A] rounded-lg mt-4">
            <button
              onClick={() => setIndOpen(!indOpen)}
              className="flex justify-between items-center w-full p-3"
            >
              <span>Industries</span>
              <ChevronDown className={indOpen ? "rotate-180" : ""} />
            </button>

            {indOpen && (
              <ul className="p-3 text-gray-300 grid gap-2">
                {industries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setShowWhatWeDo(false);
                        closeMobileMenu();
                      }}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* CAREERS */}
      <div
        className="fixed top-0 right-0 w-full h-full bg-[#191919] text-white z-50 transform transition-transform duration-300 flex flex-col lg:hidden"
        style={{
          transform: showCareers ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-center p-4 border-b border-white/10">
          <button
            onClick={() => setShowCareers(false)}
            className="flex items-center gap-2"
          >
            <MoveLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <CareersContent
            onNavigate={(url: string) => {
              setShowCareers(false);
              closeMobileMenu();
              router.push(url);
            }}
          />
        </div>
      </div>
    </>
  );
}