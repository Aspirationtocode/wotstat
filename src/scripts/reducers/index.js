import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import searchPlayersReducer from './searchPlayersReducer';

const allReducers = combineReducers({
  searchPlayers: searchPlayersReducer,
  router: routerReducer,
});

export default allReducers;
