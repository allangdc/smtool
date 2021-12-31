import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateTeamView from "./views/CreateTeam";
import DashBoard from "./views/Dashboard";
import Login from "./views/login";

const RoutesSwitch = () => (
  <Routes>
    <Route path="/" element={<DashBoard />} />
    <Route path="/new" element={<CreateTeamView />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default RoutesSwitch;
