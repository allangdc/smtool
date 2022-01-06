import React from "react";
import AuthContextProvider from "./authContext";
import Main from "./layout/main";

const App: React.FC = () => (
  <AuthContextProvider>
    <div style={{ backgroundColor: "lightgray" }}>
      <Main />
    </div>
  </AuthContextProvider>
);

export default App;
