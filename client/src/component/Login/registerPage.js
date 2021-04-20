import React from 'react';
import ReactDOM from 'react-dom';
import {changePage} from "../../redux/actions/actions";
import './loginPage.module.css';
import styles from "./loginPage.module.css";
import { isEmpty } from "lodash";
import Register from "./Register"

class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: "loginPage",
            username: "",
            password: "",
            isLoading: false,
            error: {
                state: false,
                message: ""
            },
            success: false
        };


    }

    render() {
        const {username, password, isLoading, error, success} = this.state;
        return (
            <div>
                <header>
                    <h1>Register Page</h1>
                </header>
                <body>
                <Register/>

                </body>
            </div>
        );
    }
}
export default RegisterPage;