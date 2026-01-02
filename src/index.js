import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Admin from "./components/Admin";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const isAdmin = window.location.pathname === "/admin-kapra";

root.render(
  <React.StrictMode>
    {isAdmin ? <Admin /> : <App />}
  </React.StrictMode>
);
