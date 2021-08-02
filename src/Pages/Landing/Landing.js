import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import FeaturesSection from "./FeaturesSection";
import GetStartedSection from "./GetStartedSection";
import "./landing.css";
import MissonInfo from "./MissonInfo";
import RewardSystemSection from "./RewardSystemSection";
import SloganSection from "./SloganSection";
import SubscriptionModelSection from "./SubscriptionModelSection";

function Landing(props) {
  return (
    <div>
      <Header />
      <SloganSection />
      <FeaturesSection />
      <SubscriptionModelSection />
      <RewardSystemSection />
      <GetStartedSection />
      <MissonInfo />
      <Footer />
    </div>
  );
}

export default Landing;
