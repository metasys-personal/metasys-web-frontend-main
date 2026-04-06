import NavbarNew from "@/app/components/navbar/navbar";


export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <NavbarNew />
      {children}
    </div>
  );
}
