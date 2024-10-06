import { getRecipes } from "@/utils/getRecipes";
import RecipeCard from "./RecipeCard";

export default async function RecipeList() {
  let response;
  try {
    response = await getRecipes();
  } catch (e) {
    console.error(e);
    return <div>No recipes found!</div>;
  }

  const { data: recipeList } = response;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipeList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
