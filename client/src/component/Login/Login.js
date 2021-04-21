import React from "react";
import "./Login.scss";
import {withRouter} from "react-router-dom";
export class Login extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick = () => {
        this.props.history.push("/userPage");
        window.location.reload()
    };
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
                    <button type ="button" onClick={this.handleClick} className ="btn">
                        Login
                    </button>
                </div>
            </div>
        )
    }
};

export default withRouter(Login);