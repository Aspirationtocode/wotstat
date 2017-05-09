import objectValues from 'object.values';
import {
  applicationId,
  ADD_SEARCH_PLAYERS,
  CLEAR_SEARCH_PLAYERS,
  START_FETCHING_SEARCH_PLAYERS,
  requestFieldDevider,
} from './constants';

export function fetchSearchPlayers(dispatch, query) {
  return () => {
    dispatch({ type: START_FETCHING_SEARCH_PLAYERS });
    fetch(
      `https://api.worldoftanks.ru/wot/account/list/?application_id=${applicationId}&search=${query}`,
    )
      .then(res => res.json())
      .then((payload) => {
        const PlayersIds = payload.data.map(player => player.account_id).join(requestFieldDevider);
        const fields = [
          'account_id',
          'global_rating',
          'nickname',
          'statistics.all.wins',
          'statistics.all.battles',
        ].join(requestFieldDevider);
        fetch(
          `https://api.worldoftanks.ru/wot/account/info/?application_id=${applicationId}&account_id=${PlayersIds}&fields=${fields}`,
        )
          .then(res => res.json())
          .then((players) => {
            const playersData = objectValues(players.data);
            dispatch({ type: ADD_SEARCH_PLAYERS, payload: playersData });
          });
      });
  };
}

export function clearSearchPlayers() {
  return { type: CLEAR_SEARCH_PLAYERS };
}
