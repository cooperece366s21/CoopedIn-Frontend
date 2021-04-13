import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Timer from "./component/Timer";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class IndexPage extends Component {
    render() {
        return (
            <div>
                <h1><login-button>Login Redirect</login-button>Index Page (This should be used for Job Board)<Timer></Timer></h1>
            </div>
        );
    }
}

// export default Test
// <Link to="/signup" className="btn btn-primary">Sign up</Link>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
ReactDOM.render(<IndexPage />, document.getElementById('root'));

