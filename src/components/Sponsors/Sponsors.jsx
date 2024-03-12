import React from "react";
import "./sponsors.css";
import SponsorsBrands from "./SponsorsBrands";
import SponsorsMarquee from "./SponsorsMarquee";
import SponsorsTitle from "./SponsorsTitle";

const Sponsors = () => {
  return (
    <section id="sponsors-section">
      <SponsorsMarquee />
      <SponsorsTitle />
      <SponsorsBrands />
    </section>
  )
}

export default Sponsors