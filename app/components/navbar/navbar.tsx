"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

import FlexStack from "../ui/layout/flexstack/flexstack";

import WhatWeDoContent from "./what-we-do";
import CareersContent from "./careers";

import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import MobileSubmenu from "./mobile-submenu";
import { useMobileMenu } from "@/app/providers/mobile-menu-context";

import type { DropdownKey, MenuItem } from "../../types/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CountrySelector from "./country-selector";
import { countryToLocale, localeToCountry } from "@/app/lib/i18n";
import { Locale, useLocale } from "@/app/providers/locale-context";
import { useTranslations } from "next-intl";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "Singapore",
  "UAE",
  "Australia",
];

type NavbarNewProps = {
  onLocaleChange?: (locale: Locale) => void;
};

export default function NavbarNew({ onLocaleChange }: NavbarNewProps) {
  
  const t = useTranslations("nav");

  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  const { locale, setLocale } = useLocale();
 
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States");

  useEffect(() => {
    const country = localeToCountry[locale] ?? "United States";
    const id = requestAnimationFrame(() => {
      setSelectedCountry(prev => (prev === country ? prev : country));
    });
    return () => cancelAnimationFrame(id);
  }, [locale]);


  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as string;
    const initialLocale = savedLocale ?? locale;
    const country = localeToCountry[initialLocale] ?? "United States";
    const id = requestAnimationFrame(() => {
      setSelectedCountry(prev => (prev === country ? prev : country));
    });
    return () => cancelAnimationFrame(id);
  }, [locale]);

  const handleCountryChange = (country: string) => {
    const nextLocale = countryToLocale[country] ?? "en";
    setLocale(nextLocale);
    localStorage.setItem("locale", nextLocale);
    setSelectedCountry(country); // <-- important
  };
 


  const [subMenuPanel, setSubMenuPanel] = useState<DropdownKey | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<DropdownKey | null>(null);

  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);

    // close ALL menus
    setDesktopDropdown(null);
    setSubMenuPanel(null);
    setMobileMenuOpen(false);
  };

  // **Move dropdownContent inside the component**
  const dropdownContent = {
    "whatWeDo": <WhatWeDoContent />,
    careers: <CareersContent onNavigate={handleNavigate} />,
  };


  // **Close dropdown automatically on route change**
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDesktopDropdown(null);
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);


  const menu: MenuItem[] = [
    { id: "whatWeDo", label: t("whatWeDo"), dropdown: true },
    { label: t("whatWeThink"), href: "/what-we-think", dropdown: false },
    { label: t("whoWeAre"), href: "/what-we-do", dropdown: false },
    { id: "careers", label: t("careers"), dropdown: true },
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        desktopMenuRef.current?.contains(target) ||
        desktopDropdownRef.current?.contains(target)
      ) {
        return; // click INSIDE menu or dropdown → do nothing
      }

      setDesktopDropdown(null);
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);


  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full px-2 md:px-6 lg:px-30 text-white py-6 fixed top-0 z-50 ${mobileMenuOpen ? "bg-[#191919]" : "bg-black"
          }`}
      >
          <FlexStack
            align="center"
            className="w-full justify-between md:justify-between relative"
          >
            {/* Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <FiX size={24} aria-hidden="true" /> : <FiMenu size={24} aria-hidden="true" />}
            </button>


            {/* Center Logo */}
            {!mobileMenuOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:static">
                <Link className="flex items-center gap-1.5" href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={10}
                    height={10}
                    className="md:h-9 h-7 w-auto"
                    priority
                  />
                  <span className="text-2xl font-logo italic uppercase">Metasys</span>
                </Link>
              </div>
            )}

            {/* DESKTOP MENU */}
            <DesktopMenu
              menu={menu}
              desktopDropdown={desktopDropdown}
              setDesktopDropdown={setDesktopDropdown}
              desktopMenuRef={desktopMenuRef}
            />

            {/* RIGHT SIDE: search + globe */}
            <div className="flex items-center gap-6">
              {/* Country Selector */}
              <CountrySelector
                countries={countries}
                selected={selectedCountry}
                setSelected={handleCountryChange}
              />
            </div>

            {/* Mobile */}
            {mobileMenuOpen && (
              <div className="md:hidden flex items-center gap-2">
                <CountrySelector
                  countries={countries}
                  selected={selectedCountry}
                  setSelected={handleCountryChange}
                />
              </div>
            )}
          </FlexStack>
        
        {/* DESKTOP DROPDOWN CONTENT */}
        <motion.div
          ref={desktopDropdownRef}
          initial={{ opacity: 0, y: -20 }}
          animate={desktopDropdown ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          // className="fixed top-20 left-0 w-full bg-[#191919] text-white z-50 overflow-y-auto h-screen lg:h-auto max-h-[calc(100vh-5rem)]"
          className="hidden lg:block fixed top-20 left-0 w-full bg-[#191919] text-white z-50 overflow-y-auto h-screen lg:h-auto max-h-[calc(100vh-5rem)]"

        >
          {desktopDropdown && dropdownContent[desktopDropdown]}
        </motion.div>
      </nav>

      {/* MOBILE MENUS */}
      <MobileMenu
        menu={menu}
        mobileMenuOpen={mobileMenuOpen}
        selectedCountry={selectedCountry}
        showCountryModal={showCountryModal}
        countries={countries}
        setSelectedCountry={setSelectedCountry}
        closeMobileMenu={() => {
          setMobileMenuOpen(false);
          setSubMenuPanel(null);
        }}
        // setShowCountryModal={setShowCountryModal}
        // setSubMenuPanel={setSubMenuPanel}
        onLocaleChange={onLocaleChange}
      />

      <MobileSubmenu
        subMenuPanel={subMenuPanel}
        dropdownContent={dropdownContent}
        selectedCountry={selectedCountry}
        countries={countries}
        setSelectedCountry={setSelectedCountry}
        showCountryModal={showCountryModal}
        setShowCountryModal={setShowCountryModal}
        close={() => {
          setSubMenuPanel(null);
          setMobileMenuOpen(true);
        }}
      />
    </>
  );
}