import React from "react";
import "../css/biografias.css";
import "../css/index.css";
import "../css/Servicos.css";
import "../css/contatos.css";
import { motion } from "framer-motion";
import { BookUser } from "lucide-react";

export default function Biografias() {
  return (
    <div className="bio-container">
      
        <motion.div
          className="bio-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/public/iago.jpeg"
            alt="Carlos Everton Mangueira"
            className="bio-image"
          />
          <div className="bio-text">
            <h2>Iago Moises</h2>
            <p className="bio-subtitle">Cabeleireiro, maquiador e penteadista</p>

            <p>
              Atua com excelência no setor de beleza e cuidados pessoais. Reconhecido por seu olhar técnico e criativo, transforma a imagem de seus clientes com cortes personalizados, penteados sofisticados e maquiagens de alto padrão.</p>
              <p>Atende no Salão Cícera Ramos, no Cariri, oferecendo uma experiência completa, que une estilo, confiança e cuidado.</p>
              <p>Seu trabalho reflete dedicação, sensibilidade estética e compromisso com a autoestima e bem-estar de quem o procura.</p>
              <h6>Telefone / WhatsApp <a href="https://wa.me/5588988456547" target="_blank">(88) 9 8845-6547</a></h6>
              

              
            

            

            <motion.a
              href="#everton-detalhes"
              className="bio-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver trajetória completa
            </motion.a>
          </div>
          
        </motion.div>

        <motion.div
          className="bio-card reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/public/edna.jpg"
            alt="Edna Silva"
            className="bio-image"
          />
          <div className="bio-text">
            <h2>Edna Alves</h2>
            <p className="bio-subtitle">Esteticista & Cosmetóloga</p>

            <p>
              Especialista em estética avançada e terapias faciais e corporais,
              Edna combina ciência e arte em cada atendimento. Sua missão é
              promover o equilíbrio entre bem-estar, autoestima e saúde da pele.
            </p>

            <p>
              Com formação sólida e constante atualização, desenvolveu métodos
              exclusivos de rejuvenescimento e protocolos personalizados,
              conquistando resultados notáveis e fidelização de clientes.
            </p>

            <motion.a
              href="#edna-detalhes"
              className="bio-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver trajetória completa
            </motion.a>
          </div>
        </motion.div>
      

      <section className="bio-extra" id="everton-detalhes">
        <h3>Trajetória Acadêmica e Profissional - Everton Alves</h3>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <li>🧬 Graduação em Biomedicina – UNILEÃO (2018)</li>
          <li>🔬 Especialização em Citologia Clínica – UNILEÃO (2020)</li>
          <li>🏛️ Especialização em Vigilância Sanitária – ESP/CE (2023)</li>
          <li>📚 Pós-graduando em MBA em Estética Avançada</li>
          <li>💼 Coordenador de Vigilância Sanitária de Juazeiro do Norte</li>
        </motion.ul>
      </section>

      <section className="bio-extra" id="edna-detalhes">
        <h3>Trajetória Acadêmica e Profissional - Edna Alves</h3>
        <motion.div
          className="bio-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <li>📚 Graduanda em Tecnologia Estética e Cosmética</li>
          <li>🧬 Esteticista facial e corporal</li>
          <li>🔬 Limpeza de pele Premmium - ADCOS</li>
          <li>🏛️ Redução de medidas com Bioestimuladores - ECCOS</li>
          
          
          <span>— Edna Alves</span>
        </motion.div>
      </section>
    </div>
  );
}
