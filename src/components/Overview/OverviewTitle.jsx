import React from 'react';
import './overview.css';

const OverviewTitle = () => {

  return (
    <div className="overview-container">
      <div className="overview-container-title">
        <div className="section-subtitle">
          <span>Event overview</span>
        </div>
        <div className="section-title">
          <div><h2>The global</h2></div>
          <div><h2>internet economy</h2></div>
          <div><h2>conference</h2></div>
          <div><h2> </h2></div>
        </div>
      </div>
      <div className="overview-container-description">
        <p>Stripe Sessions brings together business leaders and builders to discuss the most important internet economy trends. In 2024, we’re focusing on what’s possible—and what’s inevitable—as technological advancements change the world and the global economy with it.</p>
      </div>
    </div>
  )
}

export default OverviewTitle;