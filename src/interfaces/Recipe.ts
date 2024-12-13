export interface Recipe {
    id: number;
    title: string;
    readyInMinutes: number;
    image: string;
    summary: string;
    dishTypes: string[];
    analyzedInstructions: AnalyzedInstruction[];
    extendedIngredients: ExtendedIngredient[];
}

export interface AnalyzedInstruction {
    name:  string;
    steps: StepInterface[];
}

export interface StepInterface {
    number:      number;
    step:        string;
    ingredients: Ent[];
    equipment:   Ent[];
    length?: {
        number: number,
        unit: string
    }
}

export interface Ent {
    id:            number;
    name:          string;
    localizedName: string;
    image:         string;
}
export interface ExtendedIngredient {
    id:           number;
    aisle:        string;
    image:        string;
    consistency:  Consistency;
    name:         string;
    nameClean:    string;
    original:     string;
    originalName: string;
    amount:       number;
    unit:         string;
    meta:         string[];
    measures:     Measures;
}

export enum Consistency {
    Liquid = "LIQUID",
    Solid = "SOLID",
}

export interface Measures {
    us:     Metric;
    metric: Metric;
}

export interface Metric {
    amount:    number;
    unitShort: string;
    unitLong:  string;
}
