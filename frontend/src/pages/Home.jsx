import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SobreNosotros from "../components/SobreNosotros";
import MisionVision from "../components/MisionVision";
import Servicios from "../components/Servicios";
import Eventos from "../components/Eventos";
import Integrantes from "../components/Integrantes";
import Galeria from "../components/Galeria";
import Aliados from "../components/Aliados";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SobreNosotros />
      <MisionVision />
      <Servicios />
      <Eventos />
      <Integrantes />
      <Galeria />
      <Aliados />
      <Contacto />
      <Footer />
    </>
  );
}

export default Home;
