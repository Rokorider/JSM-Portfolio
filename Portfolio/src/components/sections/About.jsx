import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

function About() {
  const aboutRef = useFadeInOnScroll();

  return (
    <section id="about" ref={aboutRef}>
      <h2>About Me</h2>

      <p>
        Soy desarrollador web con formación en FP y un enfoque muy práctico
        hacia la programación. Me gusta entender cómo funcionan las cosas
        por dentro y escribir código claro y mantenible.
      </p>

      <p>
        He trabajado tanto en frontend como en backend, usando tecnologías
        como React, Angular y Spring Boot, y me siento cómodo integrando
        interfaces con APIs REST y sistemas de autenticación.
      </p>

      <p>
        Actualmente sigo formándome y mejorando mis habilidades, con interés
        en seguir profundizando en backend y en nuevas áreas como la
        inteligencia artificial.
      </p>
    </section>
  );
}

export default About;
