import React from "react";
import "./sponsors.css";
import { Link } from "react-router-dom";

const SponsorsTitle = () => {

  return (
    <div className="sponsors-container">
      <div className="sponsors-container-title">
        <div className="section-subtitle">
            <span>Speakers</span>
          </div>
          <div className="section-title">
            <div><h2>Meet our</h2></div>
            <div><h2>Sessions partners</h2></div>
          </div>
      </div>
      <div className="sponsors-container-description">
        <p>Interested in becoming a sponsor?<br /><Link to="#" className="link-under">Learn more</Link></p>
      </div>
      <div className="sponsors-container-description">
        <p>Connect with our sponsors on-site to learn how they can take your business to new heights.</p>
      </div>
    </div>
  )
}

export default SponsorsTitle