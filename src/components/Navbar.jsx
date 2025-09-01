import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Doutrina Espírita</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/doutrina">Doutrina</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
