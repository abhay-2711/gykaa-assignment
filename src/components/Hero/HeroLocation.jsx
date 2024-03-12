import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import ArrowIcon from "../Icons/ArrowIcon";

const HeroLocation = () => {

  return (
    <div className="hero-location">
      <div className="hero-location-title">
        <div className="section-subtitle">
          <span>Location</span>
        </div>
        <div className="section-title">
          <div><h2>San Francisco,</h2></div>
          <div><h2><i>California</i></h2></div>
        </div>
      </div>
      <Link to="#" className="hero-location-register">
        <div className="register-btn-text">
          <span>Register</span>
        </div>
        <div className="register-btn-arrow">
          <ArrowIcon fill='var(--color-black-primary)' />
        </div>
      </Link>
      <span className="hero-location-coordinates">37.7830593° N, 122.404101° W</span>
    </div>
  )
}

export default HeroLocation;