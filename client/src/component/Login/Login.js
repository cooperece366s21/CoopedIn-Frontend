<<<<<<< HEAD
/**
 * todo: create separate directory to make a POST request to server
 * currently directly part of the component
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "./Login.css"

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST', 
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username, 
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={ handleSubmit }>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>

                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
=======
import React from "react";
import "./Login.scss";
export class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="base-container">
                <div className = "header">Login</div>
                <div className = "content">
                    <div className = "form">
                        <div className ="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name = "username" placeholder = "Username"/>
                        </div>
                        <div className ="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name = "password" placeholder = "Password"/>
                        </div>
                    </div>
                </div>
                <div className = "footer">
                    <button type ="button" className ="btn">
                        Login
                    </button>
                </div>
            </div>
        )
    }
};

export default Login;
>>>>>>> bbea7cda55e59d6a30728ff186d1ff493558ded5
