import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React, { Component } from 'react'
import { Button } from 'react-native'
class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello, Learner.Welcome to GeeksforGeeks.</h1>
            </div>

        );
    }
}
export default Test
// <Link to="/signup" className="btn btn-primary">Sign up</Link>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
