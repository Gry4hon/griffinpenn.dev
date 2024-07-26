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
            <ProjectBox
              title="Project Vulcn"
              bodyKey="vulcn-body"
              barKey="vulcn-bar"
              bioKey="vulcn-bio"
              bio="This is an ongoing research and development project that seeks to understand how temperature can better immerse a user in virtual reality."
            />
            <ProjectBox
              title="Burger Rush"
              bodyKey="burger-body"
              barKey="burger-bar"
              bioKey="burger-bio"
              bio="THIS IS A BURGER TEST"
            />
            <ProjectBox
              title="Mockshop.com"
              bodyKey="mock-body"
              barKey="mock-bar"
              bioKey="mock-bio"
              bio="THIS IS A MOCK TEST"
            />
            <ProjectBox
              title="Swift Navigation App"
              bodyKey="swift-body"
              barKey="swift-bar"
              bioKey="swift-bio"
              bio="THIS IS A SWIFT TEST"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
