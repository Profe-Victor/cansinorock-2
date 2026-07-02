import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faGuitar,
  faDrum,
  faKeyboard,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

function Integrantes() {
  const integrantes = [
    {
      nombre: "Víco",
      instrumento: "Bajo",
      icono: faGuitar,
      descripcion: "Fundador de la banda Junto con Javi.",
    },

    {
      nombre: "Saul",
      instrumento: "Teclados",
      icono: faKeyboard,
      descripcion:
        "Aporta armonías y atmósferas que enriquecen cada interpretación.",
    },
    {
      nombre: "Edú",
      instrumento: "Batería",
      icono: faDrum,
      descripcion:
        "Marca el ritmo y la fuerza que distinguen el sonido de CansinoRock.",
    },
    {
      nombre: "Joel",
      instrumento: "Guitarra",
      icono: faGuitar,
      descripcion:
        "Responsable de los solos y la esencia del rock clásico de la banda.",
    },

    {
      nombre: "Monty",
      instrumento: "Teclados",
      icono: faMicrophone,
      descripcion: "La voz del rock Clasico en su maxima expresión.",
    },
    {
      nombre: "Mike",
      instrumento: "Saxofón",
      icono: faMusic,
      descripcion: "La potencia viva del Sax.",
    },
  ];

  return (
    <section className="integrantes py-5" id="integrantes">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold">Integrantes</h2>
          <p className="text-light">
            Conoce a quienes mantienen vivo el espíritu del rock clásico.
          </p>
        </div>

        <div className="row g-4">
          {integrantes.map((integrante, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="integrante-card h-100 text-center p-4">
                <div className="integrante-icon">
                  <FontAwesomeIcon icon={integrante.icono} />
                </div>

                <h4 className="mt-3 text-warning">{integrante.nombre}</h4>

                <h6 className="text-light mb-3">{integrante.instrumento}</h6>

                <p className="text-secondary">{integrante.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrantes;
