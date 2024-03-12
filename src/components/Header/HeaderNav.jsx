import { Link } from "react-router-dom";
import './header.css';
import StripeIcon from "../../components/Icons/StripeIcon";
import ArrowIcon from "../../components/Icons/ArrowIcon";

const HeaderNav = () => {

  return (
    <header className="header header-nav">
      <div className="header-container">
        <div className="header-container-logo">
          <StripeIcon fill='var(--color-black-primary)' />
        </div>
        <ul className="header-container-nav">
          <li onClick={() => document.getElementById('overview-section')?.scrollIntoView({ behavior: 'smooth' })}>Overview</li>
          <li onClick={() => document.getElementById('talks-section')?.scrollIntoView({ behavior: 'smooth' })}>Talks</li>
          <li onClick={() => document.getElementById('speakers-section')?.scrollIntoView({ behavior: 'smooth' })}>Speakers</li>
          <li onClick={() => document.getElementById('tickets-section')?.scrollIntoView({ behavior: 'smooth' })}>Tickets</li>
          <li onClick={() => document.getElementById('sponsors-section')?.scrollIntoView({ behavior: 'smooth' })}>Sponsors</li>
          <li onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</li>
        </ul>
        <div className="header-container-register">
          <Link className="register-btn" to="#">
            <div className="register-btn-text">
              <span>Register</span>
            </div>
            <div className="register-btn-arrow">
              <ArrowIcon fill='var(--color-white-primary)' />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderNav;

