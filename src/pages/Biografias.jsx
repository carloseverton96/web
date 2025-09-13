import { Suspense, lazy } from "react";

const Parte1 = lazy(() => import("../components/biografias/Parte1"));
const Parte2 = lazy(() => import("../components/biografias/Parte2"));
// ...e assim por diante
export default function Biografias() {
  return (
    <div className="main-content">
      <h1>Biografias</h1>
      <Suspense fallback={<p>Carregando...</p>}>
        <Parte1 />
        <Parte2 />
        {/* ...restante */}
        {/* o conteúdo desta página responde diretamente aos arquivos que estão em components > */}
      </Suspense>
    </div>
  );
}

