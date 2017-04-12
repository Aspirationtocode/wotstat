import axios from 'axios';

export function addUser() {
  return { type: 'ADD_USER', payload: 'Имя' };
}

export function removeUser(index) {
  return { type: 'REMOVE_USER', payload: index };
}

export function fetchUsers(dispatch) {
  dispatch({ type: 'FETCH_USERS_DATA_START' });
  return (dispatch) => {
    axios.get('http://aspirationtocode.github.io/json-examples/company.json').then((response) => {
      dispatch({ type: 'FETCH_USERS_DATA_FINISH', payload: response.data.users });
    });
  };
}
