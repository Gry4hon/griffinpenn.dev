import "./styles/ProjectStyles.css";

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
          <div className="projects-container"></div>
        </div>
      </div>
    </>
  );
}

export default Projects;
