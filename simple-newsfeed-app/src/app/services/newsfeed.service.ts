import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { NewsfeedItem } from './../models/newsfeedItem.model';

@Injectable()
export class NewsfeedService {
  constructor(private http: HttpClient) {}

  fetchNewsfeed(): Observable<any> {
    return this.http
      .get<any>('/newsItems')
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createNewsfeedItem(newsfeedItem: Object): Observable<any> {
    return this.http
      .post<any>('/newsItems', newsfeedItem)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
