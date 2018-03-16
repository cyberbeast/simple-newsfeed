import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromNewsfeed from './newsfeedItem.reducer';

export interface AppState {
  currentNewsfeed: fromNewsfeed.NewsfeedState;
}

export const reducers: ActionReducerMap<AppState> = {
  currentNewsfeed: fromNewsfeed.reducer
};

export const getAppState = createFeatureSelector<AppState>('app');

// newsfeed state
export const getCurrentNewsfeedState = createSelector(
  getAppState,
  (state: AppState) => state.currentNewsfeed
);

// get current newsfeed entities
export const getCurrentNewsfeedEntities = createSelector(
  getCurrentNewsfeedState,
  fromNewsfeed.getCurrentNewsfeedEntities
);

//
export const getCurrentNewsfeed = createSelector(
  getCurrentNewsfeedEntities,
  entities => {
    return Object.keys(entities)
      .map(id => entities[id])
      .sort((a, b) => {
        return (
          -1 *
          (new Date(a.publicationDate).getTime() -
            new Date(b.publicationDate).getTime())
        );
      });
  }
);
