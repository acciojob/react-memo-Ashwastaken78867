import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // Importing the App component

// Rendering the App component into the root element of the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Targeting the 'root' div in index.html
);
