import Link from "next/link";

export default function Top() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold">My Recipes App</h1>
      </div>

      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 text-gray-800 rounded-md"
        />
      </div>

      <div className="flex-shrink-0">
        <Link
          href="/signin"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
