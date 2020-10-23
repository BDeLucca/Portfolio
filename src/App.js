import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main/Main";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="nav-container">
          <nav>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <div className="contact">
          <h5>Contact Me:</h5>
          <div className="contact-icons">
            <a href="mailto: bruno@delucca.cl">
              <EmailIcon className="cont-icon" fontSize="large" />
            </a>
            <a href="https://github.com/BDeLucca">
              <GitHubIcon className="cont-icon" fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/brunodelucca/">
              <LinkedInIcon className="cont-icon" fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
