// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 

// Рендеримо компонент App в корінь документа
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
