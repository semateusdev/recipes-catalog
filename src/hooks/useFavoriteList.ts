import { useContext } from "react";
import { FavoriteContext } from "../context/favorite";
import { Recipe } from "../interfaces/Recipe";

export function useFavoriteList() {

    const { favoriteList, setFavoriteList } = useContext(FavoriteContext);    

    const addFavorite = (recipe: Recipe) => {
        if (!setFavoriteList)
            return;
        const selectedFav = favoriteList.find(fav => fav.id === recipe.id);
        const newList = selectedFav ? favoriteList.filter(fav => fav.id !== recipe.id) : [...favoriteList, recipe];        
        setFavoriteList(newList);
    }

    return {addFavorite, favoriteList};    
}