import { Comments, CommentsSkeleton } from "@/components/Comments";
import { getRecipe } from "@/utils/getRecipe";
import { getRecipes } from "@/utils/getRecipes";
import * as he from "he";
import Image from "next/image";
import { Suspense } from "react";

export const revalidate = 60;

export async function generateStaticParams() {
  let response;
  try {
    response = await getRecipes();
  } catch (e) {
    console.error(e);
    return [];
  }

  const { data: recipes } = response;

  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

interface RecipePageProps {
  params: { id: string };
}

export default async function RecipePage({ params: { id } }: RecipePageProps) {
  let recipe;
  try {
    recipe = await getRecipe(id);
  } catch (error) {
    console.error(error);
  }

  if (!recipe) {
    return <div>{`Recipe ${id} not found`}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold pb-6">{recipe.name}</h1>
      <Image
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover object-center"
        width={100}
        height={100}
      />
      <p className="text-gray-600">{he.decode(recipe.description)}</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Ingredients</h2>
      <p>{he.decode(recipe.ingredients)}</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Directions</h2>
      <p>{he.decode(recipe.directions)}</p>

      <Suspense fallback={<CommentsSkeleton />}>
        <Comments recipeId={recipe.id} />
      </Suspense>
    </div>
  );
}
