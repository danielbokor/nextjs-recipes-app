import { Recipe } from "@/utils/types";

export async function getRecipe(id: string): Promise<Recipe | null> {
  if (!id) {
    return null;
  }

  const response = await fetch(`${process.env.API_URL}/recipes/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (response.status === 404) {
    return null;
  }

  if (response.ok) {
    return response.json();
  }

  throw new Error("Failed to fetch the recipe");
}
