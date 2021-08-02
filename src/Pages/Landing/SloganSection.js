import React from "react";
import ActionButton from "../../Components/ActionButton";

function SloganSection(props) {
  return (
    <div id="slogan-section">
      <img
        src={`${process.env.PUBLIC_URL}/images/foot.png`}
        className="bg-img"
      />
      <div className="title">“Fitness is not just about Workout”</div>
      <div className="sub-title">
        Get fresh nutrion-rich smoothies according to your need. Suscribe your
        package and we’ll deliever it to your doorstep everyday.
      </div>
      <ActionButton>Get Started</ActionButton>
    </div>
  );
}

export default SloganSection;
