import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import StartPage from "./screens/startPage/StartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<StartPage />} />
          <Route path="*" element={<StartPage />} />
          <Route path="/pedido" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
