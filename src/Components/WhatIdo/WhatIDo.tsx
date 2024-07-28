import "./Styles/WhatIDoStyles.css";
import whatdo from "./Styles/Assets/WhatIDo.png";

function WhatIDo() {
  return (
    <>
      <div id="what-do-body">
        <div className="container">
          <div className="what-do-container">
            <div className="what-do-text">
              <p>
                I build applications for the <b>web</b> and beyond. I take an{" "}
                <b>architectural</b> approach to developing software applications.
                This mean I insure that from the beginning I plan out every{" "}
                <b>feature</b> I plan to have, draw out a{" "}
                <b>functionality flow diagram</b>, and define all of the{" "}
                <b>edge cases</b>.
              </p>
              <p>
                Once the plans are drawn out, I then choose the best{" "}
                <b>frameworks</b>
                and <b>software</b> to meet the scale of the project. After this,
                I set a<b>deadline</b>, and start putting <b>“To Do”</b> sticky
                notes on my <b>Scrum</b> board.
              </p>
            </div>
            <div className="what-do-header">
              <p>
                What I <b className="colored-emp">Do</b> and How I Do{" "}
                <b className="colored-emp">It</b>
              </p>
            </div>
            <div className="what-do-pic">
              <img src={whatdo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatIDo;
