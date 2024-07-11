import "./Styles/ContactMeStyles.css";

function ContactMe() {
  return (
    <>
      <div id="contact-body">
        <div className="contact-elements">
          <div className="contact-header">
            <p>
              Dont Be a <b className="colored-emp">Stranger</b>!
            </p>
          </div>
          <p className="contact-bio">
            You can send me an email <b>here</b>, or message me on my{" "}
            <b>LinkedIn</b>, either way I can’t wait to hear from you!
          </p>
          <div className="contact-container"></div>
        </div>
        <footer>&copy;Griffin Penn 2024</footer>
      </div>
    </>
  );
}

export default ContactMe;
