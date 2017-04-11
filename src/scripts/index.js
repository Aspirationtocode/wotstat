import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import App from './components/App';
import '../index.html';
import '../styles/main.styl';
import allReducers from './reducers';

const middleware = applyMiddleware(logger);

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware,
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
