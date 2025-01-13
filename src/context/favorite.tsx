import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Recipe } from "../interfaces/Recipe";

export const FavoriteContext = createContext<{favoriteList: Recipe[], setFavoriteList?: Dispatch<SetStateAction<Recipe[]>>}>({
    favoriteList: []
});

export function FavoriteProvider({children}: {children: JSX.Element}) {

    const [favoriteList, setFavoriteList] = useState<Recipe[]>([]);    

    return (
        <FavoriteContext.Provider value={{favoriteList, setFavoriteList}}>
            {children}
        </FavoriteContext.Provider>
    )
}
