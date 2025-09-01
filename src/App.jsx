import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Doutrina from "./pages/Doutrina";
import Contato from "./pages/Contato";
import Inicio from "./pages/inicio";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/doutrina" element={<Doutrina />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  );
}
