import React from "react";
import "./overview.css";
import OverviewCarousel from "./OverviewCarousel";
import OverviewMarquee from "./OverviewMarquee";
import OverviewTitle from "./OverviewTitle";

const Overview = () => {

  return (
    <section id="overview-section">
      <OverviewTitle />
      <OverviewCarousel />
      <OverviewMarquee />
    </section>
  )
}

export default Overview;