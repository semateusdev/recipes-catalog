import axios from "axios";
import { DetailRecipe, Recipe } from "../interfaces/Recipe";
import { recipesMock } from "../data/recipes-mock";

export const recipesService = {

    API_KEY1: '88a9c0789b854150aaa26af3b744c69e',
    API_KEY2: '35c9a8b8be1e499d826bfba158264428',
    API_BASE: 'https://api.spoonacular.com',

    async getRecipes(maxReadyTime?: number, type?: string, titleMatch?: string) {
        try {
            const resp = await axios.get<{results: Recipe[]}>(
                `${this.API_BASE}/recipes/complexSearch?apiKey=${this.API_KEY1}&offset=0&number=20`,
                {params: {maxReadyTime, type, titleMatch}}
            )
            return resp.data.results;
        } catch (error) {
            //console.error(error);
            return recipesMock;
        }
    },

    async getRecipeById(id: string) {
        try {
            const resp = await axios.get<DetailRecipe>(`${this.API_BASE}/recipes/${id}/information?apiKey=${this.API_KEY1}`)
            return resp.data;
        } catch (error) {
            //console.error(error);
            return recipesMock[0];
        }
    }
}