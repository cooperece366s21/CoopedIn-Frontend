import React, {Component} from 'react';
import '../loginButton.css';
import ReactDOM from "react-dom";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
//import {connect} from "react-redux";
//import { useDispatch } from "react-redux";
//import { changePage } from "../redux/actions/actions";
import { Route , withRouter} from 'react-router-dom';
//import changePage from "../redux/reducer/index";
class RegisterButtonThing extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //const dispatch = useDispatch();
    handleClick = () => {
        this.props.history.push("/registerPage");
        window.location.reload()
    };

    render() {
        return (
            <button onClick={this.handleClick}>Register Page</button>
        )
    }
}
export default withRouter(RegisterButtonThing);
