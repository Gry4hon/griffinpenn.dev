import "./NavBarStyles.css";
import dark from "./dark.png";
import light from "./light.png";

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
  return (
    <>
      <div id="nav-container" className="fixed-top">
        <div className="container nav-bar-style">
          <div className="name-logo-container">
            <img src="./LOGO.png" />
            <h1>Griffin Penn</h1>
          </div>
          <div className="button-container">
            <button>About Me</button>
            <button>Work</button>
            <button>Resume</button>
            <button>Contact</button>
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
