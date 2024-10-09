import { RecipeList, RecipeListSkeleton } from "@/components/RecipeList";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-6">Recipes</h1>
      <Suspense fallback={<RecipeListSkeleton />}>
        <RecipeList />
      </Suspense>
    </div>
  );
}
