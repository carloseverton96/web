import React from "react";
import { Link } from "react-router-dom";
import logoeaestetica from "../../public/logoeaestetica.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div><img src={logoeaestetica} alt="Edna - Esteticista" width={70} /></div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/biografias">Biografias</Link></li>
        <li><Link to="/parceiros">Parceiros</Link></li>
        <li><Link to="/contato">Contatos</Link></li>
      </ul>
    </nav>
  );
}
