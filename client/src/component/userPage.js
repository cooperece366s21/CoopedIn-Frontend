import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import LoginButtonThing from "./loginButton";
import Timer from "./Timer";
import Job_form from "./job_form";
import BasicTable from "./table";
class HomePage extends Component {
    constructor(props){
        super(props);
        //this.state = {
        //    activePage:"UserPage",
        //};
    }

    //this.state = {activePage = index.js}
    //    this.handleClick = this.handleClick.bind(this)
    //}
    //handleClick(activePage) {
    //    this.props.changePage(activePage);
    initialFormData = Object.freeze({
        username: "",
        password: ""
    });
    render() {
        return (
            <BrowserRouter>
                <header>
                    <LoginButtonThing />User Page<Timer></Timer>
                </header>
                <div>
                    <Job_form/>
                    {/*<div className = "form">*/}
                    {/*    <div className ="form-group">*/}
                    {/*        <label htmlFor="username">Type in Job ID:</label>*/}
                    {/*        <input type="text" name = "id" placeholder = "id" value={this.state.id}/>*/}
                    {/*    </div>*/}
                    {/*    <div className ="form-group">*/}
                    {/*        <label htmlFor="password">Company:</label>*/}
                    {/*        <input type="text" name = "company" placeholder = "company" value={this.state.company}/>*/}
                    {/*    </div>*/}
                    {/*    <div className ="form-group">*/}
                    {/*        <label htmlFor="password">Title of the Job:</label>*/}
                    {/*        <input type="text" name = "jobTitle" placeholder = "jobTitle" value={this.state.jobTitle}/>*/}
                    {/*    </div>*/}
                    {/*    <div className ="form-group">*/}
                    {/*        <label htmlFor="password">Where are you located?</label>*/}
                    {/*        <input type="text" name = "location" placeholder = "location" value={this.state.location}/>*/}
                    {/*    </div>*/}
                    {/*    <div className ="form-group">*/}
                    {/*        <label htmlFor="password">Internship/PartTime/FullTime/Coop?:</label>*/}
                    {/*        <input type="text" name = "jobType" placeholder = "jobType" value={this.state.jobType}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </BrowserRouter>
        );
    }
}
//ReactDOM.render(<HomePage />, document.getElementById('root'));
export default HomePage;