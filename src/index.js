import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EmployeeProvider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
