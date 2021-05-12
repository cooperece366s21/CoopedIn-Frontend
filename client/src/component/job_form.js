import React from "react";
import * as api from '../services/api';
class Job_form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: null,
            company: null,
            jobTitle: null,
            location: null,
            jobType:null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const result = api.addJob(this.state.id, this.state.company, this.state.jobTitle, this.state.location, this.state.jobType);
        // if(result=="success"){
        //
        // }
        console.log(this.state.id);
    };

    // fetch(`localhost:8080/api/addJob`).then(function(response) {
    //     console.log(response)
    //     return response.json();
    // });


    render() {

        return (
            <>
                <label>
                    Type in Job ID:
                    <input type="text" name="id" placeholder="id" onChange={e => this.setState({id: e.target.value})}/>
                </label>
                <br/>
                <label>
                    Company:
                    <input type="text" name="company" placeholder="company"
                           onChange={e => this.setState({company: e.target.value})}/>
                </label>
                <br/>
                <label>
                    Title of the Job:
                    <input type="text" name="jobTitle" placeholder="jobTitle"
                           onChange={e => this.setState({jobTitle: e.target.value})}/>
                </label>
                <br/>
                <label>
                    Where are you located?
                    <input type="text" name="location" placeholder="location"
                           onChange={e => this.setState({location: e.target.value})}/>
                </label>
                <br/>
                <label>
                    Internship/PartTime/FullTime/Coop?
                    <input type="text" name="jobType" placeholder="jobType"
                           onChange={e => this.setState({jobType: e.target.value})}/>
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Submit New Job</button>
            </>
        );
    }
};
export default (Job_form);