const Evento = require("../models/eventoModel");

function responderError(res, error) {
  console.error("Error en la agenda de eventos:", error.code || error.message);
  return res.status(500).json({ error: "No se pudo completar la operación." });
}

function listarEventos(req, res) {
  Evento.obtenerEventos((error, eventos) => {
    if (error) return responderError(res, error);
    res.json(eventos);
  });
}

function leerEvento(body) {
  const { titulo, fecha, hora, lugar, descripcion } = body || {};
  if ([titulo, fecha, hora, lugar, descripcion].some((valor) => typeof valor !== "string")) return null;

  if (!titulo.trim() || !lugar.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(fecha) ||
      !/^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(hora)) return null;
  const dia = new Date(fecha + "T00:00:00Z");
  if (Number.isNaN(dia.getTime()) || dia.toISOString().slice(0, 10) !== fecha) return null;
  return [titulo.trim(), fecha, hora, lugar.trim(), descripcion.trim()];
}

function crearEvento(req, res) {
  const datos = leerEvento(req.body);
  if (!datos) return res.status(400).json({ error: "Revisa el título, la fecha, la hora y el lugar." });
  Evento.crear(datos, (error, resultado) => {
    if (error) return responderError(res, error);
    res.status(201).json({ id_evento: resultado.insertId });
  });
}

function obtenerId(req) {
  const id = Number(req.params.id);
  return /^\d+$/.test(req.params.id) && Number.isSafeInteger(id) && id > 0 ? id : null;
}

function actualizarEvento(req, res) {
  const id = obtenerId(req);
  const datos = leerEvento(req.body);
  if (!id || !datos) return res.status(400).json({ error: "Revisa el identificador y los datos del evento." });
  Evento.actualizar(id, datos, (error, resultado) => {
    if (error) return responderError(res, error);
    if (!resultado.affectedRows) return res.status(404).json({ error: "Evento no encontrado." });
    res.status(204).end();
  });
}

function eliminarEvento(req, res) {
  const id = obtenerId(req);
  if (!id) return res.status(400).json({ error: "Identificador inválido." });
  Evento.eliminar(id, (error, resultado) => {
    if (error) return responderError(res, error);
    if (!resultado.affectedRows) return res.status(404).json({ error: "Evento no encontrado." });
    res.status(204).end();
  });
}

module.exports = { listarEventos, crearEvento, actualizarEvento, eliminarEvento };
