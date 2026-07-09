const express = require("express");
require("./config/db");
const contactoRoutes = require("./routes/contactoRoutes");
const cors = require("cors");

const eventoRoutes = require("./routes/eventoRoutes");

const app = express();

// Middleware para procesar JSON
app.use(cors());
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
app.use("/api/contacto", contactoRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto ${PORT}`);
});
module.exports = app;
