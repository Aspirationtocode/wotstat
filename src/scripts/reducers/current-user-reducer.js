import assign from 'object-assign';
import { CHANGE_CURRENT_USER_ID } from '../constants';

const initialState = null;

const currentUserReducer = (state = initialState, action) => {
  if (action.type === CHANGE_CURRENT_USER_ID) {
    return action.payload;
  }
  return state;
};

export default currentUserReducer;
