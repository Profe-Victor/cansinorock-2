import { useEffect, useState } from "react";
import api from "../services/api";

function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarEventos = async () => {
      try {
        const respuesta = await api.get("/eventos");

        console.log("Eventos recibidos:", respuesta.data);

        if (Array.isArray(respuesta.data)) {
          setEventos(respuesta.data);
        } else {
          setEventos([]);
          setError("La API no devolvió una lista de eventos.");
        }
      } catch (errorPeticion) {
        console.error("Error al obtener eventos:", errorPeticion);
        setError("No fue posible cargar los eventos.");
      } finally {
        setCargando(false);
      }
    };

    cargarEventos();
  }, []);

  const formatearFecha = (fecha) => {
    if (!fecha) {
      return "Fecha por confirmar";
    }

    return String(fecha).substring(0, 10);
  };

  return (
    <section className="container py-5" id="eventos">
      <h2 className="text-center text-warning mb-5">Próximos Eventos</h2>

      {cargando && (
        <p className="text-center text-light">Cargando eventos...</p>
      )}

      {error && <div className="alert alert-danger text-center">{error}</div>}

      {!cargando && !error && eventos.length === 0 && (
        <p className="text-center text-light">
          Por el momento no hay eventos registrados.
        </p>
      )}

      <div className="row justify-content-center">
        {eventos.map((evento) => (
          <div className="col-md-6 col-lg-4 mb-4" key={evento.id_evento}>
            <div className="card h-100 shadow-lg border-0 bg-dark text-light evento-card">
              <div className="card-body">
                <span className="badge bg-danger mb-3">Próximo evento</span>

                <h4 className="text-warning">
                  {evento.titulo || "Evento sin título"}
                </h4>

                <p>📅 {formatearFecha(evento.fecha)}</p>
                <p>⏰ {evento.hora || "Hora por confirmar"}</p>
                <p>📍 {evento.lugar || "Lugar por confirmar"}</p>
                <p>{evento.descripcion || "Sin descripción"}</p>

                <a href="#contacto" className="btn btn-outline-warning">
                  Más información
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Eventos;
