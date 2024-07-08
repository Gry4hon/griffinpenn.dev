import "./AboutMeStyles/AboutMeStyle.css";
import test from "./AboutMeStyles/Assets/ARROW.png";

function AboutMe() {
  return (
    <>
      <div id="aboutme-body">
        <div className="container aboutme-elements">
          <div className="aboutme-text">
            <p>Me code stuff</p>
          </div>
          <div className="aboutme-header">
            <h1>WHO IS ME??</h1>
          </div>
          <div className="aboutme-image-carosel">
            <img src={test} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
