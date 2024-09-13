import "./styles/ProjectBoxStyles.css";
import github from "./styles/Assets/github_logo.png";
import logo from "./styles/Assets/LOGO.png";

function ProjectBox(props: any) {
  return (
    <>
      <div className="container">
        <div id="box-body">
          <img className="project-picture-styles" src={logo}></img>
          <div className="title-github">
            <p className="title-styles">{props.title}</p>
            <a href={props.link}>
              <img src={github} className="githib-styles" />
            </a>
          </div>
          <p className="bio-styles">{props.bio}</p>
          <p className="tech-stack-title">Tech Used:</p>
          <div className="tech-stack-contianer">
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
