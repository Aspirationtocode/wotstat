import random from 'random-name';
import assign from 'object-assign';
import shortid from 'shortid';
import database from '../database';
import { FETCH_USERS_DATA, ADD_USER, REMOVE_USER } from '../constants';

const initialState = {
  fetched: false,
  data: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_DATA: {
      return assign({}, state, { fetched: true, data: action.payload });
    }
    case ADD_USER: {
      const newUsers = [
        ...state.data,
        { fname: random.first(), lname: random.last(), id: shortid.generate() },
      ];
      database.uploadUsers(newUsers);
      return assign({}, state, {
        data: newUsers,
      });
    }
    case REMOVE_USER: {
      const index = action.payload;
      const newUsers = [...state.data];
      newUsers.splice(index, 1);
      database.uploadUsers(newUsers);
      return assign({}, state, { data: newUsers });
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
