// ui/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FigmaPluginApp } from "./components/FigmaPluginApp";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <App />
    <FigmaPluginApp />
  </React.StrictMode>
);