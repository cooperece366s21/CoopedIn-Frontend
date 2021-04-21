import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./component/home";
import LoginPage from "./component/loginPage";
import App from './component/App/App';
import reportWebVitals from '../src/reportWebVitals';
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

ReactDOM.render(
    <Provider store = {store}>
        <React.StrictMode>
            <BrowserRouter>
                 <Route exact path="/" component = {HomePage}>
                    <Route path= "/loginPage" component ={LoginPage} />
                </Route>
             </BrowserRouter>
         <App />

  </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);



// export default Test
// <Link to="/signup" className="btn btn-primary">Sign up</Link>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//// <Route path ="app/homepage" component ={HomePage} />
//