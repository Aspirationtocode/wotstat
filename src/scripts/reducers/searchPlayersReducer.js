import assign from 'object-assign';

import { ADD_SEARCH_PLAYER, CLEAR_SEARCH_PLAYERS } from '../constants';

const initialState = {
  fetched: false,
  data: [],
  error: null,
};

const searchPlayersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_PLAYER: {
      return assign({}, state, { fetched: true, data: [...state.data, action.payload] });
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
