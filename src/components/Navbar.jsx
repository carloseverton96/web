import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Doutrina Espírita</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/biografias">Biografias</Link></li>
        <li><Link to="/educacionais">Educacionais</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/mediunicas">Mediúnicas</Link></li>
        <li><Link to="/sociais">Sociais</Link></li>
        <li><Link to="/contato">Contato CECRE</Link></li>
        <li><Link to="/doutrina">Doutrina</Link></li>
      </ul>
    </nav>
  );
}
