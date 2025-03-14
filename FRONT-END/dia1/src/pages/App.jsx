import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../routes/Home/Home";
import HowTo from "../routes/HowTo/HowTo";
import Offers from "../routes/Offers/Offers";
import Testimonials from "../routes/Testimonials/Testimonials";
import Videoo from "../routes/Videoo/Videoo";
import MyCart from "../routes/MyCart/MyCart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/videos" element={<Videoo />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
