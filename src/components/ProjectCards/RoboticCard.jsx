export const ProjectCrd = ({ title, description, github }) => {
  return (
    <section className="project-grid">
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </section>
  );
};