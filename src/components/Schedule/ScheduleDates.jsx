import React from 'react';
import './schedule.css';
import { useEffect, useState } from 'react';

const ScheduleDates = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/scheduleData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="dates-container">
      {data.map((item, index) => (
        <div className="dates-card" key={index}>
          <div className="dates-card-count">
            <p>Day 0{index + 1}</p>
          </div>
          <div className="dates-card-date">
            <h2 className="dates-card-month">{item.month}</h2>
            <h2 className="dates-card-day">{item.day}</h2>
          </div>
          <div className="dates-card-activities">
            {item.activities.map((activity, index) => (
              <div key={index}>
                <p><b>{activity.title}</b></p>
                <p><i>{activity.time}</i></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScheduleDates;