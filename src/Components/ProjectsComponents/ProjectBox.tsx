import "./styles/ProjectBoxStyles.css";
import { useState } from "react";
import test from "./styles/Assets/github_logo.png";

function ProjectBox(props) {
  const [isClicked, setIsClicked] = useState(false);

  function ExpandDong() {
    const backBody = document.getElementById(props.bodyKey);
    const expandBar = document.getElementById(props.barKey);
    const bio = document.getElementById(props.bioKey);
    const technologies = document.getElementById(props.techKey);

    if (!isClicked) {
      backBody!.style.width = "1300px";
      backBody!.style.backgroundColor = "#f6f6f6";
      backBody!.style.border = "4px solid #6900ff";

      technologies!.innerHTML = props.tech;
      technologies!.style.marginLeft = "260px";

      bio!.innerHTML = props.bio;
      bio!.style.marginLeft = "260px";
      bio!.style.marginTop = "10px";

      expandBar!.style.marginLeft = "1250px";

      setIsClicked(true);
    } else if (isClicked) {
      backBody!.style.width = "275px";
      backBody!.style.backgroundColor = "#6900ff";
      backBody!.style.border = "none";

      technologies!.innerHTML = "";
      technologies!.style.marginLeft = "0px";
      technologies!.style.marginTop = "0px";

      bio!.innerHTML = "";
      bio!.style.marginLeft = "0px";
      bio!.style.marginTop = "0px";

      expandBar!.style.marginLeft = "230px";

      setIsClicked(false);
    }
  }
  return (
    <>
      <div className="container" id="box-cont">
        <div id="box-body">
          <p>{props.title}</p>
          <a href={props.link}><img src={test} width="100px" height="100px" /></a>
        </div>
        <div id={props.bodyKey} className="box-body-back">
          <p id={props.techKey}></p>
          <p id={props.bioKey}></p>
        </div>
        <div id={props.barKey} className="select-bar">
          <button onClick={ExpandDong}></button>
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
