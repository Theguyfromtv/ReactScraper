import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import New from "./pages/New"
import Saved from "./pages/Saved"

class App extends Component {
  
  render() {
    return (
      <Router>
]         <Route exact path="/" component={New}/>
          <Route exact path="/saved" component={Saved}/>
      </Router>
    );
  }
}

export default App;
