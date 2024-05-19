import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// eslint-disable-next-line no-unused-expressions
reportWebVitals;
