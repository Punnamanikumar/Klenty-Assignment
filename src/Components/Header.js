import React from "react";
import "./css/Background.css";
import img1 from "./images/Big Logo.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="ht1"><img src={img1} alt="" /></div>
        <div className="ht2">
          <div>Platform</div>
          <div>Pricing</div>
          <div>Acceleration</div>
          <div>Resource</div>
          <div>Customer Stories</div>
        </div>
        <div className="ht3">
          <span className="login">Login</span>
          <span className="demo">SCHEDULE DEMO</span>
        </div>
        <span className="tryfree">TRY FOR FREE</span>
      </div>
      <div className="border" />
    </div>
  );
};

export default Header;
