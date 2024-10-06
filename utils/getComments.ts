import { Comment } from "@/utils/types";

export async function getComments(
  recipeId: string,
  options: { delay?: number } = { delay: 0 }
): Promise<Comment[] | null> {
  if (!recipeId) {
    return null;
  }

  const { delay } = options;
  if (delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  const response = await fetch(
    `http://localhost:3000/recipes/${recipeId}/comments`
  );

  if (response.status === 404) {
    return null;
  }

  if (response.ok) {
    return response.json();
  }

  throw new Error("Failed to fetch comments");
}
