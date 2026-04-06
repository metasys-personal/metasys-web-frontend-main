import NavbarNew from "@/app/components/navbar/navbar";
import Link from "next/link";

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* PRIMARY NAVBAR */}
      <NavbarNew />

      {/* SECONDARY CAREERS BAR */}
      <div className="w-full bg-[#111] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-16 py-3">
          <span className="font-medium text-sm">Careers</span>

          <div className="flex gap-6 text-sm">
            <Link href="/careers/search" className="hover:underline">
              Job Search
            </Link>
            <Link href="/careers/saved-jobs" className="hover:underline">
              Saved Jobs
            </Link>
            <Link href="/careers/access-application" className="hover:underline">
              Access Application
            </Link>
          </div>
        </div>
      </div>

      {/* PAGE CONTENT */}
      {children}
    </>
  );
}