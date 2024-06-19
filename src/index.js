import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1b9007",
      dark: "#0d6e83",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#e0e0e0",
    },
  },
};
const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
