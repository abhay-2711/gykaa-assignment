import React from "react";
import "./overview.css";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import GlobeCountIcon from "../Icons/GlobeCountIcon";

const OverviewMarquee = () => {

  const [targetDate, setTargetDate] = useState(new Date("2024-04-23T18:00:00Z"));

  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      let difference = targetDate.getTime() - now.getTime();

      if (difference < 0) {
        const newTargetDate = new Date();
        newTargetDate.setFullYear(now.getFullYear() + 1);
        setTargetDate(newTargetDate);
        difference = newTargetDate.getTime() - now.getTime();
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Marquee className="overview-marquee-container" autoFill={true}>
      <div className="marquee-card">
        <div className="marquee-card-number">
          <p>{countdown.days}</p>
          <span>days</span>
        </div>
        <div className="marquee-card-number">
          <p>{countdown.hours}</p>
          <span>hours</span>
        </div>
        <div className="marquee-card-number">
          <p>{countdown.minutes}</p>
          <span>minutes</span>
        </div>
        <div className="marquee-card-number">
          <p>{countdown.seconds}</p>
          <span>seconds</span>
        </div>
        <div className="marquee-card-img">
          <GlobeCountIcon stroke={"#FFFFFF"} />
        </div>
      </div>
    </Marquee>
  );
}

export default OverviewMarquee;