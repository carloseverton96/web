import { Suspense, lazy } from "react";

const Parte1 = lazy(() => import("../components/biografias/Parte1"));
const Parte2 = lazy(() => import("../components/biografias/Parte2"));
// ...e assim por diante
export default function Biografias() {
  return (
    <div className="main-content">
      
      <Suspense fallback=
      
      {<p>Carregando...</p>}>
        <section><h1>Biografias</h1>
        <Parte1 />
        <Parte2 /></section>
        {/* ...restante */}
        {/* o conteúdo desta página responde diretamente aos arquivos que estão em components > */}
      </Suspense>
    </div>
  );
}

