import React from "react";
import "./talks.css";
import TalksCard from "./TalksCard";
import TalksTitle from "./TalksTitle";

const Talks = () => {

  return (
    <section className="talks-container" id="talks-section">
      <TalksTitle />
      <div className="talks-cards">
        <TalksCard />
      </div>
    </section>
  )
}

export default Talks;