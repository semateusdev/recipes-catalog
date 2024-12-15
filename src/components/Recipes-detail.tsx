import { useEffect, useState } from "react";
import { Step } from "./Step";
import { useParams } from "react-router-dom";
import { DetailRecipe, ExtendedIngredient, StepInterface } from "../interfaces/Recipe";
import axios from "axios";
import { Header } from "./Header";
import { recipesMock } from "../data/recipes-mock";

export function RecipesDetail() {

    const { id } = useParams();
    const [data, setData] = useState<DetailRecipe>();
    const [summary, setSummary] = useState<string>();

    const deleteElementsInText = (text: string) => {
        const elements = ['<b>', '</b>', '<a href="', '</a>', '">'];
        let newText = text;
        elements.forEach(element => {
            newText = newText.split(element).map(text => text.replace(element, '')
                .replace(',,', ', ').replace(' ,', ', ').replace(',.', '.'))
            .join();
        });
        return newText;
    }

    useEffect(() => {
         axios.get<DetailRecipe>(`https://api.spoonacular.com/recipes/${id}/information?apiKey= --35c9a8b8be1e499d826bfba158264428`)
            .then(resp => {
                setData(resp.data);
                setSummary(deleteElementsInText(resp.data.summary))
            })
            .catch(() => {
                setData(recipesMock[0]);
                setSummary(deleteElementsInText(recipesMock[0].summary))
            })
    }, []);

    


    return (
        <section className="flex flex-col gap-4">
            <Header></Header>
            <div className="flex flex-col Tablet:flex-row h-withoutheader bg-[#f4f8ff] rounded-xl mx-4 shadow-[0_0_15px_-7px] shadow-[#23262b] overflow-hidden">
                <img src={data?.image} alt="" className="h-32 Tablet:w-1/3 Tablet:h-full object-cover" />
                <div className="flex-1 flex flex-col gap-4 py-4 px-4 HD:px-8 h-full overflow-auto">
                    <p className="text-3xl Tablet:text-4xl HD:text-5xl text-center font-bold text-primary">{data?.title}</p>
                    <p className="text-sm Tablet:text-base FHD:text-xl text-center">{summary}</p>

                    <div className="flex px-6 justify-center gap-8 FHD:gap-20 my-4 flex-wrap">
                        <div className="w-fit flex gap-4 items-center">
                            <img src="/time.svg" alt="Time icon" className="w-8"/>
                            <p className="font-bold text-primary text-sm HD:text-base">Preparation time: {data?.readyInMinutes} min</p>
                        </div>
                        <div className="w-fit flex gap-4 items-center">
                            <img src="/vegetarian.svg" alt="Vegetarian icon" className="w-8"/>
                            <p className="font-bold text-primary text-sm HD:text-base">Vegetarian: {data?.vegetarian ? 'Yes' : 'No'}</p>
                        </div>
                        <div className="w-fit flex gap-4 items-center">
                            <img src="/nutrition.svg" alt="Nutrition icon" className="w-8"/>
                            <p className="font-bold text-primary text-sm HD:text-base">Very healthy: {data?.veryHealthy ? 'Yes' : 'No'}</p>
                        </div>                    
                    </div>

                    <div className="flex flex-col Tablet:flex-row HD:px-6 flex-1 Tablet:overflow-hidden">
                        <div className="Tablet:w-1/3 mb-6 Tablet:mb-0">
                            <p className="text-2xl FHD:text-3xl font-bold mb-4 text-primary">Ingredients</p>
                            {data?.extendedIngredients && <ul className="pl-4 flex flex-col items-center Tablet:items-start gap-2">
                                {
                                    data?.extendedIngredients.map((ingredient: ExtendedIngredient) => {
                                        return <li className="text-base HD:text-lg FHD:text-xl" key={ingredient.id}><span className="text-base">🍴</span> {ingredient.name}</li>
                                    })
                                }
                            </ul>}
                            {!data?.extendedIngredients && <p className="text-lg">There is no information on Ingredients</p>}
                            
                        </div>
                        <div className="Tablet:w-2/3 h-full flex overflow-auto">
                            {data?.analyzedInstructions[0].steps && <div className="flex flex-col gap-4">
                                <p className="text-2xl FHD:text-3xl font-bold text-primary">Preparation</p>
                                {
                                    data?.analyzedInstructions[0].steps.map((step: StepInterface) => {
                                        return <Step key={step.number} text={step.step} number={step.number}></Step>
                                    })
                                }                        
                            </div>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )    
}