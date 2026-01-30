import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

function About() {
  const aboutRef = useFadeInOnScroll();

  return (
    <section id="about" ref={aboutRef}>
      <h2>Sobre mí</h2>

      <p>
        Soy <strong>desarrollador web</strong> con formación en la formación profesional de 
        <strong> Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> y experiencia trabajando con 
        <strong> React, Angular y Spring</strong>.  
        Me gusta crear aplicaciones <em>claras, funcionales y bien estructuradas</em>, donde el código tenga sentido 
        tanto por dentro como por fuera.
      </p>

      <p>
        Para mí, desarrollar software no es solo hacer que algo funcione, sino 
        <em> entender el problema, diseñar una solución lógica y convertirla en una experiencia sencilla </em> 
        para quien la usa.  
        Disfruto especialmente del <strong>equilibrio entre frontend y backend</strong>, cuidando tanto la interfaz 
        como la arquitectura que hay detrás.
      </p>

      <p>
        Actualmente sigo <strong>formándome de manera constante</strong> y mantengo una mentalidad abierta a otros 
        horizontes de la programación, como <em>Inteligencia Artificial, DevOps y nuevas arquitecturas</em>, 
        con el objetivo de ampliar mi perfil y construir soluciones cada vez más 
        <strong> completas, sólidas y pensadas para personas reales</strong>.
      </p>
    </section>
  );
}

export default About;
