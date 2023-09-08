import React from "react";
import video4 from "./assets/video4.mp4";
import image2 from "./assets/img/image2.jpg";
import image3 from "./assets/img/image3.jpg";
import image from "./assets/img/image.jpg";
import Landingpagehead from "./Landingpagehead";
import CustomButton from "./CustomButton"; // Import the CustomButton component

function Mainbody() {
  const mediaStyle = {
    width: "100%",
    position: "relative",
  };

  const mediaContainerStyle = {
    position: "relative",
  };

  const buttonContainerStyle = {
    position: "absolute",
    bottom: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div>
      <Landingpagehead></Landingpagehead>

      {/* Video with Button */}
      <div className="media-container" style={mediaContainerStyle}>
        <video autoPlay style={mediaStyle}>
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={buttonContainerStyle}>
          <CustomButton text="Buy Car" backgroundColor="white" textColor="black" />
          <CustomButton text="Demo Drive" backgroundColor="black" textColor="white" />
        </div>
      </div>

      {/* Image 2 with Button */}
      <div className="media-container" style={mediaContainerStyle}>
        <img src={image2} style={mediaStyle} alt="Image 2" />
        <div style={buttonContainerStyle}>
          <CustomButton text="Buy Car" backgroundColor="white" textColor="black" />
          <CustomButton text="Demo Drive" backgroundColor="black" textColor="white" />
        </div>
      </div>

      {/* Image 3 with Button */}
      <div className="media-container" style={mediaContainerStyle}>
        <img src={image3} style={mediaStyle} alt="Image 3" />
        <div style={buttonContainerStyle}>
          <CustomButton text="Buy Car" backgroundColor="white" textColor="black" />
          <CustomButton text="Demo Drive" backgroundColor="black" textColor="white" />
        </div>
      </div>

      {/* Image with Button */}
      <div className="media-container" style={mediaContainerStyle}>
        <img src={image} style={mediaStyle} alt="Image" />
        <div style={buttonContainerStyle}>
          <CustomButton text="Buy Car" backgroundColor="white" textColor="black" />
          <CustomButton text="Demo Drive" backgroundColor="black" textColor="white" />
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
