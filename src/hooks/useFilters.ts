import { useState } from "react";
import { DishTypes } from "../interfaces/Recipe";
import { RecipesFilters } from "../interfaces/Recipes-fIlters.interface";

export function useFilters() {

    const [type, setType] = useState<DishTypes>();
    const [time, setTime] = useState<number>();

    const setFilters = (filter: RecipesFilters)  => {
        const idType = filter.categories.find(item => item.active);    
        const time = filter.time.find(item => item.active);
        
        if(idType)
            setType(idType.id as DishTypes);
        if(time)
            setTime(time.id as number);
    }

    return {type, time, setFilters}
}