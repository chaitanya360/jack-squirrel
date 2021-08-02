import React from "react";
import ActionButton from "../../Components/ActionButton";

function GetStartedSection(props) {
  return (
    <div id="get-started-section">
      <div className="title">How To Get STARTED</div>
      <div className="item" item-count="1">
        <div className="item-title">Sign Up Your Account</div>
        <div className="item-text">
          Open Your JackSquirrel Account With Just Your Basic Information Like
          Name, Age And Gender.
        </div>
      </div>
      <div className="item" item-count="2">
        <div className="item-title">Subscribe to the suitable package</div>
        <div className="item-text">
          Subscribe The Most Suitable Package From Our Selection Which Fits Your
          Need.
        </div>
      </div>
      <div className="item" item-count="3">
        <div className="item-title">Stay tuned with the JackSquirrel.</div>
        <div className="item-text">
          Stay tuned with us, enjoy your meals, earn rewards and live a healthy
          lifestyle
        </div>
      </div>
      <ActionButton className="btn">Get Started</ActionButton>
    </div>
  );
}

export default GetStartedSection;
