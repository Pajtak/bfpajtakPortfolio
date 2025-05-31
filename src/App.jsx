import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { BlocoDeNotas } from "./components/BlocoDeNotas/BlocoDeNotas";
import React from "react";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="notepad" element={<BlocoDeNotas />} />
      </Routes>
    </BrowserRouter>
  );
};
