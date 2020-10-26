import React from "react";
import "../style.css";

function About() {
  return (
    <div className="tech-container">
      <h3>Knowledge:</h3>
      <div className="list-container">
        <ul className="skills">
          <li>
            <img
              src={require("../../assets/logo-javascript.png")}
              alt="Javascript"
            ></img>
          </li>
          <li>
            <img
              src={require("../../assets/React-logo.png")}
              alt="ReactJs"
            ></img>
          </li>
          <li>
            <img
              src={require("../../assets/python-logo.jpeg")}
              alt="Python"
            ></img>
          </li>
          <li>
            <img src={require("../../assets/SQL.png")} alt="SQL"></img>
          </li>
        </ul>
        <ul className="skills2">
          <li>
            <img src={require("../../assets/nodejs.png")} alt="ReactJs"></img>
          </li>
          <li>
            <img src={require("../../assets/html-css.png")} alt="htmlCss"></img>
          </li>
          <li>
            <img src={require("../../assets/NoSQL.jpg")} alt="NoSQl"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
