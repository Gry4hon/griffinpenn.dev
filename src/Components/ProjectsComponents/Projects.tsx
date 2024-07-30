import "./styles/ProjectStyles.css";
import ProjectBox from "./ProjectBox.tsx";

function Projects() {
  function ChangePage() {
    console.log("Project page");
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
              bodyKey="vulcn-body"
              barKey="vulcn-bar"
              bioKey="vulcn-bio"
              techKey="vulcn-tech"
              bio="This is an ongoing research and development project that seeks to understand how temperature can better immerse a user in virtual reality. This was done through developing custom hardware utilizing an Arduino microcontroller that was able to received and send a serial signal to the Unity game engine."
              tech="<b>Technologies Used:</b> C#, Unity, Arduino, Arditiy"
            />
            <ProjectBox
              title="Burger Rush"
              bodyKey="burger-body"
              barKey="burger-bar"
              bioKey="burger-bio"
              techKey="burger-tech"
              bio="Burger Rush was a virtual reality local multiplayer game in which I served as the lead developer. The objective of the game was to work together making burgers for a lunch rush which involed prepping the burger, serving it, and cleaning the plates after the customers where done with them."
              tech="<b>Technologies Used:</b> C#, Unity, Proton, Blender"
            />
            <ProjectBox
              title="Mockshop.com"
              bodyKey="mock-body"
              barKey="mock-bar"
              bioKey="mock-bio"
              link="https://github.com/Gry4hon/Mockshop.com"
              techKey="mock-tech"
              bio="Mockshop.com was a full-stack web app that emulated the functionality of an e-commerce website. I implemented a custom CRUD API for users to create accounts, have their carts saved, as well as a admin API to directly interact with the MySQL database."
              tech="<b>Technologies Used:</b> HTML/CSS, JavaScript, Node.JS, ExpressJS, Bootstrap"
            />
            <ProjectBox
              title="Swift Nav App"
              bodyKey="swift-body"
              barKey="swift-bar"
              techKey="swift-tech"
              bioKey="swift-bio"
              bio="This was a collabrative effort to create a mobile app for Apple devices that would assist students with disabilities around Boise State campus. We utilized audatory, visual, and tactile queues that would tell the user to turn. The app also used image recognition to scan a set of doors of the building the user needed directions in."
              tech="<b>Technologies Used:</b> xCode and Swift"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
