import React from "react";
import "../style.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
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
              <img
                src={require("../../assets/html-css.png")}
                alt="htmlCss"
              ></img>
            </li>
            <li>
              <img src={require("../../assets/NoSQL.jpg")} alt="NoSQl"></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="description-container">
        <p className="description">
          Thanks for visiting my Website!<br></br> About Me: <br></br>I have a
          background in Biotechnology and Informatics. Did an amazing project
          with the University of Bologna related to RNA Analisis. Afterwards got
          really interested in Software Developer and now I am looking to do
          some project to grow in this profession.
        </p>
        <img src={require("../../assets/About_Me.jpg")} alt="About Me"></img>
      </div>
    </div>
  );
}

export default About;
