import React from "react";
import "./hero.css";
import HeroLocation from "./HeroLocation";
import HeroTitle from "./HeroTitle";

const Hero = () => {

  return (
    <div id="hero">
      <HeroTitle />
      <HeroLocation />
    </div>
  )
}

export default Hero;