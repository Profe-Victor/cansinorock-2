const db = require("../config/db");

const obtenerEventos = (callback) => {
  const sql = "SELECT * FROM eventos ORDER BY fecha ASC";

  db.query(sql, (error, resultados) => {
    if (error) {
      return callback(error, null);
    }

    callback(null, resultados);
  });
};

module.exports = {
  obtenerEventos,
};
