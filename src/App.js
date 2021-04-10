// import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Home from './views/Home';
import RecordEntry from './components/RecordEntry';
// import Standings from './components/Standings';
import './App.css';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/record-entry">Enter Score</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
    </ul>
  </div>
  </nav>
);

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}

      {/* <Login />
      <RecordEntry />
      <Home /> */}
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/record-entry"><RecordEntry /></Route>
        <Route path="/login"><Login /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
