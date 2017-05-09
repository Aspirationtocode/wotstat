import assign from 'object-assign';

import {
  ADD_SEARCH_PLAYERS,
  CLEAR_SEARCH_PLAYERS,
  START_FETCHING_SEARCH_PLAYERS,
} from '../constants';

const initialState = {
  fetched: false,
  fetching: false,
  data: [],
  error: null,
};

const searchPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_PLAYERS: {
      return assign({}, state, { fetched: true, fetching: false, data: action.payload });
    }
    case START_FETCHING_SEARCH_PLAYERS: {
      return assign({}, state, { fetching: true });
    }
    case CLEAR_SEARCH_PLAYERS: {
      return assign({}, state, { fetched: false, data: [] });
    }
    default: {
      return state;
    }
  }
};

export default searchPlayersReducer;
