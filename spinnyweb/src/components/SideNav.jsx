import React from "react";

function SideNav() {
  return (
    <div
      className="sidenav"
      style={{
        marginTop: "60px",
        paddingLeft: "50px",
        borderRight: "1px solid",
      }}
    >
      <div className="mb-3">
        <label htmlFor="zipCode" className="form-label fw-bold">
          Registration Zip Code
        </label>
        <input
          type="text"
          className="form-control"
          id="zipCode"
          style={{ width: "calc(100% - 50px)" }} // Reduce input width by 10px
          placeholder="Enter Zip Code"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Models</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="model1"
            name="models"
            value="Model 1"
          />
          <label className="form-check-label" htmlFor="model1">
            Model 1
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="model2"
            name="models"
            value="Model 2"
          />
          <label className="form-check-label" htmlFor="model2">
            Model 2
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="model3"
            name="models"
            value="Model 3"
          />
          <label className="form-check-label" htmlFor="model3">
            Model 3
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="model4"
            name="models"
            value="Model 4"
          />
          <label className="form-check-label" htmlFor="model4">
            Model 4
          </label>
        </div>
        {/* Add more model options as needed */}
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Model Year</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="year2020"
            name="modelYear"
            value="2020"
          />
          <label className="form-check-label" htmlFor="year2020">
            2022
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="year2021"
            name="modelYear"
            value="2021"
          />
          <label className="form-check-label" htmlFor="year2021">
            2021
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="year2021"
            name="modelYear"
            value="2021"
          />
          <label className="form-check-label" htmlFor="year2021">
            2020
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="year2021"
            name="modelYear"
            value="2021"
          />
          <label className="form-check-label" htmlFor="year2021">
            2019
          </label>
        </div>
        {/* Add more model year options as needed */}
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold">Vehicle History</label>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="history1"
            name="vehicleHistory"
            value="History 1"
          />
          <label className="form-check-label" htmlFor="history1">
            History 1
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="history2"
            name="vehicleHistory"
            value="History 2"
          />
          <label className="form-check-label" htmlFor="history2">
            History 2
          </label>
        </div>
        {/* Add more vehicle history options as needed */}
      </div>
    </div>
  );
}

export default SideNav;
