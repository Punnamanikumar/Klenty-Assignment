import React from "react";
import Body from "./Body";
import Body2 from "./Body2";
import Body3 from "./Body3";
import { ContextProvider } from "./ContextApi";
import Header from "./Header";

const AllComponents = () => {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Body />
        <Body2 />
        <Body3 />
      </ContextProvider>
    </div>
  );
};

export default AllComponents;
