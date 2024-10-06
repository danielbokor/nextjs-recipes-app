import { Recipe } from "./types";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getRecipes(
  params: {
    query?: string;
    limit?: number;
    page?: number;
    delay?: number;
  } = { delay: 0 }
): Promise<{ data: Recipe[]; total: number }> {
  const { delay: ms, ...remainingParams } = params;

  const queryParams = Object.entries(remainingParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  if (ms) {
    await delay(ms);
  }

  const response = await fetch(`http://localhost:3000/recipes?${queryParams}`, {
    // next: {
    //   revalidate: 60,
    // },
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error("Failed to fetch the recipes");
}
