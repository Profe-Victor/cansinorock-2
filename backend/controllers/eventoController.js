const Evento = require("../models/eventoModel");

const listarEventos = (req, res) => {
  Evento.obtenerEventos((error, eventos) => {
    if (error) {
      return res.status(500).json({
        error: "Error al obtener los eventos.",
      });
    }

    res.json(eventos);
  });
};

module.exports = {
  listarEventos,
};
