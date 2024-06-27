import "./NavBarStyles.css";

let isClicked = false;

function MoveLogo() {
  let logo = document.getElementById("switch-icon");

  if (!isClicked && logo) {
    logo.style.marginRight = "-24px";

    console.log("DARK MODE");

    isClicked = true;
  } else if (isClicked && logo) {
    logo.style.marginRight = "24px";
    console.log("light mode");

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
              <img src="/light.png" id="switch-icon" />
            </button>
            <p>Dark</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
