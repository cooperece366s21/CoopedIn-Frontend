import React from "react";
import "./Register.scss";
import {withRouter} from "react-router-dom";
export class Register extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //const dispatch = useDispatch();
    handleClick = () => {
        this.props.history.push("/loginPage");
        window.location.reload()
    };
    render() {
        return(
            <div className="base-container">
                <div className = "header">Register</div>
                <div className = "content">
                    <div className = "form">
                        <div className ="form-group">
                            <label htmlFor="username">Choose a Username:</label>
                            <input type="text" name = "username" placeholder = "Username"/>
                        </div>
                        <div className ="form-group">
                            <label htmlFor="password">Choose a Password:</label>
                            <input type="password" name = "password" placeholder = "Password"/>
                        </div>
                    </div>
                </div>
                <div className = "footer">
                    <button onClick={this.handleClick} type ="button" className ="btn">
                        Register Account
                    </button>
                </div>
            </div>
        )
    }
};
export default withRouter(Register);