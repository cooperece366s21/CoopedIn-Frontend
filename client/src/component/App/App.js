import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from '../Home/home'
import LoginPage from '../Login/loginPage'
import RegisterPage from '../Login/registerPage'
import Login from '../Login/Login';
import useToken from './useToken'

function App() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component= { HomePage } />
                    
                    <Route path="/loginPage">
                        <LoginPage />
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
