import { Link } from "react-router-dom";
import { SelectableList } from "./Selectable-list";
import { Item } from "../interfaces/Item";
import { DishTypes } from "../interfaces/Recipe";
import { useState } from "react";
import { RecipesFilters } from "../interfaces/Recipes-fIlters.interface";

export function Aside({ changeFilters }: {changeFilters: (filter: RecipesFilters) => void}) {

    const categories: Item[] = [
        {id: '-', name: 'All types', icon: '/all.svg', active: true}, 
        {id: DishTypes.DRINKS, name: 'Drinks', icon: '/drink.svg'}, 
        {id: DishTypes.BREAKFAST, name: 'Breakfast', icon: '/breakfast.svg'},
        {id: DishTypes.SALAD, name: 'Salad', icon: '/salad.svg'},
        {id: DishTypes.DESSERT, name: 'Dessert', icon: '/dessert.svg'},
        {id: DishTypes.MAIN_COURSE, name: 'Main course', icon: '/main-course.svg'}, 
        {id: DishTypes.SNACKS, name: 'Snacks', icon: '/snacks.svg'},
    ];
    const times: Item[] = [
        {id: 15, name: '15 minutes', icon: '/time.svg'},
        {id: 20, name: '20 minutes', icon: '/time.svg'}, 
        {id: 30, name: '30 minutes', icon: '/time.svg'}, 
        {id: 60, name: '1 hour', icon: '/time.svg'},
        {id: 180, name: '2 hours', icon: '/time.svg', active: true},
    ]
    const [categoriesList, setCategoriesList] = useState<Item[]>(categories);
    const [timesList, setTimes] = useState<Item[]>(times);
    const [filters, setFilters] = useState<RecipesFilters>(
        {categories, time: times}
    );

    const changeTypesStatus = (id: DishTypes | number) => {
        const newList = [...categoriesList];
        newList.forEach(item => item.active = id === item.id);
        
        setCategoriesList(newList);
        updateFilters(newList, timesList);
    }

    const changeTimesStatus = (id: number | DishTypes) => {
        const newList = [...timesList];
        newList.forEach(item => item.active = id === item.id);
        setTimes(newList);
        updateFilters(categoriesList, newList);
    }

    const updateFilters = (categories: Item[], time: Item[]) => {
        setFilters({categories, time});
        changeFilters(filters)
    }

    return (
        <aside className="w-60 h-[98vh] my-[1vh] bg-[#f4f8ff] backdrop-blur-[15px] rounded-xl pb-4 py-8 flex flex-col items-center shadow-[0_0_15px_-5px] shadow-[#23262b]">
            <Link to='/'>
                <h1 className="font-bold text-primary cursor-pointer mx-2 text-4xl">🍲 Recetas</h1>
            </Link>
            <div className="flex-1 overflow-auto p-2 mt-4">
                <p className="text-xl font-bold text-primary mb-4">Dish types</p>
                <SelectableList list={categoriesList} selectedOption={changeTypesStatus} key="type"></SelectableList>
                <p className="text-xl font-bold text-primary mb-4 mt-8">Max preparation time</p>
                <SelectableList list={timesList} selectedOption={changeTimesStatus} key="time"></SelectableList>
            </div>
        </aside>
    )
}