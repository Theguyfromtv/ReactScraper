import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import New from "./pages/New"
import Saved from "./pages/Saved"
import Nomatch from "./pages/Nomatch"


class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={New}/>
          <Route path="/saved" component={Saved}/>
          <Route component={Nomatch}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
