import "./NavBarStyles.css";
import dark from "./dark.png";
import light from "./light.png";

import linkedin from "./linkedin.png";
import octo from "./octocat.png";

let isClicked = false;

function MoveLogo() {
  const logo = document.getElementById("switch-icon") as HTMLImageElement;
  const switchButton = document.getElementById(
    "switch_button"
  ) as HTMLImageElement;

  if (!isClicked && logo) {
    logo.style.marginRight = "-24px";

    alert("UNDER CONSTRUCTION!");
    isClicked = true;
    switchButton.style.backgroundColor = "#6900ff";
    logo.src = dark;
  } else if (isClicked && logo) {
    logo.style.marginRight = "24px";

    logo.src = light;
    switchButton.style.backgroundColor = "#f6f6f6";

    isClicked = false;
  }
}

function NavBar() {
  localStorage["currentPage"] = "Landing";
  localStorage["changeHighlight"] = SwitchHighlight();

  let currentPage = localStorage["currentPage"];
  function SwitchHighlight() {
    const aboutMe = document!.getElementById("about");
    const myWork = document!.getElementById("work");
    const contactMe = document!.getElementById("contact");
    switch (currentPage) {
      case "Landing":
        aboutMe!.style.backgroundColor = "#f9f9f9";
        myWork!.style.backgroundColor = "#f3f3f3";
        contactMe!.style.backgroundColor = "f3f3f3";
        break;
      case "Work":
        aboutMe!.style.backgroundColor = "#f3f3f3";
        myWork!.style.backgroundColor = "#f9f9f9";
        contactMe!.style.backgroundColor = "f3f3f3";
        break;
      case "Contact":
        aboutMe!.style.backgroundColor = "#f3f3f3";
        myWork!.style.backgroundColor = "#f3f3f3";
        contactMe!.style.backgroundColor = "f9f9f9";
        break;
    }
  }
  return (
    <>
      <div id="nav-container" className="fixed-top">
        <div className="container nav-bar-style">
          <div className="name-logo-container">
            <img src="./LOGO.png" />
            <h1>Griffin Penn</h1>
          </div>
          <div className="button-container">
            <button id="about">About Me</button>
            <button id="work">Work</button>
            <button id="contact">Contact</button>
            <button id="linkedin-button">
              <a href="https://www.linkedin.com/in/griffin-penn-0a2190215/">
                <img src={linkedin} alt="" />
              </a>
            </button>
            <button id="github-button">
              <a href="https://github.com/Gry4hon">
                <img src={octo} alt="" />
              </a>
            </button>
          </div>

          <div className="display-switch">
            <p>Light</p>
            <button id="switch_button" onClick={MoveLogo}>
              <img src={light} id="switch-icon" />
            </button>
            <p>Dark</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
