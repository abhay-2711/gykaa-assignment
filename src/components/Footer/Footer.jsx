import { Link } from "react-router-dom"
import "./footer.css"
import ArrowIcon from "../Icons/ArrowIcon";
import StripeSessionsIcon from "../Icons/StripeSessionsIcon";

const Footer = () => {

  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-container-tags">
          <span>San Francisco</span>
          <span>April 23-25 2024</span>
          <span>Moscone West</span>
        </div>
        <div className="footer-container-title">
          <h2><i>Save your spot</i></h2>
        </div>
        <Link to="#" className="footer-container-register">
          <div className="register-btn-text">
            <span>Register</span>
          </div>
          <div className="register-btn-arrow">
            <ArrowIcon fill='var(--color-white-primary)' />
          </div>
        </Link>
        <div className="footer-container-nav">
          <div>
            <StripeSessionsIcon />
          </div>
          <div>
            <p>For Sessions support, email</p>
            <Link className="link-under" to="#">registration@stripesessions.com</Link>
          </div>
          <div>
            <Link className="link-under" to="#">View stripe.com</Link>
          </div>
          <div>
            <Link className="link-under" to="#">Privacy and cookies</Link>
            <Link className="link-under" to="#">Event terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;