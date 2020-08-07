import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore , applyMiddleware, combineReducers } from 'redux';
import './index.css';
import {createLogger} from 'redux-logger'
import App from './containers/App.js'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

    const rootReducer = combineReducers({ searchRobots , requestRobots})
    const logger = createLogger();
    const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
