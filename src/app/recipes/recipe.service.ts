import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test recipe',
      'This is description of test recipe',
      'https://blog.hubspot.com/hubfs/image8-2.jpg',
      [
                  new Ingredient('coś1', 5),
                  new Ingredient('coś2', 6)
                ]),
    new Recipe('Test recipe 2',
      'This is description of test 2 recipe',
      'https://blog.hubspot.com/hubfs/image8-2.jpg',
      [
                  new Ingredient('coś3', 1),
                  new Ingredient('coś4', 8),
                  new Ingredient('coś5', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
