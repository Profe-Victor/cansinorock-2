const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("======================================");
  console.log("🎸 CansinoRock API");
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
  console.log("======================================");
});
