import {
  Component,
  OnInit,
  EventEmitter,
  ViewChild,
  ElementRef,
  Output,
} from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  numberI: number;
  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef<HTMLInputElement>;
  // @Output() IngredientEl=new EventEmitter<Ingridient>();

  addToIngredientList() {
    const ingName = this.nameInputRef.nativeElement.value;
    const newIng = new Ingridient(ingName, this.numberI);
    this.slService.IngredientAddeR(newIng);
    // this.IngredientEl.emit(newIng);
    console.log(newIng.amount);
  }

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}
}
