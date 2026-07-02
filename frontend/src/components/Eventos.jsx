import { useEffect, useState } from "react";
import api from "../services/api";

function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    api
      .get("/eventos")
      .then((respuesta) => {
        setEventos(respuesta.data);
      })
      .catch((error) => {
        console.error("Error al obtener eventos:", error);
      });
  }, []);

  return (
    <section className="container py-5" id="eventos">
      <h2 className="text-center text-warning mb-5">Próximos Eventos</h2>

      <div className="row">
        {eventos.map((evento) => (
          <div className="col-md-6 col-lg-4 mb-4" key={evento.id_evento}>
            <div className="card h-100 shadow-lg border-0 bg-dark text-light evento-card">
              <div className="card-body">
                <span className="badge bg-danger mb-3">Próximo evento</span>

                <h4 className="text-warning">{evento.titulo}</h4>

                <p>📅 {evento.fecha.substring(0, 10)}</p>
                <p>⏰ {evento.hora}</p>
                <p>📍 {evento.lugar}</p>
                <p>{evento.descripcion}</p>

                <button className="btn btn-outline-warning">
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Eventos;
