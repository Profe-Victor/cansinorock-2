function Galeria() {
  const imagenes = [
    {
      titulo: "Fotografía oficial",
      imagen: "/images/hero-cansinorock.jpg",
    },

    {
      titulo: "Estudio CansinoRock",
      imagen: "/images/estudio-cansino.jpg",
    },

    {
      titulo: "Primera presentación CansinoRock",
      imagen: "/images/presentacionCero.jpg",
    },
    {
      titulo: "Presentación Aculco",
      imagen: "/images/presentacionAculco.jpg",
    },
    {
      titulo: "Edu Bateria",
      imagen: "/images/Edu.jpg",
    },
    {
      titulo: "Javi y Joel",
      imagen: "/images/javi&joel.jpg",
    },
    {
      titulo: "Presentación Huichapan",
      imagen: "/images/presentacion1.jpg",
    },
    {
      titulo: "Presentación Nopala",
      imagen: "/images/presentacion2.jpg",
    },
    {
      titulo: "Presentación Nopala",
      imagen: "/images/presentacion3.jpg",
    },
    {
      titulo: "Evento privado",
      imagen: "/images/presentacionMary2.jpg",
    },
    {
      titulo: "Monty",
      imagen: "/images/montyCantando.jpg",
    },
    {
      titulo: "Cumpleaños Julio Revueltas",
      imagen: "/images/cumpleJulio.jpg",
    },
    {
      titulo: "Sesión de fotos",
      imagen: "/images/sesionDoye.jpg",
    },
    {
      titulo: "Ensayo",
      imagen: "/images/teclados.jpg",
    },
  ];

  return (
    <section className="galeria py-5" id="galeria">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Galería Multimedia</h2>
          <p className="text-light">
            Fotografías, video y audio de CansinoRock.
          </p>
        </div>

        <div className="row g-4">
          {imagenes.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="galeria-card">
                <img src={item.imagen} alt={item.titulo} />
                <div className="galeria-overlay">
                  <h4>{item.titulo}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="video-wrapper mt-5">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/nLpNqDTXgUQ"
            title="CansinoRock - Presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="audio-box mt-5 text-center">
          <h3 className="text-warning mb-3">🎵 Escucha a CansinoRock</h3>

          <audio controls preload="metadata">
            <source src="/audio/cansinorock-demo.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
