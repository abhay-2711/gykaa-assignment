import React from "react"
import "./tickets.css"
import { Link } from "react-router-dom"
import ArrowIcon from "../Icons/ArrowIcon"

const MainTicket = () => {

  return (
    <div className="main-ticket-container">
      <div className="main-ticket-left">
        <picture className="main-ticket-left-img">
          <source media="(min-width: 940px)" srcSet="/assets/img/wave.png 2x" />
          <img src="/assets/img/wave-Y.png" alt="Wave" />
        </picture>
        <div className="main-ticket-left-tags">
          <p><span className="live"></span> Main Event</p>
          <p>$999</p>
        </div>
        <div className="main-ticket-left-subtitle">
          <p>Early-bird pricing ends February 23</p>
        </div>
        <div className="main-ticket-left-title">
          <h2>Sessions conference <i>pass</i></h2>
        </div>
      </div>
      <div className="main-ticket-right">
        <div className="main-ticket-right-activities">
          <p>Keynotes</p>
          <p>Breakout talks</p>
          <p>Expo hall</p>
          <p>Networking opportunities and evening events</p>
          <p>On-demand access to recordings after event</p>
        </div>
        <div className="main-ticket-right-register">
          <Link className="register-btn" to="#">
            <div className="register-btn-text">
              <span>Register</span>
            </div>
            <div className="register-btn-arrow">
              <ArrowIcon fill='var(--color-white-primary)' />
            </div>
          </Link>
        </div>
        <div className="main-ticket-right-barcode">
          <div className="barcode-img">
            <div></div>
          </div>
          <div className="barcode-span">
            <span>2</span>
            <span>Stripe Sessions</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainTicket