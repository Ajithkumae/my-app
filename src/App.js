import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import CheckOut from "./components/CheckOut/CheckOut";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<CheckOut />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Provider>
  );
};

export default App;
