import { applicationId } from './constants';
export default {
  fetchPlayers(query) {
    return fetch(
      `https://api.worldoftanks.ru/wot/account/list/?application_id=${applicationId}&search=${query}`,
    );
  },
};
// export default {
//   fetchPlayers(query) {
//     fetch(
//       `https://api.worldoftanks.ru/wot/account/list/?application_id=${applicationId}&search=${query}`,
//     )
//       .then(res => res.json())
//       .then((payload) => {
//         payload.data.forEach((player) => {
//           fetch(
//             `https://api.worldoftanks.ru/wot/account/info/?application_id=${applicationId}&account_id=${player.account_id}`,
//           )
//             .then(res => res.json())
//             .then((payload) => {
//               console.log(payload);
//             });
//         });
//       });
//   },
// };
