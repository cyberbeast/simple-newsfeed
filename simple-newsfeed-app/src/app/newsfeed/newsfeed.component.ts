import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromStore from './../store';

import { NewsfeedItem } from './../models/newsfeedItem.model';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  newsfeed$: Observable<NewsfeedItem[]>;
  constructor(private store: Store<fromStore.AppState>) {
    this.newsfeed$ = store.select(fromStore.getCurrentNewsfeed);
  }

  onCreate(text: string, publicationDate: string) {
    this.store.dispatch(
      new fromStore.CreateNewsItem({
        text: text,
        publicationDate: new Date(publicationDate).toISOString()
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.FetchNewsfeed());
  }
}
