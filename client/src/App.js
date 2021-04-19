import React from "react";
//import logo from './logo.svg';
import LoginPage from "./component/loginPage";
import HomePage from "./component/home";
import {connect} from "react-redux";
//import activePage from redux
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import changePage from "./redux/actions/actions";
import {useDispatch} from "react-redux";

class App extends React.Component {
  render() {
    //this.props.activePage = 'HomePage';
    let renderedPage;
    if (this.props.changePage === "LoginPage") renderedPage = <LoginPage/>;
    else if (this.props.changePage === "HomePage") renderedPage = <HomePage/>;
    else renderedPage = <HomePage/>;
    //defaultStatus:activePage = "HomePage";
    return (
        <div id="App">
          {renderedPage}
        </div>
    );
  }
}
//function mapStateToProps(state) {
//  return {
//    activePage: state.activePage,

//  };
//}
export default App;
//export default connect(mapStateToProps,(App));
//export default function App(){
//  return(
//      <Provider store={store}>
//       <Router>
//          <Switch>
//            <Route path="/">
//              <HomePage />
//            </Route>
//              <Route path= "/loginPage" component ={LoginPage} />
//          </Switch>
//          </Router>
//      </Provider>
//  )
//}
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//         target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
// );
//}
