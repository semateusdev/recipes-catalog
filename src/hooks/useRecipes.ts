import { useEffect, useState } from "react";
import { Recipe } from "../interfaces/Recipe";
import { recipesService } from "../services/recipes.service";

export function useRecipes(time?: number, type?: string, wordToSearch?: string) {
    const [recipesData, setRecipesData] = useState<Recipe[]>([]);

    useEffect(() => {
              const fecthData = async () => {
                  const recipes = (await recipesService.getRecipes(time, type, wordToSearch)).map(recipe => {
                    return {...recipe, isFavorite: false};
                  });
                  setRecipesData(recipes)
              };
              fecthData();
    }, [type, time, wordToSearch]);
    return {recipesData, setRecipesData}
}
