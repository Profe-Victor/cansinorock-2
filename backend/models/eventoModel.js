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

function crear(datos, callback) {
  db.execute(
    "INSERT INTO eventos (titulo, fecha, hora, lugar, descripcion, imagen, activo) VALUES (?, ?, ?, ?, ?, '', 1)",
    datos,
    callback,
  );
}

function actualizar(id, datos, callback) {
  db.execute(
    "UPDATE eventos SET titulo = ?, fecha = ?, hora = ?, lugar = ?, descripcion = ? WHERE id_evento = ?",
    [...datos, id],
    callback,
  );
}

function eliminar(id, callback) {
  db.execute("DELETE FROM eventos WHERE id_evento = ?", [id], callback);
}

module.exports = { obtenerEventos, crear, actualizar, eliminar };
