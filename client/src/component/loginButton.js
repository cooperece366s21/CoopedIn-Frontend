import React, {Component} from 'react';
import './loginButton.css';
import ReactDOM from "react-dom";
import LoginPage from "./loginPage";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/actions/actions";
//import changePage from "../redux/reducer/index";
export default function LoginButtonThing(){
    const dispatch = useDispatch();
    return (
            <button onClick={() => dispatch(changePage("loginPage"))}>Login Page</button>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        changePage : dispatch.activePage
    }
};

//export default LoginButtonThing;
//export default connect(null,mapDispatchToProps)(LoginButtonThing);

//export default connect(mapStateToProps, {changePage})(LoginButtonThing);
//const dispatch = useDispatch();

//state = {
//    redirect : false
//}
//setRedirect = () => {
//    this.setState({
//        redirect : true
//    })
//}
//renderRedirect = () => {
//    if(this.state.redirect){
//        return <Redirect to ='/loginPage '/>
//    }
//}
//constructor() {
//    super();
//    this.state = {
//        redirect : false
//    }
//this.clickHandler = this.clickHandler.bind(this);
//}
//activePage = {LoginPage : false}

//clickHandler = () => {
//   this.setState(({redirect:true}));
//}

//if(this.state.redirect){
//    return <Redirect to={'/loginPage'} />
//}