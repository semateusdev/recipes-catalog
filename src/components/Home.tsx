import { useEffect, useState } from "react";
import { Card } from "./Card";
 import axios from 'axios';
import { Recipe } from "../interfaces/Recipe";
import { recipesMock } from "../data/recipes-mock";

export function Home() {

    const describe = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum doloremque possimus nihil necessitatibus non quod! Nihil omnis excepturi recusandae minus numquam itaque fugiat quisquam id! Qui dicta vel aperiam!';
    const [recipesData, setRecipesData] = useState<Recipe[]>([]);

    useEffect(() => {
          axios.get<{recipes: Recipe[]}>('https://api.spoonacular.com/recipes/random?apiKey=88a9c0789b854150aaa26af3b744c69e&offset=0&number=20')
              .then(resp => {
                  setRecipesData(resp.data.recipes);
                  console.log(resp.data);
                
              })
              .catch(() => {
                setRecipesData(recipesMock)
              })
    }, []);
    

    return (
        <section className="p-4 h-full flex flex-col">
            <p className="mb-8 text-3xl font-bold text-primary h-fit">Catalogo de recetas</p>
            <main className="flex flex-wrap gap-12 justify-center flex-1 overflow-auto pb-4">
               {
                recipesData?.map(recibe => {
                    return <Card key={recibe.id} id={recibe.id} name={recibe.title} image={recibe.image} describe={describe} time={recibe.readyInMinutes}></Card>    
                })
               }
            </main>
        </section>
        
    )
}