import { INSIGHTS } from "@/app/lib/insights.data";
import { NextResponse } from "next/server";



export async function GET() {
  // Simulate CMS sorting: priority desc then publishDate desc
  const sorted = INSIGHTS.sort((a, b) => {
    if ((b.priority ?? 0) !== (a.priority ?? 0)) {
      return (b.priority ?? 0) - (a.priority ?? 0);
    }
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });

  return NextResponse.json(sorted);
}
