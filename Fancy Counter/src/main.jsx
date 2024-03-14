import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Find the 'root' element in the HTML to attach the React app
const rootElement = document.getElementById("root");

// Create a React root container for managing the app within the 'root' element
const root = ReactDOM.createRoot(rootElement);

// Render the app, potentially with StrictMode for development warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
