import React, { useState } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMountain,
  faMonument,
  faHelicopter,
  faTree,
  faBuilding,
  faMapMarker,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function DropdownModal({ showModal, handleModalClose }) {
  // Define an array of all cities with their names and icons
  const allCities = [
    { name: "Mumbai", icon: faCity },
    { name: "Delhi", icon: faHelicopter },
    { name: "Bangalore", icon: faMountain },
    { name: "Kolkata", icon: faMonument },
    { name: "Chennai", icon: faTree },
    { name: "Hyderabad", icon: faBuilding },
    { name: "Pune", icon: faMapMarker },
    { name: "Ahmedabad", icon: faMapMarker },
    { name: "Jaipur", icon: faMapMarker },
    { name: "Lucknow", icon: faMapMarker },
    // Add more cities as needed
  ];

  const additionalCities = [
    { name: "New York", icon: faCity },
    { name: "Los Angeles", icon: faCity },
    { name: "Chicago", icon: faCity },
    { name: "Houston", icon: faCity },
    { name: "Phoenix", icon: faCity },
    { name: "Philadelphia", icon: faCity },
    { name: "San Antonio", icon: faCity },
    { name: "San Diego", icon: faCity },
    { name: "Dallas", icon: faCity },
    { name: "San Jose", icon: faCity },
    { name: "Austin", icon: faCity },
    { name: "Jacksonville", icon: faCity },
    { name: "Indianapolis", icon: faCity },
    { name: "San Francisco", icon: faCity },
    { name: "Columbus", icon: faCity },
    { name: "Charlotte", icon: faCity },
    { name: "Seattle", icon: faCity },
    { name: "Denver", icon: faCity },
    { name: "Washington", icon: faCity },
    { name: "Boston", icon: faCity },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState(allCities);

  // Function to handle the search
  const handleSearch = () => {
    const filtered = [...allCities, ...additionalCities].filter((city) =>
      city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  // Split filtered cities into rows with 5 cities each
  const cityRows = [];
  for (let i = 0; i < filteredCities.length; i += 5) {
    cityRows.push(filteredCities.slice(i, i + 5));
  }

  return (
    <Modal show={showModal} onHide={handleModalClose} centered dialogClassName="custom-modal">
      <Modal.Header>
        <Modal.Title>Select Your City Here</Modal.Title>
        <Button variant="link" className="close-button" onClick={handleModalClose}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search for cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyUp={handleSearch} // Trigger the search on keyup
          />
        </Form.Group>
        {cityRows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((city, index) => (
              <Col key={index} className="text-center">
                <div className="icon-container">
                  <FontAwesomeIcon icon={city.icon} size="3x" className="icon" />
                </div>
                <div className="city-name">{city.name}</div>
              </Col>
            ))}
          </Row>
        ))}
      </Modal.Body>
    </Modal>
  );
}

export default DropdownModal;
