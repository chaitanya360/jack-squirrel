import React from "react";
import RewardCard from "./RewardCard";

function RewardSystemSection(props) {
  return (
    <div id="reward-system-section">
      <div className="title">OUR REWARD SYSTEME</div>
      <div className="reward-card-container">
        <RewardCard
          src="reward-compete-card.png"
          text="COMPLETE THE INTRESTING CHALLENGES REGULARLY POSTED BY US."
        />
        <RewardCard
          src="reward-coupons-card.svg"
          text="AFTER COMPLETION OF CHALLENGE EVERY MEMBER WILL EARN FITPOINTS."
        />
        <RewardCard
          src="reward-fitpoints-card.svg"
          text="REDEEM YOUR FITPOINTS AND GET EXCITING COUPONS."
        />
      </div>
    </div>
  );
}

export default RewardSystemSection;
