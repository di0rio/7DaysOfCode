import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../routes/Home/Home";
import SignIn from "../routes/SignIn/SignIn";
import SignUp from "../routes/SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/howto" element={<SignIn />} />
        <Route path="/testimonials" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
