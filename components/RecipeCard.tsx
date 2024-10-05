import { Recipe } from "@/lib/definitions";
import Image from "next/image";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover object-center"
        width={100}
        height={100}
      />
      <div className="p-6">
        <h2 className="text-xl font-bold">{recipe.name}</h2>
        <p className="text-white-700">{recipe.description}</p>
        {recipe.rating && (
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span>{recipe.rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}
