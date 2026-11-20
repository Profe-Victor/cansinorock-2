import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AdministrarEventos from "./pages/AdministrarEventos";

function App() {
  const [ruta, setRuta] = useState(window.location.hash);

  useEffect(() => {
    const actualizar = () => setRuta(window.location.hash);
    window.addEventListener("hashchange", actualizar);
    return () => window.removeEventListener("hashchange", actualizar);
  }, []);

  return ruta === "#admin-eventos" ? <AdministrarEventos /> : <Home />;
}

export default App;
