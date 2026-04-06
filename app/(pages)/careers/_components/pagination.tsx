import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center gap-3 py-6 text-gray-400"
    >
      <button aria-label="Previous page"><ChevronLeft /></button>

      <button aria-current="page" className="text-white">
        1
      </button>

      <button aria-label="Go to page 2">2</button>
      <button aria-label="Go to page 3">3</button>

      <button aria-label="Next page"><ChevronRight /></button>
    </nav>
  );
}
