import React from "react";
import "./speakers.css"
import SpeakersCarousel from "./SpeakersCarousel";
import SpeakersList from "./SpeakersList";
import SpeakersTitle from "./SpeakersTitle";

const Speakers = () => {

  return (
    <section id="speakers-section">
      <SpeakersTitle />
      <SpeakersCarousel />
      <SpeakersList />
    </section>
  )
}

export default Speakers