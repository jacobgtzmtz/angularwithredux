import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from '../../models/appstore.model';

import { postModel } from '../../models/post.model';

import * as PostActions from '../../actions/post.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent {
  post: Observable<postModel>;
  text: string;

  constructor(private store: Store<AppStore>) {
    this.post = this.store.select('post');
   }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.text = '';
    this.store.dispatch(new PostActions.Reset());
  }

  upVote() {
    this.store.dispatch(new PostActions.UpVote());
  }

  downvote() {
    this.store.dispatch(new PostActions.DownVote());
  }

}
