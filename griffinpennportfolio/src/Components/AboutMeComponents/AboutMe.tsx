import "./AboutMeStyles/AboutMeStyle.css";
import graduate from "./AboutMeStyles/Assets/Graduate_Me.png";
//import working from "./AboutMeStyles/Assets/Working Me.png";

function AboutMe() {
  return (
    <>
      <div id="aboutme-body">
        <div className="container aboutme-elements">
          <div className="aboutme-text">
            <p>
              I am a <b>passionate</b> developer, and recent college graduate,
              who has the <b>drive</b> to make any project come to <b>life</b>.
              I have experience building <b>full stack web applications</b>,{" "}
              <b>virtual reality applications</b> and <b>hardware</b>, and have
              a deep fascination with <b>low level development</b>.
            </p>
            <br />
            <p>
              My background <b>before</b> college was in fine arts, but through
              my major, a passion for <b>software development</b> grew. I have
              taken everyday since graduating learning more about{" "}
              <b>clean code</b>, <b>system design</b>, and best practices when
              developing <b>software</b>.
            </p>
          </div>
          <div className="aboutme-header">
            <p>
              Who is <b className="colored-emp">Griffin Penn</b>
            </p>
          </div>
          <div className="aboutme-image-carosel">
            <img src={graduate} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
