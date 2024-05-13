import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header.jsx";
import ResponsiveAppBar from "./component/ResponsiveAppBar.js";
import Amenities from "./component/Amenities.jsx";
import Price from "./component/Price.jsx";
import Contact from "./component/Contact.jsx";
const MainRoutes = () => {
  return (
    <div>
      {/* <Header /> */}
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Amenities" element={<Amenities />} />
        <Route path="/Pricing" element={<Price />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default MainRoutes;
