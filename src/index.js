/*import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./Reducers/AllReducers";
import { Provider } from "react-redux";
*/
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from "./Reducers/AllReducers";
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'


/*
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
*/
/*
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
*/
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider >
)
/*createRoot(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
) */
reportWebVitals()
