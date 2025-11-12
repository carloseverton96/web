import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "../css/contatos.css";
import "../css/index.css";
import "../css/Servicos.css";
import "../css/biografias.css";
import { Mail, Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

export default function Contatos() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>EA Estética - Contato</title>
        <meta
          name="description"
          content="Entre em contato com a EA Estética e descubra como podemos cuidar da sua beleza e bem-estar."
        />
        <link rel="canonical" href="https://www.site.com/contato" />
      </Helmet>

      {/* Conteúdo Principal */}
      <main className="contato-container">
        <motion.section
          className="contato-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="contato-titulo">Entre em Contato</h1>
          <p className="contato-subtitulo">
            Agende seu horário ou tire suas dúvidas. Será um prazer falar com você!
          </p>

          {/* Grid principal */}
          <div className="contato-grid">
            {/* 📱 Informações */}
            <div className="contato-info">
              <div className="contato-item">
                <Phone className="contato-icon" />
                <div>
                  <h3>Telefone / WhatsApp</h3>
                  <p><a href="https://wa.me/5588988775820" target="_blank">(88) 9 8877-5820 - Everton Alves</a>
                  <p><a href="https://wa.me/5588988413363" target="_blank">(88) 9 8841-3363 Edna Alves</a></p>

</p>
                </div>
              </div>

              <div className="contato-item">
                <Mail className="contato-icon" />
                <div>
                  <h3>Email</h3>
                  <p>eaesteticaalves@gmail.com</p>
                </div>
              </div>

              <div className="contato-item">
                <Instagram className="contato-icon" />
                <div>
                  <h3>Instagram</h3>
                  <p>
                    <a
                      href="https://instagram.com/evertonalvesbiomedico"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @evertonalvesbiomedico
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://instagram.com/ednamdealves1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @ednamdealves1
                    </a>
                  </p>
                </div>
              </div>

              {/* <div className="contato-item">
                <Facebook className="contato-icon" />
                <div>
                  <h3>Facebook</h3>
                  <a
                    href="https://facebook.com/ea.estetica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    /ea.estetica
                  </a>
                </div>
              </div> */}

              {/* <div className="contato-item">
                <MapPin className="contato-icon" />
                <div>
                  <h3>Endereço</h3>
                  <p>Rua Exemplo, 123 - Juazeiro do Norte, CE</p>
                </div>
              </div> */}

              <div className="contato-item">
                <Clock className="contato-icon" />
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda-feira a Sábado: 8h às 18h</p>
                  <p>Consulte a disponibilidade</p>
                </div>
              </div>
            </div>

            {/* 🗺️ Mapa */}
            <div className="contato-mapa">
              <iframe
                title="Localização EA Estética"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0936293377927!2d-39.33047359999999!3d-7.2301609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1827ad726a7ad%3A0x1c9ee20fafe242ad!2sR.%20Valdomiro%20Mar%C3%A7al%20do%20Carmo%2C%20336%20-%20Tri%C3%A2ngulo%2C%20Juazeiro%20do%20Norte%20-%20CE%2C%2063041-080!5e0!3m2!1spt-BR!2sbr!4v1762938077390!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
