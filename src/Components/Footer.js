import React from "react";
import {
  RightOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterCircleFilled,
} from "@ant-design/icons";

const InlineBtn = ({ text }) => (
  <div id="inline-btn">
    <div className="text">{text}</div>
    <RightOutlined className="right-arrow" />
  </div>
);

const SocialLogins = () => (
  <div id="social-logins">
    <div className="social-btn-container">
      <FacebookOutlined className="social-btn" />
    </div>
    <div className="social-btn-container">
      <InstagramOutlined className="social-btn" />
    </div>
    <div className="social-btn-container">
      <TwitterCircleFilled className="social-btn" />
    </div>
  </div>
);

function Footer(props) {
  return (
    <div id="footer">
      <div className="btn-container">
        <InlineBtn text="ABOUT US" />
        <InlineBtn text="TERMS OF USE" />
        <InlineBtn text="PRIVECY POLICY" />
        <InlineBtn text="TELL US YOUR IDEA" />
      </div>
      <SocialLogins />
      <div className="logo">JackSquirrel</div>
      <div className="intro">
        JackSquirrel is a subscription based healthy Smoothies delivery site,
        Which serves , healthy meals and diet food packages to hostel students.
        <div className="greetings">Welcome To JackSquirrel.</div>
      </div>
    </div>
  );
}

export default Footer;
