import reactlogo from "./Styles/Assets/Animated react logo.gif";
import cpplogo from "./Styles/Assets/C++_Logo.gif";
import csharplogo from "./Styles/Assets/Csharp_Logo.gif";
import arduinologo from "./Styles/Assets/Arduino_Logo.gif";
import mysqllogo from "./Styles/Assets/MySQL_Logo.gif";
import unitylogo from "./Styles/Assets/Unity_Logo.gif";
import nodejslogo from "./Styles/Assets/NodeJS_Logo.gif";

import "./Styles/TechStackStyles.css";

function TechStack() {
  return (
    <>
      <div id="tech-stack-body">
        <div className="tech-stack-container container">
          <div className="tech-stack-header container">
            <p>
              My <b className="colored-emp">Tech Stack</b>
            </p>
          </div>
          <p className="tech-stack-bio container">
            I have a wide <b>breadth</b> of experiences with using various{" "}
            <b>frameworks</b>
            and <b>software applications</b>, but here are the{" "}
            <b>technologies</b> I specialize in:
          </p>
          <div className="container">
            <div className="logo-group-one container">
              <div>
                <img src={cpplogo} alt="" />
              </div>
              <div>
                <img src={reactlogo} alt="" />
              </div>
              <div>
                <img src={nodejslogo} alt="" />
              </div>
              <div>
                <img src={arduinologo} alt="" />
              </div>
            </div>
            <div className="logo-group-two container">
              <div>
                <img src={unitylogo} alt="" />
              </div>
              <div>
                <img src={mysqllogo} alt="" />
              </div>
              <div>
                <img src={csharplogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
