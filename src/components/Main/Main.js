import React from "react";
import "../style.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

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
        <img src={require("../../assets/Click-Click-Print.png")}></img>
      </div>
      <div className="contact">
        <h5>Contact Me</h5>
        <div className="contact-icons">
          <EmailIcon /> <InstagramIcon /> <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
}

export default Main;
