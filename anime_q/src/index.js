import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

import App from './components/App.js';

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
