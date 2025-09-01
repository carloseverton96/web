import React from "react";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <h1>Doutrina Espírita</h1>
        <section id="sobre">
          <h2>Sobre</h2>
          <p>
            A Doutrina Espírita, codificada por Allan Kardec, estuda a natureza,
            origem e destino dos espíritos, bem como suas relações com o mundo corporal.
          </p>
        </section>

        <section id="principios">
          <h2>Princípios</h2>
          <ul>
            <li>Reencarnação</li>
            <li>Lei de causa e efeito</li>
            <li>Comunicabilidade dos Espíritos</li>
          </ul>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Endereço da casa espírita / e-mail / telefone</p>
        </section>
      </main>
    </div>
  );
}
