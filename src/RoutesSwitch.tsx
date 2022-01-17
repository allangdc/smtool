import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./authContext";
import CreateTeamView from "./views/CreateTeam";
import DashBoard from "./views/Dashboard";
import Login from "./views/login";

const RoutesSwitch: React.FC = () => {
  const { authUser } = useContext(AuthContext);

  const isLogged = () => !!authUser;

  return (
    <Routes>
      {isLogged() ? (
        <>
          <Route path="/smtool" element={<DashBoard />} />
          <Route path="/smtool/new" element={<CreateTeamView />} />
          <Route
            path="/smtool/edit/:id"
            element={<CreateTeamView editMode />}
          />
          <Route path="/smtool/login" element={<Login />} />
        </>
      ) : (
        <Route path="/smtool/login" element={<Login />} />
      )}
    </Routes>
  );
};

export default RoutesSwitch;
