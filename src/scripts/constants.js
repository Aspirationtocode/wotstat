export const applicationId = 'a50973348ac3d507239a72fd55e68075';
export const ADD_SEARCH_PLAYER = 'ADD_SEARCH_PLAYER';
export const CLEAR_SEARCH_PLAYERS = 'CLEAR_SEARCH_PLAYERS';

export function roundNumber(x, n) {
  if (isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10, n);
  return Math.round(x * m) / m;
}
