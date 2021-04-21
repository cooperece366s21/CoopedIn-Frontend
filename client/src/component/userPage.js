import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import LoginButtonThing from "./loginButton";
import Timer from "./Timer";
import BasicTable from "./table";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage:"UserPage",
        };
    }



    //this.state = {activePage = index.js}
    //    this.handleClick = this.handleClick.bind(this)
    //}
    //handleClick(activePage) {
    //    this.props.changePage(activePage);

    render() {
        return (
            <BrowserRouter>
                <header>
                    <LoginButtonThing />User Page<Timer></Timer>
                </header>
                <body>
                <div>
                    <BasicTable />
                </div>
                </body>
            </BrowserRouter>

        );
    }
}
//ReactDOM.render(<HomePage />, document.getElementById('root'));

export default HomePage;