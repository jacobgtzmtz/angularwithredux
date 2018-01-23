import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../models/item.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html'
})
export class ItemDetailsComponent {

  originalName: string;
  selectedItem: Item;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set item(value: Item){
    if (value) this.originalName = value.name;
    this.selectedItem = Object.assign({}, value);
  }

}
