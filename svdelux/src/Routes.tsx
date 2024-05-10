import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header.jsx";
import ResponsiveAppBar from "./component/ResponsiveAppBar.js";
const MainRoutes = () => {
  return (
    <div>
      {/* <Header /> */}
      <ResponsiveAppBar />
      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
};
export default MainRoutes;
