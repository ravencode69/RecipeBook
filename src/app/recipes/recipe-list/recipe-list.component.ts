import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
