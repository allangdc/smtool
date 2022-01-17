import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#c00e4f", // "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#662f88", // "#f44336",
      dark: "#ba000d",
      contrastText: "#fff"
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
