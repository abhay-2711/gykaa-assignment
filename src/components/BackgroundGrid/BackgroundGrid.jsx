import React from 'react';
import './backgroundGrid.css';

const BackgroundGrid = () => {
  const verticalLines = new Array(30).fill(null);
  const horizontalLines = new Array(400).fill(null);

  return (
    <div className="background-grid">
      <div className="background-grid-vertical">
        {verticalLines.map((_, index) => (
          <div key={`verticalLine-${index}`} className="background-grid-verticalLine"></div>
        ))}
      </div>
      <div className="background-grid-horizontal">
        {horizontalLines.map((_, index) => (
          <div key={`horizontalLine-${index}`} className="background-grid-horizontalLine"></div>
        ))}
      </div>
    </div>
  )
}

export default BackgroundGrid;