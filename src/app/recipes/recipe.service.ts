//Managing recepies service
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Apple pie',
      'This is a test recipe',
      'https://littlespoonfarm.com/wp-content/uploads/2021/08/Easy-apple-pie-recipe.jpg',
      [new Ingridient('Apple', 4), new Ingridient('Milk', 1)]
    ),
    new Recipe(
      'Shepherds pie',
      'This is a test recipe',
      'https://www.thespruceeats.com/thmb/ZnkvdV1-xq0LinApte9O204qFhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-vegetarian-shepherds-pie-recipe-3377074-step-08-553f66503ab940fe9029a5834085472f.jpg',
      [new Ingridient('Peach', 2), new Ingridient('Cream', 1)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  public getRecipies() {
    return this.recipes.slice();
  }

  onAddToShoppingList(ings: Ingridient[]) {
    this.slService.arryOfIngAdder(ings);
  }
}
