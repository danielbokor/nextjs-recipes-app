import Link from "next/link";
import { Search } from "../../components/Search";

export default function Header() {
  return (
    <div className="w-full bg-gray-800">
      <header className="sticky top-0 z-50 flex items-center justify-between max-w-7xl mx-auto p-4 text-white shadow-md">
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-xl font-bold">My Recipes App</h1>
          </Link>
        </div>

        <Search />

        <div className="flex-shrink-0">
          <span className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md">
            Sign In
          </span>
        </div>
      </header>
    </div>
  );
}
