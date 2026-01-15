import React from 'react'
import "./Contact.css";
import ellipse from "../../../assets/images/Ellipse 5.png"
import ellipse1 from "../../../assets/images/Ellipse 6.png";
import instagram from "../../../assets/icons/instagram.png";
import facebook from "../../../assets/icons/facebook.png"
import x from "../../../assets/icons/x.png"
import linkedin from "../../../assets/icons/linkedin.png"

const Contact = () => {
  return (
    <section className="contact">
      <img className="ellipse" src={ellipse} alt="" />
      <img className="ellipse1" src={ellipse1} alt="" />
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <div className="left-content">
            <div className="contact-head">
              <h4>Contact</h4>
              <p>+91 89991 01916  / +91 92702 71916</p>
            </div>

            <div>
              <h4>Address</h4>
              <p>
                Om Sai Apartment, Road, Manmad -<br />
                Chandwad Rd, Dawkhar Nagar, Ganur,<br />
                Nashik, Maharashtra - 423101
              </p>
            </div>

            <div className="line" />

            <div>
              <h4>Email</h4>
              <p>visiomatixmedia@gmail.com</p>
            </div>

            <div className="line" />
          </div>

          <div className="socials">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#"><img src={x} alt="X" /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <span className="small-title">Let’s Talk Growth</span>
          <h2>SEND A <span>MESSAGE</span></h2>

          <div className="grid">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Business Name" />
            <input placeholder="Phone Number" />
          </div>

          <select>
            <option>Which service are you interested in?</option>
          </select>

          <textarea placeholder="Message" />

          {/* CAPTCHA */}
          <div className="recaptcha">
            <div className="recaptcha-left">
              <div className="recaptcha-checkbox"></div>
              <span className="recaptcha-text">I’m not a robot</span>
            </div>

            <div className="recaptcha-right">
              <div className="recaptcha-logo"></div>
              <div className="recaptcha-footer">
                <span>reCAPTCHA</span>
                <small>Privacy - Terms</small>
              </div>
            </div>
          </div>
              <button className="talk">Let's Talk</button>
        </div>

      </div>
    </section>
  );
}

export default Contact