import { getRecipes } from "@/utils/getRecipes";
import { RecipeCard } from "./RecipeCard";
interface RecipeListProps {
  currentPage: number;
  searchQuery?: string;
}

export async function RecipeList({
  currentPage,
  searchQuery,
}: RecipeListProps) {
  let response;
  try {
    response = await getRecipes({
      page: currentPage,
      limit: 6,
      query: searchQuery,
    });
  } catch (e) {
    console.error(e);
    return <div>No recipes found!</div>;
  }

  const { data: recipeList, total: totalItems, limit } = response;
  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeList.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        query={searchQuery}
      />
    </div>
  );
}

import { Pagination } from "./Pagination";
import { RecipeCardSkeleton } from "./RecipeCard";

export function RecipeListSkeleton() {
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
