import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/material/styles';

const theme = unstable_createMuiStrictModeTheme();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
