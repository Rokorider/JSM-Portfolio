function ProjectCard({ title, description, tech, repo, demo }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Tech:</strong> {tech}
      </p>

      <div>
        <a href={repo} target="_blank">GitHub</a>
        {demo && <a href={demo} target="_blank">Demo</a>}
      </div>
    </article>
  );
}

export default ProjectCard;
