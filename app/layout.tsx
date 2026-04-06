import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AccentureFooter from "./components/home-page/footer";
import { MobileMenuProvider } from "./providers/mobile-menu-context";
import GoogleAnalytics from "./components/google-analytics";
import { LocaleProvider } from "./providers/locale-context";
import { Toaster } from "react-hot-toast";

/* ======================
   GRAPHIK (HEADINGS)
====================== */
const graphik = localFont({
  src: [
    {
      path: "./fonts/graphik-fonts/Graphik-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/graphik-fonts/Graphik-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/graphik-fonts/Graphik-Semibold-Trial.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/graphik-fonts/Graphik-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
   

  ],
  variable: "--font-graphik",
  display: "swap",
});

/* ======================
   GT SECTRA (BODY)
====================== */
const sectra = localFont({
  src: [
    {
      path: "./fonts/gt-sectra-fonts/GT-Sectra-Fine-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gt-sectra-fonts/GT-Sectra-Fine-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gt-sectra-fonts/GT-Sectra-Fine-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sectra",
  display: "swap",
});

/* ======================
   HYPERSPACE (LOGO)
====================== */
const hyperspace = localFont({
  src: [
    {
      path: "./fonts/hyperspace/hyperspacerace-italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-hyperspace",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Metasys",
    template: "%s | Metasys",
  },
  description: "Global Consulting Technology Firm",
   icons: {
  icon: "/images/favico.png?v=2",
  shortcut: "/images/favico.png?v=2",
  apple: "/images/favico.png?v=2",
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${graphik.variable}
          ${sectra.variable}
          ${hyperspace.variable}
          antialiased
        `}
      >
        <Toaster position="top-right" />
        <LocaleProvider>
          <MobileMenuProvider>
            <GoogleAnalytics />
            {children}
            <AccentureFooter />
          </MobileMenuProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}