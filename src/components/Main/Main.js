import React from "react";
import "../style.css";
import About from "../About/About";

import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main-container">
      <div className="photo-name-container">
        <img src={require("../../assets/MainPhoto.png")} alt="Main"></img>
        <div className="name-container">
          <h1>Bruno De Lucca</h1>
          <h3>Junior Software Developer</h3>
        </div>
      </div>
      <div className="about-wrapper">
        <About />
      </div>
      <div className="about-projects-container">
        <div className="img-container-main">
          <Link className="link" to="/projects">
            <div className="hover-img">
              <p>Projects</p>
            </div>
          </Link>
          <img
            src={require("../../assets/Click-Click-Print.png")}
            alt="Click-Click-Print"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Main;
