import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ItemsService } from './services/items.service';
import { AppStore } from './models/appstore.model';
import { Item } from './models/item.model';
import { ItemsComponent} from './components/items/items.component'
import { ItemDetailsComponent } from './components/items/item-details/item-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService,
    private store: Store<AppStore>) {
    
    this.items = itemsService.items;
    this.selectedItem = store.select(state => state.selectedItem);
    this.selectedItem.subscribe(v => console.log(v));

    itemsService.loadItems();
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }

  selectItem(item: Item) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);
    this.resetItem();
  }

}
