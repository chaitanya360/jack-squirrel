import { Card } from "antd";
import React from "react";

function RewardCard({ src, text }) {
  return (
    <div id="reward-card">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/${src}`}
          alt="reward_card_img"
          className="reward-card-img"
        />
      </div>
      <div className="text">{text}</div>
    </div>
  );
}

export default RewardCard;
