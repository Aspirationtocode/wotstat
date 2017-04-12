import axios from 'axios';
import { USERS_URL } from './constants';

export const addUser = () => ({ type: 'ADD_USER', payload: 'Имя' });

export const removeUser = index => ({ type: 'REMOVE_USER', payload: index });

export function fetchUsers(dispatch) {
  return (dispatch) => {
    axios.get(USERS_URL).then((response) => {
      dispatch({ type: 'FETCH_USERS_DATA', payload: response.data.users });
    });
  };
}
