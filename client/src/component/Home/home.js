import React, {Component} from "react";
import Timer from "../Timer/Timer";
// import ReactDOM from "react-dom";
import './home.css';
import LoginButtonThing from "../Login/loginButton";
import { BrowserRouter, Link } from "react-router-dom";
import BasicTable from "../Table/table";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage:"HomePage",
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
                <LoginButtonThing />Job Board<Timer></Timer>
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