import React from "react";
//import logo from './logo.svg';
import LoginPage from "./component/Login/loginPage";
import RegisterPage from "./component/Login/registerPage"
import HomePage from "./component/home";
import UserPage from "./component/userPage"
//import {connect} from "react-redux";
//import activePage from "store";
import {BrowserRouter, Route, Switch} from "react-router-dom";

//import changePage from "./redux/actions/actions";

function App(){


    return (
        <div className="wrapper">

            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component= { HomePage } />

                    <Route path="/loginPage">
                        <LoginPage />
                    </Route>
                    <Route path="/userPage">
                        <UserPage />
                    </Route>
                    <Route path="/registerPage">
                        <RegisterPage />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

