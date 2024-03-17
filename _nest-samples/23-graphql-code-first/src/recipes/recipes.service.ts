import { Injectable } from "@nestjs/common";
import { NewRecipeInput } from "./dto/new-recipe.input";
import { RecipesArgs } from "./dto/recipes.args";
import { Recipe } from "./models/recipe.model";

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  private recipes: Recipe[] = [
    {
      id: "1",
      title: "First",
      description: "First recipe",
      creationDate: new Date(),
      ingredients: ["Banana", "Ice"],
    },
    {
      id: "2",
      title: "Second",
      description: "Second recipe",
      creationDate: new Date(),
      ingredients: ["Banana", "Ice"],
    },
    {
      id: "3",
      title: "Third",
      description: "Third recipe",
      creationDate: new Date(),
      ingredients: ["Banana", "Ice"],
    },
    {
      id: "4",
      title: "Fourth",
      description: "Fourth recipe",
      creationDate: new Date(),
      ingredients: ["Banana", "Ice"],
    },
    {
      id: "5",
      title: "Fifth",
      description: "Fifth recipe",
      creationDate: new Date(),
      ingredients: ["Banana", "Ice"],
    },
    {
      id: "6",
      title: "Six",
      description: "Six recipe",
      creationDate: new Date(),
      ingredients: ["Banana", "Ice"],
    },
  ];

  async create(data: NewRecipeInput): Promise<Recipe> {
    const recipe: Recipe = { 
        id: this.recipes.length.toString(),
        ...data, 
        ingredients: [],
        creationDate: new Date()
      }
    this.recipes.push(recipe)
    return recipe
  }

  async findOneById(id: string): Promise<Recipe> {
    return this.recipes.find(recipe => recipe.id === id)
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipes
  }

  async remove(id: string): Promise<boolean> {
    const recipe: Recipe = this.recipes.find(recipe => recipe.id === id)
    if (!recipe) return false
    this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    return true;
  }
}
