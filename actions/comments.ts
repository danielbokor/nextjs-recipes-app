"use server";

import { revalidateTag } from "next/cache";

export async function createComment(formData: FormData): Promise<void> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const comment = formData.get("comment") as string;
  const recipeId = formData.get("recipeId") as string;

  if (!recipeId || !comment) {
    return;
  }

  const response = await fetch(
    `http://localhost:3000/recipes/${recipeId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, comment }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to post the comment");
  }

  // revalidatePath(`/recipes/${recipeId}`);
  revalidateTag("comments");
}
