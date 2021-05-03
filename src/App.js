import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Login from './Login';
import Home from './views/Home';
import RecordEntry from './components/RecordEntry';
import './App.css';

// Navigation component
const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/tobbl-app/">Tobbl</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/" activeClassName="active">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/record-entry">Enter Score</NavLink>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
      </li>
    </ul>
  </div>
  </nav>
);

function App() {
  return (
    <Router basename="/tobbl-app/">
    <div className="App">
      {/* navigation component */}
      <Nav />
      {/* application routes */}
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
