import React from "react";
import Home from "./Home";
import { birds } from "./birds.js";
import Showpage from "./Showpage";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: birds
    };
  }

  render() {
    return (
      <div>
        <h1>
          <nav>
            <Link to="/">Audubon Society</Link>
          </nav>
        </h1>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/Showpage/:bird"
              render={routerProps => {
                return <Showpage match={routerProps.match.params.bird} />;
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
