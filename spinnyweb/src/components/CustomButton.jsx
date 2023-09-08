import React from "react";

const CustomButton = ({ text, backgroundColor, textColor, onClick }) => {
  const buttonStyle = {
    background: backgroundColor || "white",
    border: "none",
    cursor: "pointer",
    zIndex: 1,
    color: textColor || "black",
    fontWeight: "semi-bold",
    margin: "0 10px", // Add some margin between buttons
    width: "200px",
    height: "45px",
    borderRadius: "5px",
  };

  return (
    <button className="media-button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
