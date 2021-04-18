import React from 'react';
import ReactDOM from 'react-dom';
import {changePage} from "../redux/actions";
import './loginPage.css';



class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activePage:"loginPage",
        };
    }
    render() {
        return (
            <div>
            <header>
                <h1>Login Page</h1>
            </header>
            <body>
            <companylogin>Company Login</companylogin>

            <userlogin>Login for Users</userlogin>
            </body>
                </div>
        );
    }
}
//ReactDOM.render(<LoginPage />, document.getElementById('root'));

export default LoginPage;