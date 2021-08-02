import React from "react";

function FeaturesSection(props) {
  return (
    <div id="features-section">
      <img
        src={`${process.env.PUBLIC_URL}/images/hand-colddrink.png`}
        className="bg-img"
      />
      <div className="title">What Do You Get</div>
      <div className="feature">
        <div className="feature-title">Nutrition-Rich smoothies</div>
        <div className="feature-detail">
          We proivide you the best nutritious Smoothies according to your need.
          Also You’ll get new variety everyday.
        </div>
      </div>
      <div className="feature">
        <div className="feature-title">AT MOST AFFORDABLE PRICE</div>
        <div className="feature-detail">
          We offer the best subscription packages at the lowest price possible
          so that all of you can enjoy it.
        </div>
      </div>
      <div className="feature">
        <div className="feature-title">Free Delivery Every Day, Everywhere</div>
        <div className="feature-detail">
          Get Free Delivery everyday at your doorstep in your given time.
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
