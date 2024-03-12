import React from "react";
import "./tickets.css";
import MainTicket from "./MainTicket";
import PreTicket from "./PreTicket";
import TicketsTitle from "./TicketsTitle";

const Tickets = () => {

  return (
    <section id="tickets-sections">
      <TicketsTitle />
      <MainTicket />
      <PreTicket />
    </section>
  )
}

export default Tickets