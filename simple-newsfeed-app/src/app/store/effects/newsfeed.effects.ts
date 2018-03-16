import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import * as allActions from '../actions/';
import * as fromServices from '../../services';

@Injectable()
export class NewsfeedEffects {
  constructor(
    private actions$: Actions,
    private newsfeedService: fromServices.NewsfeedService
  ) {}

  @Effect()
  fetchNewsfeed$ = this.actions$.ofType(allActions.FETCH_NEWSFEED).pipe(
    switchMap((action: allActions.NewsfeedItemActions) => {
      return this.newsfeedService.fetchNewsfeed().pipe(
        map(response => {
          if (response.status === 'SUCCESS')
            return new allActions.FetchNewsfeedSuccess(response.data);
          return new allActions.FetchNewsfeedFail(response.status);
        }),
        catchError(error => of(new allActions.FetchNewsfeedFail(error)))
      );
    })
  );

  @Effect()
  createNewsfeedItem$ = this.actions$.ofType(allActions.CREATE_NEWS_ITEM).pipe(
    map((action: allActions.CreateNewsItem) => action.payload),
    switchMap(newsFeedItem => {
      return this.newsfeedService.createNewsfeedItem(newsFeedItem).pipe(
        map(response => {
          if (response.status === 'SUCCESS')
            return new allActions.CreateNewsItemSuccess(response.data);
          return new allActions.CreateNewsItemFail(response.status);
        }),
        catchError(error => of(new allActions.CreateNewsItemFail(error)))
      );
    })
  );
}
