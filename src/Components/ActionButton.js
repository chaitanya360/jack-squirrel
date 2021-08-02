import React from "react";

function ActionButton({ children, className }) {
  return (
    <div id="action-btn" className={className}>
      {children}
    </div>
  );
}

export default ActionButton;
