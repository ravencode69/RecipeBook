import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Output() featurePassed=new EventEmitter<string>();
  onClickHandle(feature:string)
  {
    this.featurePassed.emit(feature);
  }
}
