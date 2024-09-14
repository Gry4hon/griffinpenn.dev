import "./styles/ProjectStyles.css";
import ProjectBox from "./ProjectBox.tsx";
// import reactlogo from "./styles/Assets/Animated react logo.gif";
// import cpplogo from "./styles/Assets/C++_Logo.gif";
//import csharplogo from "./styles/Assets/Csharp_Logo.gif";
// import arduinologo from "./styles/Assets/Arduino_Logo.gif";
// import mysqllogo from "./styles/Assets/MySQL_Logo.gif";
// import unitylogo from "./styles/Assets/Unity_Logo.gif";
// import nodejslogo from "./styles/Assets/NodeJS_Logo.gif";

function Projects() {
  function ChangePage() {
    localStorage["currentPage"] = "Work";
  }
  return (
    <>
      <div onMouseEnter={ChangePage} id="projects-body">
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
              link="https://github.com/Gry4hon/Project-Vulcn"
              bio="This is an ongoing research and development project that seeks to understand how temperature can better immerse a user in virtual reality. This was done through developing custom hardware utilizing an Arduino microcontroller that was able to received and send a serial signal to the Unity game engine."
              images={[
                "/src/Components/ProjectsComponents/styles/Assets/Csharp_Logo.gif",
                "/src/Components/ProjectsComponents/styles/Assets/Unity_Logo.gif",
                "/src/Components/ProjectsComponents/styles/Assets/Arduino_Logo.gif",
              ]}
            />
            <ProjectBox
              title="Burger Rush"
              bio="Burger Rush was a virtual reality local multiplayer game in which I served as the lead developer. The objective of the game was to work together making burgers for a lunch rush which involed prepping the burger, serving it, and cleaning the plates after the customers where done with them."
              link="https://github.com/Gry4hon/Burger-Rush"
              images={[
                "/src/Components/ProjectsComponents/styles/Assets/Csharp_Logo.gif",
                "/src/Components/ProjectsComponents/styles/Assets/Unity_Logo.gif",
              ]}
            />
            <ProjectBox
              title="Mockshop.com"
              link="https://github.com/Gry4hon/Mockshop"
              bio="Mockshop.com was a full-stack web app that emulated the functionality of an e-commerce website. I implemented a custom CRUD API for users to create accounts, have their carts saved, as well as a admin API to directly interact with the MySQL database."
              images={[
                "./styles/Assets/Csharp_Logo.gif",
                "./styles/Assets/Unity_Logo.gif",
                "./styles/Assets/Arduino_Logo.gif",
              ]}
            />
            <ProjectBox
              title="Swift Nav App"
              bio="This was a collabrative effort to create a mobile app for Apple devices that would assist students with disabilities around Boise State campus. We utilized audatory, visual, and tactile queues that would tell the user to turn. The app also used image recognition to scan a set of doors of the building the user needed directions in."
              link="https://github.com/Gry4hon/Swift-Nav-App"
              images={[
                "./styles/Assets/Csharp_Logo.gif",
                "./styles/Assets/Unity_Logo.gif",
                "./styles/Assets/Arduino_Logo.gif",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
