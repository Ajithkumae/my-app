import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import CheckOut from "./components/CheckOut/CheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CheckOut />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
