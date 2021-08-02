import React from "react";

function MissonInfo(props) {
  return (
    <div id="mission-info">
      <div className="info">
        “Our Company Mission Is To Provide The Best Nutritious Food For All Who
        Wants to Stay Healthy.”
      </div>
      <div className="btn">
        <span> Know About Us</span>
        <img
          src={`${process.env.PUBLIC_URL}/images/long-arrow.svg`}
          alt="long-arrow"
          className="long-arrow"
        />
      </div>
    </div>
  );
}

export default MissonInfo;
