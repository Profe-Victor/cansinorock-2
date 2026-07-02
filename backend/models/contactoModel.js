const db = require("../config/db");

const guardarMensaje = (datos, callback) => {
  const sql = `
    INSERT INTO contacto
    (nombre, correo, telefono, asunto, mensaje)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [datos.nombre, datos.correo, datos.telefono, datos.asunto, datos.mensaje],
    callback,
  );
};

module.exports = { guardarMensaje };
