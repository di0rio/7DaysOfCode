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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
