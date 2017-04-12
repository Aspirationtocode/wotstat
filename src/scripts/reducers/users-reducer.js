import random from 'random-name';

const initialState = {
  fetched: false,
  data: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_DATA_START': {
      return {
        fetched: false,
        data: [],
        error: null,
      };
    }
    case 'FETCH_USERS_DATA_FINISH': {
      return {
        fetched: true,
        data: action.payload,
        error: null,
      };
    }
    case 'ADD_USER': {
      const newData = state.data.concat({
        fname: random.first(),
        lname: random.last(),
      });
      return {
        fetched: true,
        data: newData,
        error: null,
      };
    }
    case 'REMOVE_USER': {
      const index = action.payload;
      let newUsers = state.data.concat();
      newUsers.splice(index, 1);
      return {
        fetched: true,
        data: newUsers,
        error: null,
      };
    }
  }
  return state;
};

export default usersReducer;
