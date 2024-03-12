import React from 'react';
import './tickets.css';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import ArrowIcon from '../Icons/ArrowIcon';
import AsteriskIcon from '../Icons/AsteriskIcon';

const PreTicket = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data/ticketsData.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="pretickets-section">
      <div className="pretickets-container">
        {data.map((ticket, index) => (
          <div className="pretickets-card" key={index}>
            <div className="pretickets-card-tags">
              <p><span className="live"></span>{ticket.tag}</p>
              <p>{ticket.price}</p>
            </div>
            <div className="pretickets-card-title">
              <h3>{ticket.title}</h3>
            </div>
            <div className="pretickets-card-activities">
              {ticket.activities.map((activities, index) => (
                <p key={index}>{activities}</p>
              ))}
            </div>
            <div className="pretickets-card-register">
              <Link className="register-btn" to="#">
                <div className="register-btn-text">
                  <span>Learn more</span>
                </div>
                <div className="register-btn-arrow">
                  <ArrowIcon fill='var(--color-white-primary)' />
                </div>
              </Link>
            </div>
            <Marquee className="pretickets-card-marquee" autoFill={true}>
              {ticket.marquee.map((marquee, index) => (
                <div key={index}>
                  <p>{marquee}</p>
                  <AsteriskIcon stroke='#FFFFFF'/>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PreTicket;