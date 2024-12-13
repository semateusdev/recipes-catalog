import { useEffect, useState } from "react";
import { Step } from "./Step";
import { useParams } from "react-router-dom";
import { ExtendedIngredient, Recipe, StepInterface } from "../interfaces/Recipe";
import axios from "axios";

export function RecipesDetail() {

    const { id } = useParams();
    const [data, setData] = useState<Recipe>();
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
         axios.get<Recipe>(`https://api.spoonacular.com/recipes/${id}/information?apiKey=88a9c0789b854150aaa26af3b744c69e`)
            .then(resp => {
                setData(resp.data);
                setSummary(deleteElementsInText(resp.data.summary))
            });
    }, []);

    


    return (
        <section className="flex h-full">
            <img src={data?.image} alt="" className="w-1/3 h-full object-cover" />
            <div className="flex-1 flex flex-col gap-4 py-4 px-8 h-full">
                <p className="text-5xl text-center font-bold text-primary">{data?.title}</p>
                <p className="text-xl text-center">{summary}</p>

                <div className="flex px-6 flex-1 overflow-auto">
                    <div className="w-1/3">
                        <p className="text-3xl font-bold mb-4 text-primary">Ingredientes</p>
                        {data?.extendedIngredients && <ul className="pl-4">
                            {
                                data?.extendedIngredients.map((ingredient: ExtendedIngredient) => {
                                    return <li className="text-xl" key={ingredient.id}><span className="text-base">🍴</span> {ingredient.name}</li>
                                })
                            }
                        </ul>}
                        {!data?.extendedIngredients && <p className="text-lg">No hay información de Ingredientes</p>}
                        
                    </div>
                    <div className="w-2/3 h-full flex overflow-auto">
                        {data?.analyzedInstructions[0].steps && <div className="flex flex-col gap-4">
                            <p className="text-3xl font-bold text-primary">Preparación</p>
                            {
                                data?.analyzedInstructions[0].steps.map((step: StepInterface) => {
                                    return <Step key={step.number} text={step.step} number={step.number}></Step>
                                })
                            }                        
                        </div>}
                        
                    </div>
                </div>
            </div>
        </section>
    )    
}