import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default Routes;
