import React from "react";
import image from "./assets/img/carimage.png";
import Landingpagehead from "./Landingpagehead";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductInfo() {
  const headstyle = {
    fontWeight: "500",
    fontSize: "35px",
    textAlign: "center",
    marginBottom: "10px",
  };

  const boldstyle = {
    fontWeight: "semi-bold",
    fontSize: "20px",
    textAlign: "center",
  };

  const subheadstyle = {
    fontWeight: "Bold",
    fontSize: "25px",
    textAlign: "center",
    marginRight: "10px",
  };

  const microtext = {
    fontSize: "15px",
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingRight: "25px",
  };

  const buttonstyleleft = {
    width: "600px",
    height: "85px",
    borderRadius: "15px 15px 0 0",
    backgroundColor: "#dadada",
    fontSize: "17px",
    fontWeight: "semi-bold",
  };

  return (
    <div>
      <Navbar bg="transparent">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <b>Canarys</b>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ display: "flex" }}>
      <div
  style={{
    width: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    height: "90vh", // Ensure the container takes the full viewport height
  }}
>
  <div>
    <img style={{ height: "50vh" }} src={image} alt="Centered Image" />
  </div>
  <div>
    <button style={buttonstyleleft}>
      <span>$28,000 Vehicle price</span>{" "}
      <span style={{ marginRight: "10px", marginLeft: "10px" }}>|</span>{" "}
      <span>$25,000 After Probable Savings</span>
    </button>
  </div>
</div>


        <div
          style={{
            width: "35%",
            overflowY: "scroll",
            height: "90vh",
            paddingRight: "20px",
          }}
        >
          <div>
            <p style={headstyle}>2019 Model 3</p>
            <p style={boldstyle}>
              Model 3 Standard Range Plus Rear-Wheel Drive
            </p>
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
            <p style={microtext}>
              Range figures based on testing new vehicles to EPA standards.
              Vehicle range may change depending on battery age and condition,
              vehicle configuration, driving style, environmental and climate
              conditions.
            </p>
          </div>
          <div style={{ marginTop: "100px" }}>
            <p style={headstyle}>Vehicle Details</p>
            <ul style={{ marginLeft: "60px" }}>
              <li style={{ marginBottom: "10px" }}>Used Vehicle</li>
              <li style={{ marginBottom: "10px" }}>47,612 mile odometer</li>
              <li style={{ marginBottom: "10px" }}>VIN 5YJ3E1EA6KF434563</li>
            </ul>
          </div>

          <div style={{ marginTop: "100px" }}>
            <p style={headstyle}>Key Features</p>
            <ul style={{ marginLeft: "60px" }}>
              <li style={{ marginBottom: "10px" }}>Pearl White Paint</li>
              <li style={{ marginBottom: "10px" }}>19’’ Sport Wheels</li>
              <li style={{ marginBottom: "10px" }}>
                All Black Partial Premium Interior
              </li>
              <li style={{ marginBottom: "10px" }}>
                Front and Rear Heated Seats
              </li>
              <li style={{ marginBottom: "10px" }}>Enhanced Autopilot</li>
              <li style={{ marginBottom: "10px" }}>
                30-Day Premium Connectivity Trial
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "100px" }}>
            <p style={headstyle}>Conditions</p>
            <ul style={{ marginLeft: "60px" }}>
              <li style={{ marginBottom: "10px" }}>
                No Reported Accidents/Damage
              </li>
              <li style={{ marginBottom: "10px" }}>
                Meets Tesla's mechanical requirements
              </li>
              <li style={{ marginBottom: "10px" }}>
                Will exhibit cosmetic imperfections
              </li>
              <li style={{ marginBottom: "10px" }}>
                May be subject to an open recall
              </li>
              <li style={{ marginBottom: "10px" }}>Autocheck History</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
