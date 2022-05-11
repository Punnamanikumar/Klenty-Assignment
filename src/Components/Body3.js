import React, { useContext, useState } from "react";
import icon1 from "./images/Vector.png";
import icon3 from "./images/back.png";
import icon4 from "./images/forward.png";
import { ContextData } from "./ContextApi";

const Body3 = () => {
  const [data] = useContext(ContextData);
  const [count, setCount] = useState(2);
  const handelBack = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(3);
    }
  };
  const handelForward = () => {
    if (count < 3) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };
  return (
    <div className="footer">
      <div><h1 className="b3h">What Our Customers have to Say...</h1></div>
      <div className="box2">
        <div className="ficon1"><img src={icon1} alt="" /></div>
        {data.filter((val) => val.id === count).map((res) => (
            <div><div className="ft1">{res.text}</div>
              <div>
                <div className="ficon2">
                  <img src={res.logo} alt="" /><hr />
                  <div className="ft2">{res.name}</div>
                  <div className="ft3">{res.designation}</div>
                </div>
              </div>
              <div className="fimg"><img src={res.img} alt="" /></div>
            </div>
          ))}
        <button className="btn1" onClick={handelBack}><img src={icon3} alt="" /></button>
        <button className="btn2" onClick={handelForward}><img src={icon4} alt="" /></button>
      </div>
    </div>
  );
};

export default Body3;
