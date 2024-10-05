import { getRecipes } from "@/utils/getRecipes";
import RecipeCard from "./RecipeCard";

export default async function RecipeList() {
  const { data: recipeList } = await getRecipes({
    delay: 1000,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipeList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
