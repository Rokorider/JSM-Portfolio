import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

function Hero() {
  const heroRef = useFadeInOnScroll();

  return (
    <section id="hero" ref={heroRef}>
      <h1>Hola, soy Javier</h1>

      <p>
        Desarrollador web con experiencia en React, Angular y Spring,
        enfocado en crear aplicaciones claras y funcionales.
      </p>

      <div>
        <a href="#projects">Ver proyectos</a>
        <a href="#contact">Contactar</a>
      </div>
    </section>
  );
}

export default Hero;
