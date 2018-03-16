import { Action } from '@ngrx/store';

import { NewsfeedItem } from '../../models/newsfeedItem.model';

export const FETCH_NEWSFEED = '[Newsfeed Item] Fetch All';
export const FETCH_NEWSFEED_SUCCESS = '[Newsfeed Item] Fetch All - Success';
export const FETCH_NEWSFEED_FAIL = '[Newsfeed Item] Fetch All - Fail';

export class FetchNewsfeed implements Action {
  readonly type = FETCH_NEWSFEED;
  constructor() {}
}

export class FetchNewsfeedSuccess implements Action {
  readonly type = FETCH_NEWSFEED_SUCCESS;
  constructor(public payload: NewsfeedItem[]) {}
}

export class FetchNewsfeedFail implements Action {
  readonly type = FETCH_NEWSFEED_FAIL;
  constructor(public payload: any) {}
}

export const CREATE_NEWS_ITEM = '[Newsfeed Item] Create';
export const CREATE_NEWS_ITEM_SUCCESS = '[Newsfeed Item] Create - Success';
export const CREATE_NEWS_ITEM_FAIL = '[Newsfeed Item] Create - Fail';

export class CreateNewsItem implements Action {
  readonly type = CREATE_NEWS_ITEM;
  constructor(public payload: NewsfeedItem) {}
}

export class CreateNewsItemSuccess implements Action {
  readonly type = CREATE_NEWS_ITEM_SUCCESS;
  constructor(public payload: NewsfeedItem) {}
}

export class CreateNewsItemFail implements Action {
  readonly type = CREATE_NEWS_ITEM;
  constructor(public payload: any) {}
}

// Newsfeed Item action types
export type NewsfeedItemActions =
  | FetchNewsfeed
  | FetchNewsfeedSuccess
  | FetchNewsfeedFail
  | CreateNewsItem
  | CreateNewsItemSuccess
  | CreateNewsItemFail;
