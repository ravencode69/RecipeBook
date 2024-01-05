import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetailHere: Recipe;
  constructor(private resService: RecipeService) {}

  ngOnInit(): void {}
  onAddToShoppingList1() {
    this.resService.onAddToShoppingList(this.recipeDetailHere.ingList);
    console.log(this.recipeDetailHere.ingList);
  }
}
