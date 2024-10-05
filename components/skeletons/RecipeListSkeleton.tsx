import RecipeCardSkeleton from "./RecipeCardSkeleton";

export default function RecipeListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <RecipeCardSkeleton key={index} />
        ))}
    </div>
  );
}
