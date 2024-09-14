import "./styles/ProjectBoxStyles.css";
import github from "./styles/Assets/github_logo.png";
import logo from "./styles/Assets/LOGO.png";

function ProjectBox(props: any) {
  //Gotta have like a map of values for the imgs for the tech stack right?
  //<img src="/src/Components/ProjectsComponents/styles/Assets/LOGO.png">
  //const links = props.images;
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
          {/* <p className="tech-stack-title">Tech Used:</p>
          <div className="tech-stack-contianer">
            {links.map((image: string) => {
              return <img src={image} />;
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProjectBox;
