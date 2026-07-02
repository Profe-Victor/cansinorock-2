function SobreNosotros() {
  return (
    <section className="sobre-nosotros py-5" id="nosotros">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h2 className="text-warning mb-4">Sobre CansinoRock</h2>

            <p>
              CansinoRock es una banda originaria de Nopala de Villagrán,
              Hidalgo, dedicada a revivir la energía del rock clásico mediante
              interpretaciones llenas de fuerza, nostalgia y pasión musical.
            </p>

            <p>
              Su propuesta combina el sonido de grandes décadas del rock con una
              identidad local auténtica, creando presentaciones cercanas,
              dinámicas y memorables para el público.
            </p>

            <p>
              Sus integrantes son Víco en el bajo y coros, Edú en la bateria,
              Saul en los teclados, Joel en la guitarra, Monty en la voz y Mike
              en Audio y Sax.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-dark text-light rounded shadow-lg border border-warning">
              <h4 className="text-warning">Nuestra esencia</h4>
              <p className="mb-0">
                Rock clásico, compañerismo, escenario, actitud y conexión con la
                gente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
