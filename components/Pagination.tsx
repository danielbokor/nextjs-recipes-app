import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  query?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  query,
}: PaginationProps) {
  return (
    <div className="flex justify-between mt-4">
      <Link
        href={`?page=${Math.max(currentPage - 1, 1)}${
          query ? `&search=${encodeURIComponent(query)}` : ""
        }`}
        aria-disabled={currentPage === 1}
        className={`px-4 py-2 ${
          currentPage > 1
            ? "bg-blue-500 hover:bg-blue-700"
            : "bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-50 pointer-events-none"
        } rounded`}
      >
        Previous
      </Link>

      <span>
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={`?page=${Math.min(currentPage + 1, totalPages)}${
          query ? `&search=${encodeURIComponent(query)}` : ""
        }`}
        aria-disabled={currentPage >= totalPages}
        className={`px-4 py-2 ${
          currentPage < totalPages
            ? "bg-blue-500 hover:bg-blue-700"
            : "bg-gray-200 hover:bg-gray-500 text-gray-800 hover:text-gray-50 pointer-events-none"
        } rounded`}
      >
        Next
      </Link>
    </div>
  );
}
