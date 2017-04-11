import random from 'random-name';

const usersReducer = (state = ['Peter', 'Kolya'], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return [...state, random.first()];
    }
    case 'REMOVE_USER': {
      const index = action.payload;
      let newState = state.concat();
      newState.splice(index, 1);
      return newState;
    }
  }
  return state;
};

export default usersReducer;
