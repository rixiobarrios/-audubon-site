import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Show from "./pages/Show";

import "./App.css";

const App = () => {
  return (
    <Router>
      <>
        <nav>
          <Link to="/">
            <h1>Audubon Society</h1>
          </Link>
        </nav>
        <Switch>
          <Route path="/:name">
            <Show />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
