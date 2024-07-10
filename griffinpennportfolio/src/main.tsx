import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./Components/LandingPageComponents/LandingBody.tsx";
import NavBar from "./Components/SharedComponents/NavBar.tsx";
import AboutMe from "./Components/AboutMeComponents/AboutMe.tsx";
import WhatIDo from "./Components/WhatIdo/WhatIDo.tsx";
import "./MainStyles.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavBar />
    <Landing />
    <AboutMe />
    <WhatIDo />
  </React.StrictMode>
);
