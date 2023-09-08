import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ProdCompo from "./ProdCompo";
import { Link } from "react-router-dom";

function Landingpagehead() {
  const [showContent, setShowContent] = useState(false);

  const style = {
    color: "black",
  };

  const handleShowContent1 = () => {
    setShowContent(true);
  };

  const handleCloseContent1 = () => {
    setShowContent(false);
  };

  const navbarStyle = {
    backgroundColor: showContent ? "white" : "transparent", // Set navbar background color based on showContent state
    transition: "background-color 0.3s ease", // Add a smooth transition effect
  };

  const contentStyle = {
    position: "fixed",
    top: 0, // Adjust the top position to match the navbar's height
    left: 0,
    width: "100%",
    height: "75vh", // Set content height to cover the entire screen
    backgroundColor: "white", // White background
    display: showContent ? "block" : "none", // Show/hide the content based on showContent state
    zIndex: "999", // Ensure it's on top of other content
  };

  const body ={
    marginTop: "60px"
  }

  return (
    <div>
      <Navbar
        bg="transparent"
        expand="lg"
        fixed="top"
        style={navbarStyle}
        onMouseEnter={handleShowContent1}
        onMouseLeave={handleCloseContent1}
      >
        <Container>
          <Navbar.Brand><Link to="/"><b>Canarys</b></Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="active" style={style}         >
                <b>Vehicles</b>
              </Nav.Link>
              <Nav.Link href="#" className="active" style={style}>
                <b>Buy Car</b>
              </Nav.Link>
              <Nav.Link href="#" className="active" style={style}>
                <b>Sell Car</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="content"
        onMouseEnter={handleShowContent1}
        onMouseLeave={handleCloseContent1}
        style={contentStyle}
      >
        <div style={body}>
          <ProdCompo></ProdCompo>
        </div>
      </div>
    </div>
  );
}

export default Landingpagehead;
