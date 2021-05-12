import React from "react";
import "./Login.css";
import {withRouter} from "react-router-dom";
import * as api from "../../services/api";


export class Login extends React.Component{
    state = {
        username: "",
        password: "",
        loginResponse: null,

    };
    // async onSubmit(){
    //     const { username, password } = this.state;
    //     const result = await api.login(username, password);
    //     if (result.status ===! "success") {
    //         this.setState({loginResponse: result.error});
    //     }
    // }
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
                    <form  onSubmit={e => e.preventDefault()}>
                        <div className ="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name = "username" placeholder = "Username"
                                   onChange={e => this.setState({ username: e.currentTarget.value })}/>
                        </div>
                        <div className ="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name = "password" placeholder = "Password"
                                   onChange={e => this.setState({ password: e.currentTarget.value })}/>
                        </div>
                    </form>
                </div>
                <div className = "footer">
                    <button type ="button" onClick={() => this.handleClick()} className ="btn">
                        Login
                    </button>
                </div>
            </div>
        )
    }
};

export default withRouter(Login);