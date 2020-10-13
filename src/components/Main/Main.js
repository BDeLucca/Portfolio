import React from "react";
import "../style.css";

function Main() {
  return (
    <div className="main-container">
      <div className="photo-name-container">
        <img src={require("../../assets/MainPhoto.png")}></img>
        <div className="name-container">
          <h1>Bruno De Lucca</h1>
          <h3>Full-Stack Developer</h3>
        </div>
      </div>
      <div className="about-projects-container">
        <img src={require("../../assets/AboutMyself.jpg")}></img>
        <div>Extra</div>
        <img src={require("../../assets/AboutMyself.jpg")}></img>
      </div>
      <div className="contact">
        Contact me: Gmail Instagram Facebook Twitter
      </div>
    </div>
  );
}

export default Main;
