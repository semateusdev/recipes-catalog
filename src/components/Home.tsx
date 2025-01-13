import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Aside } from "./Aside";
import { SearchInput } from "./Search-input";
import { useRecipes } from "../hooks/useRecipes";
import { FavoriteList } from "./Favorite-list";
import { useFavoriteList } from "../hooks/useFavoriteList";
import { useFilters } from "../hooks/useFilters";

export function Home() {

    
    const [hideFavoriteList, setHideFavoriteList] = useState<boolean>(true);
    const [wordToSearch, setWordToSearch] = useState<string>();
    const { type, time, setFilters} = useFilters();
    const { recipesData, setRecipesData } = useRecipes(time, type, wordToSearch);
    const { addFavorite, favoriteList } = useFavoriteList();

    useEffect(() => {
        const updatedRecipesData = recipesData.map(value => value);
        updatedRecipesData.forEach(recipe => {
            const isAdded = favoriteList.find(fav => fav.id === recipe.id);
            recipe.isFavorite = !!isAdded;
        });
        setRecipesData(updatedRecipesData);
    }, [favoriteList])

    const search = (word: string) => setWordToSearch(word);
    const  goRepository = () => {
        window.open('https://github.com/semateusdev/recipes-catalog', '_blank') 
    }
    
    return (
        <section className="w-[100vw] flex overflow-hidden px-4 relative">
            <Aside changeFilters={setFilters}></Aside>
            {!hideFavoriteList && <FavoriteList/>}
            <div className="flex-1 h-[98vh] flex flex-col gap-4 my-[1vh] mx-4">
                <div className="w-full h-24 bg-[#f4f8ff] rounded-xl p-4 shadow-[0_0_15px_-7px] shadow-[#23262b] flex justify-between items-end gap-4">
                    <div className="flex-1 FHD:w-2/3 FHD:flex-none">
                        <SearchInput search={search}></SearchInput>
                    </div>
                    <div className="flex gap-8">
                        <img src="/favoriteList.svg" alt="Lista de favoritos" className="w-12 cursor-pointer" onClick={() => setHideFavoriteList(!hideFavoriteList)}/>
                        <img src="/github.svg" alt="Logo de github" className="w-12 cursor-pointer" onClick={goRepository}/>
                    </div>
                </div>
                <div className="w-full h-without-6 bg-[#f4f8ff] rounded-xl p-4 flex flex-col shadow-[0_0_15px_-7px] shadow-[#23262b]">
                    <p className="mb-8 text-3xl font-bold text-primary h-fit">Recipe catalog</p>
                    <main className="flex flex-wrap gap-x-4 HD:gap-x-16 gap-y-10 justify-center flex-1 overflow-auto pb-4">
                    {
                        recipesData?.map(recibe => {
                            return <Card key={recibe.id} id={recibe.id} name={recibe.title} image={recibe.image} isFavorite={recibe.isFavorite} addFavorite={addFavorite}></Card>    
                        })
                    }
                    </main>
                </div>
            </div>            
        </section>
        
    )
}