import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../routes/Home/Home";
import HowTo from "../routes/HowTo/HowTo";
import Offers from "../routes/Offers/Offers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
