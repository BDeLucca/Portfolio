import React from "react";
import "../../style.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

function Scheme(props) {
  return (
    <div className="scheme-container">
      <h4>{props.name}</h4>
      <a href={props.link}>
        <img src={props.source} alt="source"></img>
      </a>
      <div className="git-desc-container">
        <p className="desc">{props.desc}</p>
        <a href={props.link}>
          <LinkIcon className="icon-scheme" />
        </a>
        <a href={props.gitlink}>
          <GitHubIcon className="icon-scheme" />
        </a>
      </div>
    </div>
  );
}

export default Scheme;
