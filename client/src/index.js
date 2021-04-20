import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
//import './index.css';
import App from './component/App/App';
//import reportWebVitals from './reportWebVitals';
=======
import HomePage from "./component/home";
import LoginPage from "./component/Login/loginPage";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from "./component/Timer";
import connect from "react-redux/lib/connect/connect";
import {push} from "connected-react-router";
import { BrowserRouter as Router, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import loginButton from "./component/loginButton"
import {changeLogin, changePage, changeUsername} from "./redux/actions/actions";
import {createStore, combineReducers} from 'redux';
import allReducers from "./redux/reducer"
//import LoginPage from "./loginPage";
import {Provider} from "react-redux";

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
>>>>>>> bbea7cda55e59d6a30728ff186d1ff493558ded5

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
