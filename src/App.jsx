import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contato from "./pages/Contato";
import Inicio from "./pages/Inicio";
import Biografias from './pages/Biografias';
import Servicos from "./pages/Servicos";
import Parceiros from "./pages/Parceiros";


export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          <Route path="/Biografias" element={<Biografias />} />
          <Route path="/contato" element={<Contato />} />
          
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/parceiros" element={<Parceiros />} />
        </Routes>
      </main>
    </>
  );
}
