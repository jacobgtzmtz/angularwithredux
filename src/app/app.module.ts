import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpModule } from '@angular/http';

import { postReducer } from './reducers/post.reducer';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { StoreDevtools } from '@ngrx/store-devtools/src/devtools';
import { ItemDetailsComponent } from './components/items/item-details/item-details.component';

import { ItemsService } from './services/items.service';
import { items, selectedItem } from './reducers/item.reducer';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    StoreModule.forRoot({
      items: items,
      selectedItem: selectedItem,
      post: postReducer
    })
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
