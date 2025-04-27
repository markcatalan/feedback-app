import React from "react";

function Header({ text = "Feedback UI", ...props }) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
