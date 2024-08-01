import "./LandingStyles/LandingBodyStyles.css";
import animatedMe from "./LandingStyles/Assets/Landing Me.png";
import arrow from "./LandingStyles/Assets/ARROW.png";

function LandingBody() {
  function ChangePage() {
    console.log("Landing page");
    localStorage["currentPage"] = "Landing";
  }

  return (
    <>
      <div onMouseEnter={ChangePage} id="landing-body">
        <div className="container">
          <div className="landing-elements">
            <div className="landing-text">
              <p>Greetings, my name is</p>
              <p id="first-name">
                <b>Griffin Penn</b>
              </p>
              <p id="software-dev">
                I am a <b>Full-Stack XR and Web Developer</b> based out of{" "}
                <b>Seattle, Washington</b>
              </p>
              <p id="port">
                Take a look at my <b>portfolio</b> below!
              </p>
            </div>
            <div id="arrow-styles">
              <img src={arrow} />
            </div>
            <div className="landing-image">
              <img src={animatedMe} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingBody;
