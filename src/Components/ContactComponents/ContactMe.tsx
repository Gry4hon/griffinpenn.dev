import "./Styles/ContactMeStyles.css";

function ContactMe(changePage: any) {
  return (
    <>
      <div id="contact-body">
        <div className="container">
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
            <div className="contact-container">
              <label id="email-label" className="label-styles" htmlFor="email">
                Your <b>Email</b>
              </label>
              <input
                id="email"
                className="email-box-styles"
                type="email"
              ></input>
              <label className="label-styles" htmlFor="message">
                What did you want to <b>talk</b> about?
              </label>
              <textarea id="message" className="message-box-styles"></textarea>
            </div>
            <button className="send-button-styles"> S E N D </button>
            <footer className="footer-styles">&copy;Griffin Penn 2024</footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
