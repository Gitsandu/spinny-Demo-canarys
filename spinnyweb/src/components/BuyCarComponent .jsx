import React from "react";
import Landingpagehead from "./Landingpagehead";
import SideNav from "./SideNav"; // Assuming you have a CardComponent
import CardComponent from "./CardComponent";

function BuyCarComponent() {
  return (
    <div>
      <Landingpagehead></Landingpagehead>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "25%" }}>
          <SideNav></SideNav>
        </div>
        <div style={{ width: "75%" }}>
            <div>
                <CardComponent></CardComponent>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCarComponent;
