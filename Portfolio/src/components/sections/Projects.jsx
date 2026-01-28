import ProjectCard from "../ui/ProyectCard"
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

function Projects() {
  const projectsRef = useFadeInOnScroll();

  return (
    <section id="projects" ref={projectsRef}>
      <h2>Projects</h2>

      <div className="projects-grid">
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;
