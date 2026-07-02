import heroBg from "../assets/images/hero-cansinorock.jpg";
import logo from "../assets/logo/cansinorock-logo.png";

function Hero() {
  return (
    <header
      id="inicio"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.95) 0%, rgba(0,0,0,.75) 35%, rgba(0,0,0,.25) 100%), url(${heroBg})`,
      }}
    >
      <div className="container hero-content">
        <img src={logo} alt="CansinoRock" className="hero-logo" />

        <h1>
          El rock clásico <span>vive aquí</span>
        </h1>

        <p>Reviviendo los grandes clásicos del rock en cada presentación.</p>

        <div className="hero-buttons">
          <a href="#eventos" className="btn btn-warning btn-lg">
            📅 Próximos eventos
          </a>

          <a href="#contacto" className="btn btn-danger btn-lg">
            🎸 Contrátanos
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
