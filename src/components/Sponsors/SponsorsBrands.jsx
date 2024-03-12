import React from "react";
import "./sponsors.css";
import { Link } from "react-router-dom";
import AccordIcon from "../Icons/Brands/AccordIcon";
import CheckIcon from "../Icons/Brands/CheckIcon";
import ClerkIcon from "../Icons/Brands/ClerkIcon";
import KlarnaIcon from "../Icons/Brands/KlarnaIcon";
import MyersHolumIcon from "../Icons/Brands/MyersHolumIcon";
import PaypackIcon from "../Icons/Brands/PaypackIcon";
import PilotIcon from "../Icons/Brands/PilotIcon";
import PulleyIcon from "../Icons/Brands/PulleyIcon";
import ShopwareIcon from "../Icons/Brands/ShopwareIcon";
import StunningIcon from "../Icons/Brands/StunningIcon";
import SyftIcon from "../Icons/Brands/SyftIcon";
import VennIcon from "../Icons/Brands/VennIcon";
import AffirmIcon from "../Icons/Brands/AffirmIcon";
import AmericanExpressIcon from "../Icons/Brands/AmericanExpressIcon";
import ThoughtWorksIcon from "../Icons/Brands/ThoughtWorksIcon";
import WorkOsIcon from "../Icons/Brands/WorkOsIcon";
import AcodeiIcon from "../Icons/Brands/AcodeiIcon";
import CIcon from "../Icons/Brands/CIcon";
import GripTapeIcon from "../Icons/Brands/GripTapeIcon";
import PIcon from "../Icons/Brands/PIcon";
import RevenueCatIcon from "../Icons/Brands/RevenueCatIcon";

const SponsorsBrands = () => {
  return (
    <div className="sponsors-brands-container">
      <div className="sponsors-brands-container-tag">
        <p>Platinum</p>
      </div>
      <div className="sponsors-brands-container-brands platinum">
        <Link className="single-brand-container" to="https://clerk.com/">
          <ClerkIcon />
        </Link>
        <Link className="single-brand-container" to="https://www.klarna.com/">
          <KlarnaIcon />
        </Link>
      </div>
      <div className="sponsors-brands-container-tag">
        <p>Gold</p>
      </div>
      <div className="sponsors-brands-container-brands gold">
        <Link className="single-brand-container" to="https://www.checkhq.com/">
          <AffirmIcon />
        </Link>
        <Link
          className="single-brand-container"
          style={{ borderRight: "1px solid #221B35" }}
          to="https://www.checkhq.com/"
        >
          <AmericanExpressIcon />
        </Link>
        <Link
          className="single-brand-container"
          style={{ borderRight: "1px solid #221B35" }}
          to="https://www.checkhq.com/"
        >
          <CheckIcon />
        </Link>
        <Link
          className="single-brand-container"
          style={{ borderRight: "1px solid #221B35" }}
          to="https://stunning.co/"
        >
          <StunningIcon />
        </Link>
        <Link
          className="single-brand-container"
          style={{ borderRight: "1px solid #221B35" }}
          to="https://www.checkhq.com/"
        >
          <ThoughtWorksIcon />
        </Link>
        <Link className="single-brand-container" to="https://www.checkhq.com/">
          <WorkOsIcon />
        </Link>
      </div>
      <div className="sponsors-brands-container-tag">
        <p>Silver</p>
      </div>
      <div className="sponsors-brands-container-brands silver">
        <Link className="single-brand-container" to="https://myersholum.com/">
          <MyersHolumIcon />
        </Link>
        <Link className="single-brand-container" to="https://www.shopware.com/">
          <ShopwareIcon />
        </Link>
      </div>
      <div className="sponsors-brands-container-tag">
        <p>Startup</p>
      </div>
      <div className="sponsors-brands-container-brands startup">
        <div className="three-brand-container">
          <Link className="single-brand-container" to="https://inaccord.com/">
            <AccordIcon />
          </Link>
          <Link className="single-brand-container" to="https://paypack.ai/">
            <AcodeiIcon />
          </Link>
          <Link className="single-brand-container" style={{ borderRight: "1px solid #221B35" }} to="https://pilot.com/" >
            <CIcon />
          </Link>
          <Link className="single-brand-container" to="https://pilot.com/">
            <GripTapeIcon />
          </Link>
        </div>
      </div>
      <div className="sponsors-brands-container-brands startup">
        <div className="three-brand-container">
          <Link className="single-brand-container" to="https://paypack.ai/">
            <PaypackIcon />
          </Link>
          <Link className="single-brand-container" to="https://pilot.com/">
            <PilotIcon />
          </Link>
          <Link className="single-brand-container" to="https://pulley.com/">
            <PulleyIcon />
          </Link>
        </div>
      </div>
      <div className="sponsors-brands-container-brands startup">
        <div className="three-brand-container">
          <Link className="single-brand-container" to="https://inaccord.com/">
            <PIcon />
          </Link>
          <Link className="single-brand-container" to="https://paypack.ai/">
            <RevenueCatIcon />
          </Link>
          <Link className="single-brand-container" style={{ borderRight: "1px solid #221B35" }} to="https://pilot.com/">
            <SyftIcon />
          </Link>
          <Link className="single-brand-container" to="https://pilot.com/">
            <VennIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SponsorsBrands;
