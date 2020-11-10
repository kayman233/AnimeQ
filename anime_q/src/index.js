import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers'

import App from './components/App.js';
import getState from "./utils/init";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

const storage = localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : getState();

console.log("storage");
console.log(storage);
localStorage.setItem('data', JSON.stringify(storage));
console.log("localStorage");
console.log(JSON.parse(localStorage.getItem('data')));

const store = createStore(
    reducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
);

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
