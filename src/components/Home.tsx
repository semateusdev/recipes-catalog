import { useEffect, useState } from "react";
import { Card } from "./Card";
 import axios from 'axios';
import { DishTypes, Recipe } from "../interfaces/Recipe";
import { recipesMock } from "../data/recipes-mock";
import { Aside } from "./Aside";
import { SearchInput } from "./Search-input";
import { RecipesFilters } from "../interfaces/Recipes-fIlters.interface";

export function Home() {

    const describe = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum doloremque possimus nihil necessitatibus non quod! Nihil omnis excepturi recusandae minus numquam itaque fugiat quisquam id! Qui dicta vel aperiam!';
    const [recipesData, setRecipesData] = useState<Recipe[]>([]);
    const [type, setType] = useState<DishTypes>();
    const [time, setTime] = useState<number>();
    const [wordToSearch, setWordToSearch] = useState<string>();

    useEffect(() => {
            //Key 1 - 88a9c0789b854150aaa26af3b744c69e,
            //Key 2 - 35c9a8b8be1e499d826bfba158264428,
            console.log(wordToSearch);
            
          axios.get<{results: Recipe[]}>(
                'https://api.spoonacular.com/recipes/complexSearch?apiKey=35c9a8b8be1e499d826bfba158264428&offset=0&number=20',
                {params: {maxReadyTime: time, type: type, titleMatch: wordToSearch}}
                )
              .then(resp => {
                setRecipesData(resp.data.results);
              })
              .catch(() => setRecipesData(recipesMock))
    }, [type, time, wordToSearch]);

    const setFilters = (filter: RecipesFilters)  => {
        const idType = filter.categories.find(item => item.active);    
        const time = filter.time.find(item => item.active);
        
        if(idType)
            setType(idType.id as DishTypes);
        if(time)
            setTime(time.id as number);
    }

    const search = (word: string) => setWordToSearch(word);
    
    return (
        <section className="w-[100vw] flex overflow-hidden px-4">
            <Aside changeFilters={setFilters}></Aside>
            <div className="flex-1 h-[98vh] flex flex-col gap-4 my-[1vh] mx-4">
                <div className="w-full h-24 bg-[#f4f8ff] rounded-xl p-4 shadow-[0_0_15px_-7px] shadow-[#23262b] flex justify-between items-end gap-4">
                    <div className="flex-1 FHD:w-2/3 FHD:flex-none">
                        <SearchInput search={search}></SearchInput>
                    </div>
                    <img src="/github.svg" alt="Logo de github" className="w-12"/>
                </div>
                <div className="w-full h-without-6 bg-[#f4f8ff] rounded-xl p-4 flex flex-col shadow-[0_0_15px_-7px] shadow-[#23262b]">
                    <p className="mb-8 text-3xl font-bold text-primary h-fit">Recipe catalog</p>
                    <main className="flex flex-wrap gap-x-4 HD:gap-x-16 gap-y-10 justify-center flex-1 overflow-auto pb-4">
                    {
                        recipesData?.map(recibe => {
                            return <Card key={recibe.id} id={recibe.id} name={recibe.title} image={recibe.image} describe={describe}></Card>    
                        })
                    }
                    </main>
                </div>
            </div>            
        </section>
        
    )
}