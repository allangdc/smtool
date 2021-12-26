import React from "react";
import { Route, Routes } from "react-router-dom";
import MyTeams from "./views/MyTeams";

const RoutesSwitch = () => (
  <Routes>
    <Route path="/" element={<MyTeams />} />
  </Routes>
);

export default RoutesSwitch;
