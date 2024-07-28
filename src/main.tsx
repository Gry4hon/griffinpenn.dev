import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Components/LandingPageComponents/LandingBody.tsx";
import NavBar from "./Components/SharedComponents/NavBar.tsx";
import AboutMe from "./Components/AboutMeComponents/AboutMe.tsx";
import WhatIDo from "./Components/WhatIdo/WhatIDo.tsx";
import TechStack from "./Components/TechStackComponents/TechStack.tsx";
import Projects from "./Components/ProjectsComponents/Projects.tsx";
import LikeWhatYouSee from "./Components/LikeWhatYouSeeComponents/LikeWhatYouSee.tsx";
import ContactMe from "./Components/ContactComponents/ContactMe.tsx";
import "./MainStyles.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Landing />
    <AboutMe />
    <WhatIDo />
    <TechStack />
    <Projects />
    <LikeWhatYouSee />
    <ContactMe />
  </React.StrictMode>
);