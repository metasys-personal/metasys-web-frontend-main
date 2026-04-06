import { Insight } from "../types/insights";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchInsights(): Promise<Insight[]> {
  const res = await fetch(`${BASE_URL}/api/insights`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch insights");
  }

  return res.json();
}
