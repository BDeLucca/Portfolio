import React from "react";
import "../../style.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function Scheme(props) {
  return (
    <div className="scheme-container">
      <h4>Project {props.number}</h4>
      <img src={props.source} alt="source"></img>
      <div className="git-desc-container">
        <a href={props.link}>
          <GitHubIcon className="Icon" />
        </a>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Scheme;
