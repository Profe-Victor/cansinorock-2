function Aliados() {
  const aliados = [
    {
      nombre: "Nopala de Villagrán",
      descripcion: "Comunidad de origen de CansinoRock.",
      enlace:
        "https://www.google.com/search?q=Nopala+de+Villagr%C3%A1n+Hidalgo",
    },
    {
      nombre: "YouTube",
      descripcion: "Videos y presentaciones de la banda.",
      enlace: "https://www.youtube.com/",
    },
    {
      nombre: "Facebook",
      descripcion: "Red social para eventos y contacto.",
      enlace: "https://www.facebook.com/",
    },
  ];

  return (
    <section className="aliados py-5" id="aliados">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Clientes y Aliados</h2>
          <p className="text-light">
            Espacios, plataformas y aliados que fortalecen la presencia de
            CansinoRock.
          </p>
        </div>

        <div className="row g-4">
          {aliados.map((aliado, index) => (
            <div className="col-md-4" key={index}>
              <div className="aliado-card h-100 text-center p-4">
                <h4>{aliado.nombre}</h4>
                <p>{aliado.descripcion}</p>

                <a
                  href={aliado.enlace}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-warning"
                >
                  Visitar sitio
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aliados;
