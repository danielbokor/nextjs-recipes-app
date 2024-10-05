import { Recipe } from "../lib/definitions";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function useRecipes(
  params: {
    query?: string;
    limit?: number;
    page?: number;
    delay: number;
  } = { delay: 0 }
): Promise<{ data: Recipe[]; total: number }> {
  const { delay: ms, ...remainingParams } = params;

  const queryParams = Object.entries(remainingParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const url = `http://localhost:3000/recipes?${queryParams}`;

  await delay(ms);

  return fetch(url).then((response) => response.json());
}
