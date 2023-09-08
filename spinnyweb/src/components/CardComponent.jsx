import React, { useState } from "react";
import image1 from "./assets/img/carimage.png";

function CardComponent() {
  const headText = {
    fontSize: "22.5px",
    fontWeight: "bold",
  };
  const headmax = {
    fontSize: "15px",
    paddingRight: "45px",
  };

  const headmin = {
    fontSize: "12.5px",
    paddingRight: "20px",
  };
  const button = {
    width: "385px",
    height: "50px",
    border: "1px solid black",
    fontSize: "20px",
    fontWeight: "bold"
    
  };
  const subheadstyle = {
    fontWeight: "Bold",
    fontSize: "25px",
    textAlign: "center",
    marginRight: "10px",
  };

  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };
  return (
    <div style={{ display: "flex", marginTop: "90px", marginLeft: "40px" }}>
      <card style={{ marginRight: "40px" }}>
        <div className="card">
          <div className="card-header  text-black">
            <div style={{ display: "flex" }}>
              <div>
                <p style={headText}>2019 Model 3</p>
                <p style={headmax}>
                  Model 3 Standard Range Plus Rear-Wheel Drive
                </p>
                <p style={headmin}>27,278 mile odometer Lyndhurst, OH</p>
              </div>
              <div>
                <p style={headText}>$31,700</p>
                <p style={headmax}>$484 /mo</p>
                <p style={headmin}>Est. Transport Fee: $500</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <img
              src={image1}
              style={{
                height: "25vh",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            ></img>
          </div>
          <div className="card-footer bg-light">
            <button style={button}>View Details</button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <h1 style={subheadstyle}>
                  240<span style={{ fontSize: "15px" }}> mi</span>
                </h1>
                <p style={{ textAlign: "center" }}>Range</p>
              </div>
              <div style={{ marginRight: "10px" }}>
                <h1 style={subheadstyle}>
                  140<span style={{ fontSize: "15px" }}> mph</span>
                </h1>
                <p style={{ textAlign: "center" }}>Top Speed</p>
              </div>
              <div style={{ marginRight: "10px" }}>
                <h1 style={subheadstyle}>
                  5.3<span style={{ fontSize: "15px" }}> sec</span>
                </h1>
                <p style={{ textAlign: "center", fontSize: "15px" }}>
                  0-60 mph
                </p>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div style={{ paddingLeft: "15px" }}>
                <ul>
                  <li>Solid Black Paint</li>
                  <li>18’’ Aero Wheels</li>
                  <li>All Black Premium Interior</li>
                </ul>
              </div>
              <div>
                <ul style={{ paddingLeft: "90px" }}>
                  <li>Autopilot</li>
                  <li>Previously Repaired</li>
                  <li>30-Day Premium Connectivity Trial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </card>
      <card style={{ marginRight: "40px" }}>
        <div className="card">
          <div className="card-header  text-black">
            <div style={{ display: "flex" }}>
              <div>
                <p style={headText}>2019 Model 3</p>
                <p style={headmax}>
                  Model 3 Standard Range Plus Rear-Wheel Drive
                </p>
                <p style={headmin}>27,278 mile odometer Lyndhurst, OH</p>
              </div>
              <div>
                <p style={headText}>$31,700</p>
                <p style={headmax}>$484 /mo</p>
                <p style={headmin}>Est. Transport Fee: $500</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <img
              src={image1}
              style={{
                height: "25vh",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            ></img>
          </div>
          <div className="card-footer bg-light">
            <button style={button} >View Details</button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
              }}
            >
              <div style={{ marginRight: "10px" }}>
                <h1 style={subheadstyle}>
                  240<span style={{ fontSize: "15px" }}> mi</span>
                </h1>
                <p style={{ textAlign: "center" }}>Range</p>
              </div>
              <div style={{ marginRight: "10px" }}>
                <h1 style={subheadstyle}>
                  140<span style={{ fontSize: "15px" }}> mph</span>
                </h1>
                <p style={{ textAlign: "center" }}>Top Speed</p>
              </div>
              <div style={{ marginRight: "10px" }}>
                <h1 style={subheadstyle}>
                  5.3<span style={{ fontSize: "15px" }}> sec</span>
                </h1>
                <p style={{ textAlign: "center", fontSize: "15px" }}>
                  0-60 mph
                </p>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div style={{ paddingLeft: "15px" }}>
                <ul>
                  <li>Solid Black Paint</li>
                  <li>18’’ Aero Wheels</li>
                  <li>All Black Premium Interior</li>
                </ul>
              </div>
              <div>
                <ul style={{ paddingLeft: "90px" }}>
                  <li>Autopilot</li>
                  <li>Previously Repaired</li>
                  <li>30-Day Premium Connectivity Trial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </card>
    </div>
  );
}

export default CardComponent;
