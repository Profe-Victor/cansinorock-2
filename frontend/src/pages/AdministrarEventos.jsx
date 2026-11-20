import { useEffect, useState } from "react";
import api from "../services/api";

const nuevo = { titulo: "", fecha: "", hora: "", lugar: "", descripcion: "" };
const campos = [
  ["titulo", "Título", "text"],
  ["fecha", "Fecha", "date"],
  ["hora", "Hora", "time"],
  ["lugar", "Lugar", "text"],
];

export default function AdministrarEventos() {
  const [eventos, setEventos] = useState([]);
  const [formulario, setFormulario] = useState(nuevo);
  const [editando, setEditando] = useState(null);
  const [clave, setClave] = useState("");
  const [ocupado, setOcupado] = useState(true);
  const [error, setError] = useState("");
  const [aviso, setAviso] = useState("");

  async function consultar(signal) {
    const respuesta = await api.get("/eventos", { signal });
    setEventos(respuesta.data);
  }

  useEffect(() => {
    const controlador = new AbortController();
    consultar(controlador.signal).catch(() => {
      if (!controlador.signal.aborted) setError("No se pudo cargar la agenda.");
    }).finally(() => {
      if (!controlador.signal.aborted) setOcupado(false);
    });
    return () => controlador.abort();
  }, []);

  function reiniciar() {
    setEditando(null);
    setFormulario(nuevo);
  }

  function editar(evento) {
    setEditando(evento.id_evento);
    setFormulario({
      titulo: evento.titulo ?? "",
      fecha: String(evento.fecha ?? "").slice(0, 10),
      hora: evento.hora ?? "",
      lugar: evento.lugar ?? "",
      descripcion: evento.descripcion ?? "",
    });
    setAviso("");
    setError("");
  }

  async function cambiar(solicitud, mensaje, limpiar) {
    setOcupado(true);
    setError("");
    setAviso("");
    const config = { headers: { Authorization: `Bearer ${clave.trim()}` } };

    try {
      await solicitud(config);
      if (limpiar) reiniciar();
      setAviso(mensaje);
      await consultar().catch(() => setError("El cambio se guardó. Recarga la página para ver la lista actualizada."));
    } catch (e) {
      setError(e.response?.data?.error || "No se pudo confirmar el cambio. Consulta la agenda antes de reintentar.");
    } finally {
      setOcupado(false);
    }
  }

  function guardar(evento) {
    evento.preventDefault();
    if (editando !== null) {
      cambiar((config) => api.put(`/eventos/${editando}`, formulario, config), "Evento actualizado.", true);
    } else {
      cambiar((config) => api.post("/eventos", formulario, config), "Evento creado.", true);
    }
  }

  function eliminar(evento) {
    if (!window.confirm(`¿Eliminar permanentemente «${evento.titulo}»?`)) return;
    cambiar(
      (config) => api.delete(`/eventos/${evento.id_evento}`, config),
      "Evento eliminado.",
      evento.id_evento === editando,
    );
  }

  return (
    <main className="container py-4">
      <a href="#inicio">Volver a CansinoRock</a>
      <h1 className="my-3">Administración de eventos</h1>

      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {aviso && <div className="alert alert-success" role="status">{aviso}</div>}

      <form onSubmit={guardar} className="card bg-light text-dark p-3 mb-4">
        <h2>{editando !== null ? "Editar evento" : "Nuevo evento"}</h2>
        <fieldset disabled={ocupado}>
          <div className="row g-3">
            {campos.map(([nombre, etiqueta, tipo]) => (
              <label className="col-sm-6" key={nombre}>
                {etiqueta}
                <input
                  className="form-control" type={tipo} required
                  step={tipo === "time" ? 1 : undefined}
                  value={formulario[nombre]}
                  onChange={(e) => setFormulario({ ...formulario, [nombre]: e.target.value })}
                />
              </label>
            ))}
            <label className="col-12">
              Descripción
              <textarea className="form-control" value={formulario.descripcion}
                onChange={(e) => setFormulario({ ...formulario, descripcion: e.target.value })} />
            </label>
            <label className="col-sm-6">
              Clave de administración
              <input className="form-control" type="password" required value={clave}
                autoComplete="off" onChange={(e) => setClave(e.target.value)} />
            </label>
          </div>
          <button className="btn btn-primary mt-3" type="submit">Guardar evento</button>
          {editando !== null && <button className="btn btn-outline-secondary mt-3 ms-2" type="button" onClick={reiniciar}>Cancelar</button>}
        </fieldset>
      </form>

      <h2>Eventos registrados</h2>
      {ocupado && <p role="status">Procesando…</p>}
      {!ocupado && !error && eventos.length === 0 && <p>No hay eventos registrados.</p>}
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead><tr><th scope="col">Título</th><th scope="col">Fecha</th><th scope="col">Hora</th><th scope="col">Acciones</th></tr></thead>
          <tbody>
            {eventos.map((evento) => (
              <tr key={evento.id_evento}>
                <td>{evento.titulo}</td>
                <td>{String(evento.fecha ?? "").slice(0, 10)}</td>
                <td>{evento.hora}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary me-2" disabled={ocupado} onClick={() => editar(evento)}>Editar</button>
                  <button className="btn btn-sm btn-outline-danger" disabled={ocupado || !clave.trim()} onClick={() => eliminar(evento)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
