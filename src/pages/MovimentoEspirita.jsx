import React from "react";
import { Suspense, lazy } from "react";

const Barbalha = lazy(() => import("../components/casas/barbalha"));
const Crato = lazy(() => import("../components/casas/crato"));
const Juazeiro = lazy(() => import("../components/casas/juazeiro"));
const MissaoVelha = lazy(() => import("../components/casas/missaoVelha"));
// ...e assim por diante




export default function MovimentoEspirita() {
  return (
    <>
    <section>
      <h1>MOVIMENTO ESPÍRITA</h1>
      <p>
           Em verdade, não [...] se pode falar em Movimento Espírita antes da Codificação, pois somente após esta é que o Espiritismo surgiu como Doutrina: a movimentação humana em torno das ideias espíritas só aconteceu após a revelação destas pelo Plano Espiritual e sua posterior compilação por Allan Kardec.

      </p>
      <p>
        Movimento Espírita é o conjunto das atividades que têm por objetivo estudar, divulgar e praticar a Doutrina Espírita, contida nas obras básicas de Allan Kardec, colocando-a ao alcance e a serviço de toda a Humanidade. As atividades que compõem o Movimento Espírita são realizadas por pessoas, isoladamente ou em conjunto, e por instituições espíritas. As instituições espíritas compreendem:</p>
<ul >
  <li>Os grupos, centros ou sociedades espíritas que desenvolvem atividades gerais de estudo, difusão e prática da Doutrina Espírita e que podem ser de pequeno, médio ou grande porte.</li>
<li>As Entidades Federativas que desenvolvem as atividades de união das instituições espíritas e de Unificação do Movimento Espírita.</li>
<li>As Entidades Especializadas que desenvolvem atividades espíritas específicas, tais como as de assistência e promoção social e as de divulgação doutrinária.</li>
<li>Os pequenos grupos de estudo do Espiritismo, fundamentalmente voltados para o estudo inicial da Doutrina Espírita.</li>
      </ul>
      <strong>Referência:</strong>
      <ul>
        <li>Estudo Sistematizado da Doutrina Espírita - ESDE - Tomo I - Módulo VIII - Roteiro 03 - 3º edição - fevereiro de 2020</li>
      </ul>
    </section>
    
    <section>
      <div>
        <h1>CASAS ESPÍRITA DA REGIÃO DO CARIRI</h1>
        <h6>Relação de casas espíritas por cidade. Se você sentiu falta de uma casa espírita, <a href="https://wa.me/+5588988775820" target="_blank">comunique-nos</a>.</h6>
        <Suspense fallback={<p>Carregando...</p>}>
                <h3>Juazeiro do Norte</h3>
                <Juazeiro />
                <h3>Crato</h3>
                <Crato />
                <h3>Barbalha</h3>
                <Barbalha />
                <h3>Missão Velha</h3>
                <MissaoVelha />                
                {/* ...restante */}
                {/* o conteúdo desta página responde diretamente aos arquivos que estão em components > Casas */}
              </Suspense>
      </div>
    </section>

  </>);
}
