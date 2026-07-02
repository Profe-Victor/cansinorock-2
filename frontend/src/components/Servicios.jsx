function Servicios() {
  return (
    <section className="servicios py-5" id="servicios">
      <div className="container">
        <h2 className="text-center text-warning mb-4">Servicios y Productos</h2>

        <p className="text-center mb-5">
          CansinoRock ofrece presentaciones en vivo, discos, mercancía oficial y
          paquetes especiales para eventos.
        </p>

        <div className="table-responsive">
          <table className="table table-dark table-hover table-bordered align-middle">
            <thead className="table-warning text-dark">
              <tr>
                <th>Servicio / Producto</th>
                <th>Descripción</th>
                <th>Duración / Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Presentación acústica</td>
                <td>Formato íntimo para reuniones y eventos pequeños.</td>
                <td>1 hora</td>
                <td>$4,500 MXN</td>
              </tr>

              <tr>
                <td>Banda completa</td>
                <td>Show de rock clásico con repertorio completo.</td>
                <td>2 horas</td>
                <td>$13,000 MXN</td>
              </tr>

              <tr>
                <td>Evento especial</td>
                <td>Presentación extendida para ferias o festivales.</td>
                <td>3 horas</td>
                <td>Cotización</td>
              </tr>

              <tr>
                <td>Playera oficial</td>
                <td>Merchandising oficial de CansinoRock.</td>
                <td>1 pieza</td>
                <td>$250 MXN</td>
              </tr>

              <tr>
                <td>Disco físico</td>
                <td>Material musical de la banda.</td>
                <td>1 pieza</td>
                <td>$180 MXN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
