import database from './database';
import { FETCH_USERS_DATA, ADD_USER, REMOVE_USER } from './constants';

export const addUser = () => ({ type: ADD_USER });

export const removeUser = index => ({ type: REMOVE_USER, payload: index });

export function fetchUsers(dispatch) {
  return () => {
    database.fetchUsers().then((snapshot) => {
      const payload = snapshot.val() || [];
      dispatch({ type: FETCH_USERS_DATA, payload });
    });
  };
}
