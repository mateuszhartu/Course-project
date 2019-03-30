import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasChosen = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is description of test recipe',
      'https://blog.hubspot.com/hubfs/image8-2.jpg'),
    new Recipe('Test recipe 2', 'This is description of test 2 recipe',
      'https://blog.hubspot.com/hubfs/image8-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeChosen(recipe: Recipe) {
    this.recipeWasChosen.emit(recipe);
  }

}
