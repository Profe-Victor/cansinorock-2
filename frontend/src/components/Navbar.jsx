import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-warning" href="#inicio">
          🎸 CansinoRock
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#mision-vision">
                Misión y Visión
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#eventos">
                Eventos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#integrantes">
                Integrantes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#galeria">
                Galería
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#aliados">
                Aliados
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
