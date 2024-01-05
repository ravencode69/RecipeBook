import { Ingridient } from '../shared/ingridient.model';
export class ShoppingListService {
  ingridients: Ingridient[] = [
    new Ingridient('Apples', 10),
    new Ingridient('Vamila extract', 1),
  ];
  public IngredientAddeR(ing: Ingridient) {
    this.ingridients.push(ing);
    //console.log(this.ingridients);
  }
}
