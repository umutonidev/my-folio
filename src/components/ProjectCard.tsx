export type Project = {
  number: string
  title: string
  type: string
  featured: boolean
  description: string
  tools: string[]
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.featured ? 'project-card-featured' : ''}`}>
      <div className="project-meta">
        <span className="project-number" aria-label={`Project ${project.number}`}>{project.number}</span>
        <p className="project-type">{project.type}</p>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {project.tools.length > 0 && (
        <ul className="tag-list" aria-label={`${project.title} technologies and components`}>
          {project.tools.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      )}
    </article>
  )
}
