import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";
import yo from "../../assets/images/yo.jpg";

function Hero() {
  const heroRef = useFadeInOnScroll();

  return (
    <section id="hero" ref={heroRef}>
      <h1>Hola, soy Javier Sabadell</h1>

      <p>
        Desarrollador web con experiencia en React, Angular y Spring,
        enfocado en crear aplicaciones claras y funcionales.
      </p>


      <div>
        <a href="#projects">Ver proyectos</a>
        <a href="#contact">Contactar</a>
      </div>

      <div className="hero-photo">
        <img src={yo} alt="Foto de Javier" />
        <span className="frame top-left"></span>
        <span className="frame bottom-right"></span>
      </div>

    </section>
  );
}

export default Hero;
