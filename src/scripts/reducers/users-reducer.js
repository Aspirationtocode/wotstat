import random from 'random-name';
import assign from 'object-assign';

const initialState = {
  fetched: false,
  data: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_DATA': {
      return assign({}, state, { fetched: true, data: action.payload });
    }
    case 'ADD_USER': {
      return assign({}, state, {
        data: [...state.data, { fname: random.first(), lname: random.last() }],
      });
    }
    case 'REMOVE_USER': {
      const index = action.payload;
      let newUsers = [...state.data];
      newUsers.splice(index, 1);
      return assign({}, state, { data: newUsers });
    }
  }
  return state;
};

export default usersReducer;
