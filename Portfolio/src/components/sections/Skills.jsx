import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

function Skills() {
  const skillsRef = useFadeInOnScroll();

  return (
    <section id="skills">
      <h2 className="section-title">Habilidades</h2>
      
      <div className="skills-cards">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul className="skill-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
      
        <div className="skill-card">
          <h3>Backend</h3>
          <ul className="skill-list">
            <li>Java</li>
            <li>Spring / Spring Boot</li>
            <li>REST APIs</li>
            <li>Auth & Roles</li>
          </ul>
        </div>
      
        <div className="skill-card">
          <h3>Otros</h3>
          <ul className="skill-list">
            <li>Git / GitHub</li>
            <li>GitKraken</li>
            <li>JSON / Mock Data</li>
            <li>D3.js</li>
          </ul>
        </div>
      </div>
    </section>

  );
}

export default Skills;
