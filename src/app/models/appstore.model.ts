import { Item } from './item.model';
import { postModel } from './post.model';

export interface AppStore {
  items: Item[];
  selectedItem: Item;
  post: postModel;
};