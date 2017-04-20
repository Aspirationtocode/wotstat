import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './users-reducer';
import currentUserReducer from './current-user-reducer';

const allReducers = combineReducers({
  users: usersReducer,
  currentUserId: currentUserReducer,
  router: routerReducer,
});

export default allReducers;
