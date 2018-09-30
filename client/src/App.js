import React, { Component } from "react";
import Login from "./auth/Login";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="tc">
          <h1>ROBOFRIENDS</h1>
          <Route exact path="/login" component={Login} />
          <Route exact path="/contacts" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
