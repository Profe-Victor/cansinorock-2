const Contacto = require("../models/contactoModel");

const enviarMensaje = (req, res) => {
  Contacto.guardarMensaje(req.body, (error) => {
    if (error) {
      console.error("ERROR MYSQL:", error);
      return res.status(500).json({
        mensaje: "Error al guardar el mensaje",
        error: error.message,
      });
    }

    res.json({
      mensaje: "Mensaje enviado correctamente",
    });
  });
};

module.exports = { enviarMensaje };
