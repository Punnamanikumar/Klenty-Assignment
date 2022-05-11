import React from "react";
import img1 from "./images/Group 1006-3.png";
import img2 from "./images/Group 1006-4.png";
import img3 from "./images/Group 1006-5.png";

const Body2 = () => {
  return (
    <div className="body2">
      <div className="bt3">
        <h1 className="bt31">CRM Accelertion</h1>
        <p className="bt32">Everything CRM Integrations was supposed to be. And more.</p>
      </div>
      <div className="flexbox">
        <div className="box">
          <div className="boximg"><img src={img1} alt=""/></div>
          <div className="boxt1">Never update your contacts manually</div>
          <div className="boxt2">
            Any contact you add in CRM gets updated automatically in Klenty. Set
            up Triggers to drive leads from Klenty back into the CRM. Save hours
            everyday to focus on critical activities
          </div>
        </div>
        <div className="box">
          <div className="boximg"><img src={img2} alt=""/></div>
          <div className="boxt1">Engage instantly with prospects who show intent</div>
          <div className="boxt2">
            Auto-sync email engagement data like opens, clicks and replies from
            Klenty right into your CRM. Get notified immediately. Followup
            without skipping a beat.
          </div>
        </div>
        <div className="box">
          <div className="boximg"><img src={img3} alt=""/></div>
          <div className="boxt1">Outreach without leaving your CRM</div>
          <div className="boxt2">
            Engage with prospects straight from your CRM.Book meetings using
            Klenty without ever logging into Klenty. No more switching screens
            to execute sales outreach.
          </div>
        </div>
      </div><br /><br />
    </div>
  );
};

export default Body2;
