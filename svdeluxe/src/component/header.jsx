import React from "react";
import Amenities from "./Amenities";
import Price from "./Price";
import Contact from "./Contact";

const Header = () => {
  return (
    <>
      {/* <h1>SV Delux PG </h1>  */}
      <Amenities />
      <Price />
      <Contact />
    </>
  );
};

export default Header;
