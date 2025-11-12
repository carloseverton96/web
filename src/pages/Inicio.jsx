import React from "react";
import { Helmet } from "react-helmet-async";
import "../css/index.css";
import "../css/Servicos.css";
import "../css/contatos.css";
import "../css/biografias.css";
import edna from "../../public/edna.jpg";
import everton from "../../public/everton.jpg";
import Servicos from "./Servicos";
import Contatos from "./Contato";
import Biografias from "./Biografias";

export default function Inicio() {
  return (
    <>
      {/* SEO / Cabeçalho */}
      <Helmet>
        <title>EA Estética - Nossa Equipe</title>
        <meta
          name="description"
          content="Conheça nossos profissionais especializados em estética e bem-estar."
        />
        <meta
          name="keywords"
          content="estética, beleza, profissionais, cuidados com a pele, bem-estar"
        />
        <link rel="canonical" href="https://www.site.com" />
      </Helmet>

      
      {/* Conteúdo Principal */}
      <main className="container">
        <section id="profissionais" className="profissionais-section">
          
          <div className="profissionais-grid-4col">
  <div className="prof-col foto-col">
    <img src={edna} alt="Edna - Esteticista" className="prof-img" />
  </div>
  <div className="prof-col dados-col">
    <h2 className="prof-nome">Edna Alves</h2>
    <p className="prof-cargo">Esteticista</p>
    <p className="prof-descricao">
      Alia sua vivência em estética facial e corporal para
      oferecer tratamentos personalizados com foco em resultados e bem-estar.
    </p>
  </div>
  <div className="prof-col dados-col">
    <h2 className="prof-nome">Éverton Alves</h2>
    <p className="prof-cargo">Biomédico - Especialista em Vigilância Sanitária</p>
    <p className="prof-descricao">
      Pós-graduando em Estética combina técnicas modernas na área da estética avançada, promovendo saúde, equilíbrio corporal e autoestima em cada atendimento.
    </p>
  </div>
  <div className="prof-col foto-col">
    <img src={everton} alt="Everton Alves - Biomédico" className="prof-img" />
  </div>
</div>
      <Servicos/>
      <Contatos/> 
      <Biografias/>   
        </section>
      
      </main>

      <footerfoote/>
    </>
  );
}
