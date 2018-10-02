import React, { Component } from "react";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/contacts" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
