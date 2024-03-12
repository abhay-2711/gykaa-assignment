import React from 'react';
import './speakers.css';

const SpeakersTitle = () => {

  return (
    <div className="speakers-container">
      <div className="speakers-container-title">
        <div className="section-subtitle">
            <span>Speakers</span>
          </div>
          <div className="section-title">
            <div><h2>See the</h2></div>
            <div><h2><i>lineup</i></h2></div>
          </div>
      </div>
      <div className="speakers-container-description">
        <p>Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more speaker announcements.</p>
      </div>
    </div>
  )
}

export default SpeakersTitle