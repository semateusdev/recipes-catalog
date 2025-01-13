import { Recipe } from "./Recipe";

export interface CardElement {
    id: number;
    name: string;
    image: string;
    isFavorite?: boolean;
    addFavorite?: (recipe: Recipe) => void;
}