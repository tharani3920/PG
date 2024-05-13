import React from "react";
import Amenities from "./Amenities";
import Price from "./Price";
import Contact from "./Contact";

const header = () => {
  return (
    <>
      {/* <h1>SV Delux PG</h1> */}
      <Amenities />
      <Price />
      <Contact />
    </>
  );
};

export default header;
