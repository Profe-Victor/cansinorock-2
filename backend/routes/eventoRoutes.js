const express = require("express");
const { createHash, timingSafeEqual } = require("node:crypto");
const eventoController = require("../controllers/eventoController");

const router = express.Router();
const hash = (texto) => createHash("sha256").update(texto).digest();

function autorizarCambio(req, res, next) {
  const clave = process.env.EVENTOS_ADMIN_TOKEN;
  if (!clave || clave.length < 32) {
    return res.status(503).json({ error: "La administración de eventos todavía no está configurada." });
  }

  const enviada = req.get("Authorization") || "";
  if (!timingSafeEqual(hash(enviada), hash(`Bearer ${clave}`))) {
    return res.status(401).json({ error: "Clave de administración incorrecta." });
  }
  next();
}

router.get("/", eventoController.listarEventos);
router.post("/", autorizarCambio, eventoController.crearEvento);
router.put("/:id", autorizarCambio, eventoController.actualizarEvento);
router.delete("/:id", autorizarCambio, eventoController.eliminarEvento);

module.exports = router;
