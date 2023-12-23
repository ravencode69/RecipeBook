import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('Apples', 10),
    new Ingridient('Vamila extract', 1),
  ];

  IngredientAdder(ing:Ingridient)
  {
    this.ingridients.push(ing);
    console.log(this.ingridients);
  }
  constructor() {}

  ngOnInit(): void {}
}
