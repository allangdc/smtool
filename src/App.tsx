import React, { useState } from "react";
import { AuthContext, IAuthContext } from "./authContext";
import { IAuthUser } from "./services/auth";
// eslint-disable-next-line import/no-cycle
import Main from "./layout/main";

const App: React.FC = () => {
  const [authUser, setAuthUser] = useState<IAuthUser>();

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const authContext: IAuthContext = {
    authUser,
    setAuthUser
  };

  return (
    <AuthContext.Provider value={authContext}>
      <div style={{ backgroundColor: "lightgray" }}>
        <Main />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
