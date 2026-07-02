import { useState } from "react";
import api from "../services/api";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const cambiarValor = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await api.post("/contacto", formulario);

      alert(respuesta.data.mensaje);

      setFormulario({
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      alert("Ocurrió un error al enviar el mensaje.");

      console.error(error);
    }
  };

  return (
    <section className="contacto py-5" id="contacto">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Contáctanos</h2>

          <p className="text-light">
            ¿Quieres contratar a CansinoRock? Escríbenos y nos pondremos en
            contacto contigo.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <form className="contacto-form p-4" onSubmit={enviarFormulario}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={cambiarValor}
                required
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Correo"
                name="correo"
                value={formulario.correo}
                onChange={cambiarValor}
                required
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Teléfono"
                name="telefono"
                value={formulario.telefono}
                onChange={cambiarValor}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Asunto"
                name="asunto"
                value={formulario.asunto}
                onChange={cambiarValor}
                required
              />
              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Mensaje"
                name="mensaje"
                value={formulario.mensaje}
                onChange={cambiarValor}
                required
              ></textarea>

              <button className="btn btn-warning w-100 fw-bold" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="mapa-box">
              <iframe
                src="https://www.google.com/maps?q=Nopala%20de%20Villagrán%20Hidalgo&output=embed"
                title="Mapa"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
