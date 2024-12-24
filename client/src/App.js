// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Schedule from "./pages/Schedule/Schedule";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/schedule" element={<Schedule />} />

      </Routes>
    </Router>
  );
};

export default App;
