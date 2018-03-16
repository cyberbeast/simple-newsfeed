import { NewsfeedItem } from './../../models/newsfeedItem.model';
import { InitialState } from '@ngrx/store/src/models';
import * as newsFeedItemActions from '../actions/newsfeedItem.actions';

export interface NewsfeedState {
  entities: {
    [id: string]: NewsfeedItem;
  };
  // currentNewsfeed: NewsfeedItem[];
}

export const initialState: NewsfeedState = {
  entities: {}
  // currentNewsfeed: []
};

export function reducer(
  state = initialState,
  action: newsFeedItemActions.NewsfeedItemActions
): NewsfeedState {
  switch (action.type) {
    case newsFeedItemActions.FETCH_NEWSFEED: {
      return {
        ...state
      };
    }

    case newsFeedItemActions.FETCH_NEWSFEED_SUCCESS: {
      const data = action.payload;
      const entities = data.reduce(
        (
          entities: { [id: string]: NewsfeedItem },
          newsfeedItem: NewsfeedItem
        ) => {
          return {
            ...entities,
            [newsfeedItem.objectId]: newsfeedItem
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        entities
      };
    }

    case newsFeedItemActions.FETCH_NEWSFEED_FAIL: {
      return {
        ...state
      };
    }

    case newsFeedItemActions.CREATE_NEWS_ITEM_SUCCESS: {
      const newsFeedItem = action.payload;
      const entities = {
        ...state.entities,
        [newsFeedItem.objectId]: newsFeedItem
      };

      return {
        ...state,
        entities
      };
    }
  }
  return state;
}

export const getCurrentNewsfeedEntities = (state: NewsfeedState) =>
  state.entities;
