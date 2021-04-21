import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import HomePage from "./component/Home/home";
import LoginPage from "./component/Login/loginPage";

// import App from './component/App/App';

// import Timer from "./component/Timer";
// import connect from "react-redux/lib/connect/connect";
// import {push} from "connected-react-router";
// import { BrowserRouter as Router, BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import loginButton from "./component/loginButton"
// import {changeLogin, changePage, changeUsername} from "./redux/actions/actions";
// import {createStore, combineReducers} from 'redux';
// import allReducers from "./redux/reducer"
// import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={ HomePage }>
        <Route path="/loginPage" component={ LoginPage } />
      </Route>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
