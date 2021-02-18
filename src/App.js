import React from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Coffee from "./Components/Coffee";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route path="/about" component={About} />
        <Route exact path="/coffee/:type" component={Coffee} />
      </Switch>
    </div>
  );
}

export default App;
