import React from "react";
import "./FirstSection.css";
import "../App.css";
import "./Button.css";
import { Button } from "./Button";

function FirstSection() {
  return (
    <div className="first-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="first-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button className="btns" buttonSize="btn--large">
          WATCH TRAILER
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;
