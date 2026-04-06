
import InsightsClient from "./insights-clients";

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://metasys-hwvq.vercel.app"; 
  const res = await fetch(`${baseUrl}/api/insights`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch insights");

  const insights = await res.json();
  return <InsightsClient insights={insights} />;
}
