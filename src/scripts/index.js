import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, IndexRedirect, Switch } from 'react-router';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import '../index.html';
import '../styles/main.styl';
import StartPage from './containers/StartPage';

import allReducers from './reducers';

const history = createHistory();

const routerMid = routerMiddleware(history);

const middleware = applyMiddleware(thunk, routerMid);

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware,
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
