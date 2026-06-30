const express = require("express");
require("./config/db");

const eventoRoutes = require("./routes/eventoRoutes");

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    proyecto: "CansinoRock 2.0",
    mensaje: "🎸 API funcionando correctamente",
    version: "1.0.0",
  });
});

app.use("/api/eventos", eventoRoutes);

module.exports = app;
