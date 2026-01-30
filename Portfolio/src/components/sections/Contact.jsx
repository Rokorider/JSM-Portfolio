import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

function Contact() {
  const contactRef = useFadeInOnScroll();

  return (
    <section id="contact" ref={contactRef}>
      <h2>Contacto</h2>

      <p>
        Si quieres contactar conmigo, puedes hacerlo a través de:
      </p>

      <ul>
        <li>Email: javier.sabadell@email.com</li>
        <li>
          GitHub: <a href="https://github.com/tu-usuario" target="_blank">github.com/tu-usuario</a>
        </li>
        <li>
          LinkedIn: <a href="https://linkedin.com/in/tu-perfil" target="_blank">linkedin.com/in/tu-perfil</a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
