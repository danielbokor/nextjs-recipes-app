import { RecipeList, RecipeListSkeleton } from "@/components/RecipeList";
import { Suspense } from "react";

export const revalidate = 60;

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: PageProps) {
  const currentPage = parseInt(searchParams.page || "1", 10);

  return (
    <div>
      <h1 className="text-3xl font-bold pb-6">Recipes</h1>
      <Suspense fallback={<RecipeListSkeleton />}>
        <RecipeList currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
