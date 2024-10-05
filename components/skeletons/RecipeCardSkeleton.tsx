// components/RecipeCardSkeleton.js
export default function RecipeCardSkeleton() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-64 bg-gray-700"></div>
      <div className="p-6 space-y-4">
        <div className="bg-gray-700 h-6 w-3/4 rounded-md"></div>
        <div className="bg-gray-700 h-4 w-full rounded-md"></div>
        <div className="bg-gray-700 h-4 w-5/6 rounded-md"></div>
        <div className="mt-2 flex items-center space-x-2">
          <div className="bg-gray-700 h-6 w-6 rounded-full"></div>
          <div className="bg-gray-700 h-6 w-12 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
