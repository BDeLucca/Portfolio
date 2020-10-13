import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <div>
        <div className="nav-container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Projects</Link>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Projects />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
