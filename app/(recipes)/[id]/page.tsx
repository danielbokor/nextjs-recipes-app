import { getRecipe } from "@/utils/getRecipe";
import { getRecipes } from "@/utils/getRecipes";
import Image from "next/image";

export const revalidate = 60;

export const dynamicParams = true;

export async function generateStaticParams() {
  const { data: recipes } = await getRecipes();

  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const recipe = await getRecipe(id);

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
      <p className="text-gray-600">{recipe.description}</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Ingredients</h2>
      <p>{recipe.ingredients}</p>
      <h2 className="text-2xl font-bold mt-6 mb-2">Directions</h2>
      <p>{recipe.directions}</p>
    </div>
  );
}
