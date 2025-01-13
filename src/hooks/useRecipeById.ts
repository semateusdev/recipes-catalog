import { useEffect, useState } from "react";
import { DetailRecipe } from "../interfaces/Recipe";
import { formatTextAPI } from "../utils/formatText";
import { recipesService } from "../services/recipes.service";

export function useRecipeById(id: string) {

    const [data, setData] = useState<DetailRecipe>();
    const [summary, setSummary] = useState<string>();

    useEffect(() => {
        const fecthData = async () => {
            const resp = await recipesService.getRecipeById(id);
            setData(resp);
            setSummary(formatTextAPI(resp.summary));
            console.log('FETCH');
        }
        if (id)
            fecthData();
    }, [id])
    return {data, summary};
}