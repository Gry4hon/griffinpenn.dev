import "./NavBarStyles.css";
import dark from "./dark.png";
import light from "./light.png";

//import linkedin from "./linkedin.png";
//import octo from "./octocat.png";

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
let isMobileMenuVisable = false;
function MobileMenuToggle() {
  const mobileMenu = document.getElementById("mobile-menu") as HTMLDivElement;
  if (!isMobileMenuVisable) {
    mobileMenu.style.display = "grid";
    isMobileMenuVisable = true;
  } else {
    mobileMenu.style.display = "none";
    isMobileMenuVisable = false;
  }
}

localStorage["currentPage"] = "";

function NavBar(props: any) {
  function SwitchHighlight() {
    const aboutMe = document.getElementById(props.aboutTag);
    const myWork = document.getElementById(props.workTag);
    const contactMe = document.getElementById(props.contactTag);

    switch (localStorage["currentPage"]) {
      case "Landing":
        aboutMe!.style.backgroundColor = "#e2e2e2";
        myWork!.style.backgroundColor = "#f6f6f6";
        contactMe!.style.backgroundColor = "#f6f6f6";
        break;
      case "Work":
        aboutMe!.style.backgroundColor = "#f6f6f6";
        myWork!.style.backgroundColor = "#e2e2e2";
        contactMe!.style.backgroundColor = "#f6f6f6";
        break;
      case "Contact":
        aboutMe!.style.backgroundColor = "#f6f6f6";
        myWork!.style.backgroundColor = "#f6f6f6";
        contactMe!.style.backgroundColor = "#e2e2e2";
        break;
    }
  }
  setInterval(SwitchHighlight, 5);
  return (
    <>
      <div id="nav-container" className="fixed-top">
        <div className="container nav-bar-style">
          <div className="name-logo-container">
            <a href="#landing-body">
              <img src="./LOGO.png" />
            </a>
            <h1>Griffin Penn</h1>
          </div>
          <div className="button-container">
            <a href="#aboutme-body">
              <button id={props.aboutTag}>About Me</button>
            </a>
            <a href="#projects-body">
              <button id={props.workTag}>Work</button>
            </a>
            <a href="#contact-body">
              <button id={props.contactTag}>Contact</button>
            </a>
          </div>
          <div className="mobile-menu-button">
            <button onClick={MobileMenuToggle}>#</button>
          </div>
          <div className="display-switch">
            <p>Light</p>
            <button id="switch_button" onClick={MoveLogo}>
              <img src={light} id="switch-icon" />
            </button>
            <p>Dark</p>
          </div>
        </div>
        <div className="mobile-menu-dropdown" id="mobile-menu">
          <a href="#aboutme-body">
            <button>About Me</button>
          </a>
          <a href="#projects-body">
            <button>Work</button>
          </a>
          <a href="#contact-body">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
