import "./styles/LikeWhatYouSee.css";
import me from "./styles/Assets/me.jpeg";

function LikeWhatYouSee() {
  return (
    <>
      <div id="likeme-body">
        <div className="likeme-elements">
          <div className="likeme-header">
            <p>
              Like What you <b className="colored-emp">see</b>?
            </p>
          </div>
          <div className="likeme-bio">
            <p>
              I am currently looking for my <b>start</b> in the software
              development field, and would love to hear from <b>you</b> if you
              would like to work with me!
            </p>
          </div>
          <div className="likeme-container">
            <img src={me} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LikeWhatYouSee;
