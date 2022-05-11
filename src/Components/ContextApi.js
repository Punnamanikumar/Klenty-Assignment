import React, { createContext, useState } from "react";

export const ContextData = createContext();

export const ContextProvider = (props) => {
  const [data] = useState([
    {
      id: 1,
      name: "Sam W",
      designation: "Head of Demand Generation, Jump",
      text: `From someone who is relatively new to sales and lead generating, Klenty was a highly effective and simple-to-use tool that allowed me to quickly generate leads in a genuine and customisable manner`,
      img: "https://www.klenty.com/a-80d36317/assets/images/index/new2022/testimonial/sam.png",
      logo: "https://shorturl.at/rBCT8",
    },

    {
      id: 2,
      name: "Gavin Tye",
      designation: "Sales Director, Red Eye",
      text: `It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills`,
      img: "https://shorturl.at/rzB25",
      logo: "https://shorturl.at/jmxF8",
    },
    {
      id: 3,
      name: "Adam weginer",
      designation: "President double the donation",
      text: `Klenty has helped us engage a far greater number of leads per week,
        resulting in an outbound revenue jump of 93%`,
      img: "https://shorturl.at/dpvN4",
      logo: "https://shorturl.at/etyFR",
    },
  ]);
  return (
    <ContextData.Provider value={[data]}>{props.children}</ContextData.Provider>
  );
};
