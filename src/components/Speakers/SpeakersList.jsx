import React from "react";
import './speakers.css';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LinkedInIcon from "../Icons/LinkedInIcon"

const SpeakersList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/speakersData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, [])

  return (
    <div className="speakers-list">
      {data.map((speaker, index) => (
        <div className="speakers-list-card" key={index}>
          <div className="speakers-list-card-info">
            <div className="speakers-list-card-tags">
              <p><span className="live"></span> {speaker.company}</p>
              <Link to={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fill="#221B35" />
              </Link>
            </div>
            <div className="speakers-list-card-title">
              <h3>{speaker.name}</h3>
              <p>{speaker.jobtitle}</p>
            </div>
          </div>
          <div className="speakers-list-card-photo">
            <img src={speaker.photo} alt={speaker.name} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SpeakersList