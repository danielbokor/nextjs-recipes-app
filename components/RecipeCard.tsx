import { Recipe } from "@/utils/types";
import * as he from "he";
import Image from "next/image";
import Link from "next/link";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg block transition ease-in-out md:hover:scale-105">
      <Link href={`/${recipe.id}`}>
        <Image
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-64 object-cover object-center"
          width={100}
          height={100}
        />
      </Link>
      <div className="p-6">
        <Link href={`/${recipe.id}`}>
          <h2 className="text-xl font-bold">{recipe.name}</h2>
        </Link>
        <p className="text-white-700">{he.decode(recipe.description)}</p>
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
