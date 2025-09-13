import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">COMUNHÃO ESPÍRITA CRISTO REDENTOR</div>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/educacionais">Estudos</Link></li>
        <li><Link to="/mediunicas">Mediunidade</Link></li>
        <li><Link to="/sociais">Atividades Sociais</Link></li>
        <li><Link to="/biografias">Biografias</Link></li>
        <li><Link to="/movimentoespirita">Movimento Espírita</Link></li>
        <li><Link to="/contato">Contatos</Link></li>
      </ul>
    </nav>
  );
}
