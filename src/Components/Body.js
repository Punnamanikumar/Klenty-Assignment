import React from "react";
import "./css/Background.css";
import img1 from "./images/Group 1006.png";
const Body = () => {
  return (
    <div>
      <div className="backgroundimg"></div>
      <div>
        <h3 className="bt1">
          <div className="bt11">Don't just integrate</div>
          <div className="bt12">Accelerate your CRM</div>
        </h3>
        <div className="img1"><img src={img1} alt=""/></div>
        <div>
          <p className="bt2">
            Propel your sales team into a state of flow with CRM Accelerations.
            Switch out boring hours of repetitive work with high-impact
            activities. Build a repeatable sales process.
          </p>
          <span className="tryfree bt13">GET STARTED</span>
        </div>
        <div className="img2"><img src={img1} alt=""/></div>
      </div>
    </div>
  );
};

export default Body;
