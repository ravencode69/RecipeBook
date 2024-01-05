//Managing recepies service
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Apple pie',
      'This is a test recipe',
      'https://littlespoonfarm.com/wp-content/uploads/2021/08/Easy-apple-pie-recipe.jpg'
    ),
    new Recipe(
      'Shepherds pie',
      'This is a test recipe',
      'https://www.thespruceeats.com/thmb/ZnkvdV1-xq0LinApte9O204qFhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-vegetarian-shepherds-pie-recipe-3377074-step-08-553f66503ab940fe9029a5834085472f.jpg'
    ),
  ];

  public getRecipies() {
    return this.recipes.slice();
  }
}
