import React from "react";
import "../style.css";
import Scheme from "./Scheme/Scheme";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        <Scheme
          name="Click-Click-Print"
          source={require("../../assets/Click-Click-Print.png")}
          link={"https://www.clickclickprint.org/"}
          desc="Label maker Website"
          gitlink="https://github.com/Hangrykat/Click-click-print"
        />
        <Scheme
          name="1"
          source={require("../../assets/Click-Click-Print.png")}
          link={"https://www.clickclickprint.org/"}
          desc="Label maker Website"
        />
        <Scheme
          name="1"
          source={require("../../assets/Click-Click-Print.png")}
          link={"https://www.clickclickprint.org/"}
          desc="Label maker Website"
        />
        <Scheme
          name="1"
          source={require("../../assets/Click-Click-Print.png")}
          link={"https://www.clickclickprint.org/"}
          desc="Label maker Website"
        />
      </div>
    </div>
  );
}

export default Projects;
