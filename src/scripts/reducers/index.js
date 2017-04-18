import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './users-reducer';

const allReducers = combineReducers({
  users: usersReducer,
  router: routerReducer,
});

export default allReducers;
