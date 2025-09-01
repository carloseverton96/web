import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Doutrina from "./pages/Doutrina";
import Contato from "./pages/Contato";
import Inicio from "./pages/Inicio";
import Biografias from './pages/Biografias';
import Educacionais from './pages/Educacionais';
import Mediunicas from './pages/Mediunicas';
import Sociais from './pages/Sociais';
import Publicas from "./pages/Publicas";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/doutrina" element={<Doutrina />} />
          <Route path="/Biografias" element={<Biografias />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/Educacionais" element={<Educacionais />} />
          <Route path="/Mediunicas" element={<Mediunicas />} />
          <Route path="/Publicas" element={<Publicas />} />
          <Route path="/Sociais" element={<Sociais />} />
        </Routes>
      </main>
    </>
  );
}
