export function addUser() {
  return { type: 'ADD_USER' };
}

export function removeUser(index) {
  return { type: 'REMOVE_USER', payload: index };
}
