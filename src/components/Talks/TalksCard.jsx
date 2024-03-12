import React from 'react';
import './talks.css';
import { useEffect, useState } from 'react';

const TalksCard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/talksData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.map((talk, index) => (
        <div className="talks-card" key={index}>
          <div className="talks-card-title">
            <h3>{talk.title}</h3>
          </div>
          <div className="talks-card-description">
            <p>{talk.description}</p>
          </div>
          {talk.tags && talk.tags.length > 0 && (
            <div className="talks-card-tags">
              {talk.tags.map((tags, index) => (
                <p key={index}>{tags}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default TalksCard;