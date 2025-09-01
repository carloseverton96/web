import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Doutrina Espírita</div>
      <ul className="nav-links">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#principios">Princípios</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}
