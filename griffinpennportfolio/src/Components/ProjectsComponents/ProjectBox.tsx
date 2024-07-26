import "./styles/ProjectBoxStyles.css";
import { useState } from "react";
import test from "./styles/Assets/LOGO.png";

function ProjectBox(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [boxSize, setBoxSize] = useState("275px");
  const [barLocation, setBarLocation] = useState("253px");

  function ExpandDong() {
    if (!isClicked) {
      setBoxSize("1300px");

      document.getElementById("box-body-back")!.style.width = "1300px";
      document.getElementById("select-bar")!.style.marginLeft = "1250px";
      setIsClicked(true);
      console.log("CLICKED!");
    } else if (isClicked) {
      setBoxSize("275px");
      setBarLocation("253px");
      document.getElementById("box-body-back")!.style.width = boxSize;
      document.getElementById("select-bar")!.style.marginLeft = barLocation;
      setIsClicked(false);

      console.log("UNCLICKED!");
    }
  }
  return (
    <>
      <div className="container" id="box-cont">
        <div id="box-body">
          <p>{props.title}</p>
          <img src={test} width="100px" height="100px" />
        </div>
        <div id="box-body-back"></div>
        <div id="select-bar">
          <button onClick={ExpandDong} id="expand-button"></button>
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
