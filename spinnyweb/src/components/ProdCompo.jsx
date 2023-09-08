import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sport from "./assets/img/model.avif";
import BuyCarComponent from "./BuyCarComponent ";
import { Link } from "react-router-dom";

function ProdCompo() {
  const style = {
    width: "300px",
    margin: "0 5px", // Add margin to columns
    padding: "0 5px", // Add padding to container to compensate for margin
  };

  const listStyle = {
    margin: "7.5px",
    font: "bold ",
  };

  return (
    <Container style={{ display: "flex", justifyContent: "center", position:"static" }}>
      <Row>
        <Col md={3}>
          <div style={style}>
            <img src={Sport} alt="Model" />
            <p style={{ textAlign: "center" }}>Model Name</p>
          </div>
        </Col>

        <Col md={3}>
          <div style={style}>
            <img src={Sport} alt="Model" />
            <p style={{ textAlign: "center" }}>Model Name</p>
          </div>
        </Col>

        <Col md={3}>
          <div style={style}>
            <img src={Sport} alt="Model" />
            <p style={{ textAlign: "center" }}>Model Name</p>
          </div>
        </Col>

        <Col md={1}>
          <div
            style={{
              borderLeft: "1px solid #ccc",
              height: "100%",
              marginLeft: "10px",
            }}
          ></div>
        </Col>

        <Col md={2}>
          <ul>
            <li style={listStyle}>
              <b>Inventory</b>
            </li>
            <li style={listStyle}>
              <Link to="/buy-car">
                <b>Used Cars</b>
              </Link>
            </li>
            <li style={listStyle}>
              <Link to="/prod-info"><b>Demo Drive</b></Link>
            </li>
            <li style={listStyle}>
              <b>Trade-in</b>
            </li>
            <li style={listStyle}>
              <b>Compare</b>
            </li>
            <li style={listStyle}>
              <b>Fleet</b>
            </li>
            <li style={listStyle}>
              <b>Cybertruck</b>
            </li>
            <li style={listStyle}>
              <b>Semi</b>
            </li>
            <li style={listStyle}>
              <b>Roadster</b>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ProdCompo;
