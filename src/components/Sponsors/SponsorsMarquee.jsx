import React from "react";
import "./sponsors.css";
import Marquee from "react-fast-marquee";
import Asterisk2Icon from "../Icons/Asterisk2Icon";

const SponsorsMarquee = () => {

  return (
    <Marquee className="sponsors-marquee-container" autoFill={true}>
      <div className="marquee-card">
        <div className="marquee-card-title">
          <p>Sponsors</p>
        </div>
        <div className="marquee-card-img">
          <Asterisk2Icon stroke="#221B35" />
        </div>
      </div>
    </Marquee>
  );
}

export default SponsorsMarquee