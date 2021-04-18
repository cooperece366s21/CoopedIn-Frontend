import React, {Component} from 'react';
import {changePage} from "../redux/actions";
import './loginButton.css';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';
import { browserHistory } from 'history'
import ReactDOM from "react-dom";
import LoginPage from "./loginPage";
import {Redirect} from "react-router-dom";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";

class LoginButtonThing extends Component{
    constructor() {
        super();
        this.state = {
            redirect : false
        }
        //this.clickHandler = this.clickHandler.bind(this);
    }
    //activePage = {LoginPage : false}

    clickHandler = () => {
        this.setState(({redirect:true}));
    }
    render(){
        if(this.state.redirect){
            return <Redirect to={'/loginPage'} />
        }
        return(
                <Link to="/loginPage"><button onClick={this.clickHandler}>Login Page</button></Link>
        )
    }
}
export default LoginButtonThing;

//export default connect(mapStateToProps, {changePage})(LoginButtonThing);
