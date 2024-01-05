import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingridients = this.slService.ingridients;
    console.log(this.ingridients);
  }
  public IngredientAdder(ing: Ingridient) {
    this.slService.IngredientAddeR(ing);
  }
}
