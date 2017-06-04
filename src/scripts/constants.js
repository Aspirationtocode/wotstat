export const ADD_SEARCH_PLAYERS = 'ADD_SEARCH_PLAYERS';
export const CLEAR_SEARCH_PLAYERS = 'CLEAR_SEARCH_PLAYERS';
export const START_FETCHING_SEARCH_PLAYERS = 'START_FETCHING_SEARCH_PLAYERS';
export const requestFieldDevider = '%2C+';
export const applicationId = 'a50973348ac3d507239a72fd55e68075';

export const bindMethodsToComponent = (context, ...methods) => {
  methods.forEach((method) => {
    if (context[method]) {
      context[method] = context[method].bind(context);
    } else {
      throw new Error('No such method on Component');
    }
  });
};

export function roundNumber(x, n) {
  const m = 10 ** n;
  return Math.round(x * m) / m;
}
