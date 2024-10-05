import { Recipe } from "@/utils/types";

export async function getRecipe(id: string): Promise<Recipe | null> {
  if (!id) {
    return null;
  }

  const url = `http://localhost:3000/recipes/${id}`;

  return fetch(url).then((response) => response.json());
}
