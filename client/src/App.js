import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import New from "./pages/New"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={New}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
