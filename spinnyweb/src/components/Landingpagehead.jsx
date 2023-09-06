import React, { useState } from "react";
import { Modal, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHeart,
  faMobile,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link for navigation

function Landingpagehead() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                onClick={() => setShowModal(true)}
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
            <li>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy-car"> {/* Use Link to navigate */}
                <FontAwesomeIcon /><b>Buy Car</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell-car"> {/* Use Link to navigate */}
                <FontAwesomeIcon /><b>Sell Car</b>
              </Link>
            </li>
<li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faHeart} /> Favorite
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faMobile} /> 901-914-5827
              </a>
            </li>
            {/* ...Other menu items... */}
          </ul>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose} centered dialogClassName="custom-modal">
        {/* Modal content */}
      </Modal>
    </nav>
  );
}

export default Landingpagehead;
