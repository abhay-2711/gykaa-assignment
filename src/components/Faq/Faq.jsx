import React from "react";
import "./faq.css";
import FaqCard from "./FaqCard";
import FaqTitle from "./FaqTitle";

const Faq = () => {

  return (
    <section id="faq-section">
      <FaqTitle />
      <div className="faq-cards">
        <FaqCard />
      </div>
    </section>
  )
}

export default Faq