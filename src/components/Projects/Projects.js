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
          name="Meme Creator"
          source={require("../../assets/memecreator.png")}
          link={"https://bdelucca.github.io/memeCreator/"}
          desc="Web to create memes"
          gitlink="https://github.com/BDeLucca/memeCreator"
        />
        <Scheme
          name="DROPA"
          source={require("../../assets/DROPA.png")}
          link={
            "https://bmcbioinformatics.biomedcentral.com/articles/10.1186/s12859-019-3009-9"
          }
          desc="DRIP-seq optimized peak annotator"
          gitlink="https://github.com/marcrusso/DROPA"
        />
      </div>
    </div>
  );
}

export default Projects;
