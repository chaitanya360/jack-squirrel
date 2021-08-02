import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import "./components.css";

function Header(props) {
  return (
    <header id="app-header">
      <div id="logo">JackSquirrel</div>
      <div>
        <MenuOutlined id="menu-icon" />
      </div>
    </header>
  );
}

export default Header;
