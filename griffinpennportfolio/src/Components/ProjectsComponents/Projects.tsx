import "./styles/ProjectStyles.css";
import ProjectBox from "./ProjectBox.tsx";

function Projects() {
  return (
    <>
      <div id="projects-body">
        <div className="projects-elements container">
          <div className="projects-header">
            <p>
              My <b className="colored-emp">Projects</b>
            </p>
          </div>
          <div className="projects-bio">
            <p>
              Here are a few of my most <b>stand out</b> projects to date. Each
              have a public repository for you to explore on <b>GitHub</b>!
            </p>
          </div>
          <div className="projects-container">
            <ProjectBox title="Project Vulcn" />
            <ProjectBox title="Burger Rush" />
            <ProjectBox title="Mockshop.com" />
            <ProjectBox title="Swift Navigation App" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
