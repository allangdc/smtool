import React from "react";
import { Route, Routes } from "react-router-dom";
import MyTeams from "./views/Dashboard";

const RoutesSwitch = () => (
  <Routes>
    <Route path="/" element={<MyTeams />} />
  </Routes>
);

export default RoutesSwitch;
