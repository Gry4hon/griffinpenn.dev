import "./Styles/ContactMeStyles.css";

function ContactMe() {
  return (
    <>
      <div id="contact-body">
        <div className="contact-elements">
          <div className="contact-header">
            <p>Dont Be a Stranger!</p>
          </div>
          <p className="contact-bio">
            You can send me an email here, or message me on my LinkedIn, either
            way I can’t wait to hear from you!
          </p>
          <div className="contact-container"></div>
        </div>
      </div>
      <footer>&copy;Griffin Penn 2024</footer>
    </>
  );
}

export default ContactMe;
