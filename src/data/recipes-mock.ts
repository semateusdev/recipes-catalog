import { Consistency, Recipe } from "../interfaces/Recipe";

export const recipesMock: Recipe[] = [
    {
        id: 664477,
        title: 'Vegan Pumpkin Bundt Cake',
        image: 'https://img.spoonacular.com/recipes/664477-556x370.jpg',
        readyInMinutes: 105,
        summary: 'Vegan Pumpkin Bundt Cake is a dairy free, lacto ovo vegetarian, and vegan dessert. For $1.01 per serving, this recipe covers 13% of your daily requirements of vitamins and minerals. This recipe makes 18 servings with 245 calories, 5g of protein, and 8g of fat each. This recipe from Foodista requires canolan oil, soymilk, golden raisins, and barley flour. 4 people have made this recipe and would make it again. From preparation to the plate, this recipe takes roughly 1 hour and 45 minutes. With a spoonacular score of 47%, this dish is solid. Similar recipes are Pumpkin Bundt Cake with Pumpkin Glaze, and Pumpkin Bundt Cake.',
        dishTypes: ['dessert'],
        extendedIngredients: [
            {
                "id": 2048,
                "aisle": "Oil, Vinegar, Salad Dressing",
                "image": "apple-cider-vinegar.jpg",
                "consistency": Consistency.Liquid,
                "name": "apple cider vinegar",
                "nameClean": "apple cider vinegar",
                "original": "2 teaspoons apple cider vinegar",
                "originalName": "apple cider vinegar",
                "amount": 2,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                  "us": {
                    "amount": 2,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                  },
                  "metric": {
                    "amount": 2,
                    "unitShort": "tsps",
                    "unitLong": "teaspoons"
                  }
                }
            },
            {
                "id": 18369,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": Consistency.Solid,
                "name": "baking powder",
                "nameClean": "baking powder",
                "original": "2 teaspoons baking powder",
                "originalName": "baking powder",
                "amount": 2.0,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 18372,
                "aisle": "Baking",
                "image": "white-powder.jpg",
                "consistency": Consistency.Solid,
                "name": "baking soda",
                "nameClean": "baking soda",
                "original": "2 teaspoons baking soda",
                "originalName": "baking soda",
                "amount": 2.0,
                "unit": "teaspoons",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 20130,
                "aisle": "Baking",
                "image": "brown-flour.jpg",
                "consistency": Consistency.Solid,
                "name": "barley flour",
                "nameClean": "barley flour",
                "original": "3 1/2 cups barley flour",
                "originalName": "barley flour",
                "amount": 3.5,
                "unit": "cups",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 3.5,
                        "unitShort": "cups",
                        "unitLong": "cups"
                    },
                    "metric": {
                        "amount": 518.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },

        ],
        analyzedInstructions: [
            {
                name: '',
                steps: [
                    {
                      "number": 1,
                      "step": "Set the oven at 350 degrees.Oil the bundt pan and dust lightly with flour.",
                      "ingredients": [
                        {
                          "id": 20081,
                          "name": "all purpose flour",
                          "localizedName": "all purpose flour",
                          "image": "flour.png"
                        },
                        {
                          "id": 4582,
                          "name": "cooking oil",
                          "localizedName": "cooking oil",
                          "image": "vegetable-oil.jpg"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404748,
                          "name": "kugelhopf pan",
                          "localizedName": "kugelhopf pan",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/bundt-cake-pan.jpg"
                        },
                        {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                        }
                      ]
                    },
                    {
                      "number": 2,
                      "step": "Place pecans on a baking sheet, and toast for 10 minutes. Cool completely, and chop roughly.Cover raisins with boiling water, and let soak for 25 minutes.",
                      "ingredients": [
                        {
                          "id": 9299,
                          "name": "raisins",
                          "localizedName": "raisins",
                          "image": "raisins.jpg"
                        },
                        {
                          "id": 12142,
                          "name": "pecans",
                          "localizedName": "pecans",
                          "image": "https://spoonacular.com/cdn/ingredients_100x100/pecans.jpg"
                        },
                        {
                          "id": 0,
                          "name": "sandwich bread",
                          "localizedName": "sandwich bread",
                          "image": "white-bread.jpg"
                        },
                        {
                          "id": 14412,
                          "name": "water",
                          "localizedName": "water",
                          "image": "water.png"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404727,
                          "name": "baking sheet",
                          "localizedName": "baking sheet",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/baking-sheet.jpg"
                        }
                      ],
                      "length": {
                        "number": 35,
                        "unit": "minutes"
                      }
                    },
                    {
                      "number": 3,
                      "step": "Drain and set aside.In a bowl, whisk together pumpkin, oil, syrup, soymilk,    vinegar, and vanilla.In a large bowl, use a clean whisk to mix date sugar, flour, baking soda, baking powder, spices, and salt.Using a rubber spatula, fold the pumpkin mixture into the dry ingredients.When the dry ingredients are halfway incorporated, add the raisins and the chopped pecans.Continue folding just until the mixture comes together; do not overmix.",
                      "ingredients": [
                        {
                          "id": 10012142,
                          "name": "pecan pieces",
                          "localizedName": "pecan pieces",
                          "image": "pecans.jpg"
                        },
                        {
                          "id": 18369,
                          "name": "baking powder",
                          "localizedName": "baking powder",
                          "image": "white-powder.jpg"
                        },
                        {
                          "id": 18372,
                          "name": "baking soda",
                          "localizedName": "baking soda",
                          "image": "white-powder.jpg"
                        },
                        {
                          "id": 11422,
                          "name": "pumpkin",
                          "localizedName": "pumpkin",
                          "image": "pumpkin.png"
                        },
                        {
                          "id": 9299,
                          "name": "raisins",
                          "localizedName": "raisins",
                          "image": "raisins.jpg"
                        },
                        {
                          "id": 16223,
                          "name": "soymilk",
                          "localizedName": "soymilk",
                          "image": "soy-milk.jpg"
                        },
                        {
                          "id": 1052050,
                          "name": "vanilla",
                          "localizedName": "vanilla",
                          "image": "vanilla.jpg"
                        },
                        {
                          "id": 2053,
                          "name": "vinegar",
                          "localizedName": "vinegar",
                          "image": "vinegar-(white).jpg"
                        },
                        {
                          "id": 2035,
                          "name": "spices",
                          "localizedName": "spices",
                          "image": "spices.png"
                        },
                        {
                          "id": 20081,
                          "name": "all purpose flour",
                          "localizedName": "all purpose flour",
                          "image": "flour.png"
                        },
                        {
                          "id": 19335,
                          "name": "sugar",
                          "localizedName": "sugar",
                          "image": "sugar-in-bowl.png"
                        },
                        {
                          "id": 0,
                          "name": "syrup",
                          "localizedName": "syrup",
                          "image": ""
                        },
                        {
                          "id": 9087,
                          "name": "dates",
                          "localizedName": "dates",
                          "image": "dates.jpg"
                        },
                        {
                          "id": 2047,
                          "name": "salt",
                          "localizedName": "salt",
                          "image": "salt.jpg"
                        },
                        {
                          "id": 4582,
                          "name": "cooking oil",
                          "localizedName": "cooking oil",
                          "image": "vegetable-oil.jpg"
                        }
                      ],
                      "equipment": [
                        {
                          "id": 404642,
                          "name": "spatula",
                          "localizedName": "spatula",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                        },
                        {
                          "id": 404661,
                          "name": "whisk",
                          "localizedName": "whisk",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/whisk.png"
                        },
                        {
                          "id": 404783,
                          "name": "bowl",
                          "localizedName": "bowl",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                        }
                      ]
                    },
                    {
                      "number": 4,
                      "step": "Pour batter into prepared pan.Smooth the top with a rubber spatula.",
                      "ingredients": [],
                      "equipment": [
                        {
                          "id": 404642,
                          "name": "spatula",
                          "localizedName": "spatula",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/spatula-or-turner.jpg"
                        },
                        {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                        }
                      ]
                    },
                    {
                      "number": 5,
                      "step": "Bake for 45 minutes, rotating the cake from front to back after 20 minutes, or until a toothpick inserted into the center comes out clean.Cool in the pan for 15 minutes.Invert the cake onto a wire rack, and continue cooling.",
                      "ingredients": [],
                      "equipment": [
                        {
                          "id": 404644,
                          "name": "toothpicks",
                          "localizedName": "toothpicks",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/toothpicks.jpg"
                        },
                        {
                          "id": 405900,
                          "name": "wire rack",
                          "localizedName": "wire rack",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/wire-rack.jpg"
                        },
                        {
                          "id": 404784,
                          "name": "oven",
                          "localizedName": "oven",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/oven.jpg"
                        },
                        {
                          "id": 404645,
                          "name": "frying pan",
                          "localizedName": "frying pan",
                          "image": "https://spoonacular.com/cdn/equipment_100x100/pan.png"
                        }
                      ],
                      "length": {
                        "number": 80,
                        "unit": "minutes"
                      }
                    },
                    {
                      "number": 6,
                      "step": "Transfer to a plate, and dust with powdered sugar.",
                      "ingredients": [
                        {
                          "id": 19336,
                          "name": "powdered sugar",
                          "localizedName": "powdered sugar",
                          "image": "powdered-sugar.jpg"
                        }
                      ],
                      "equipment": []
                    },
                    {
                      "number": 7,
                      "step": "Serve warm or at room temperature.",
                      "ingredients": [],
                      "equipment": []
                    }
                  ]
            }
        ]
    }
]