import wot from './wot';
import { applicationId, ADD_SEARCH_PLAYER, CLEAR_SEARCH_PLAYERS } from './constants';

export function fetchSearchPlayers(dispatch, query) {
  return () => {
    fetch(
      `https://api.worldoftanks.ru/wot/account/list/?application_id=${applicationId}&search=${query}`,
    )
      .then(res => res.json())
      .then((payload) => {
        payload.data.forEach((player) => {
          fetch(
            `https://api.worldoftanks.ru/wot/account/info/?application_id=${applicationId}&account_id=${player.account_id}&fields=account_id%2C+global_rating%2C+nickname%2C+statistics.all.wins%2C+statistics.all.battles`,
          )
            .then(res => res.json())
            .then((payload) => {
              dispatch({ type: ADD_SEARCH_PLAYER, payload: payload.data[player.account_id] });
            });
        });
      });
  };
}

export function clearSearchPlayers() {
  return { type: CLEAR_SEARCH_PLAYERS };
}
