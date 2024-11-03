"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Search() {
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="flex-grow mx-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 text-gray-800 rounded-md"
        />
      </form>
    </div>
  );
}
