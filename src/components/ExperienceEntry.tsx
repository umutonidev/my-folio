export type Experience = {
  period: string
  role: string
  organization: string
  location: string
  points: string[]
}

type ExperienceEntryProps = {
  experience: Experience
}

export function ExperienceEntry({ experience }: ExperienceEntryProps) {
  return (
    <article className="experience-entry">
      <p className="experience-period">{experience.period}</p>
      <div className="experience-detail">
        <h3>{experience.role}</h3>
        <p className="experience-company">{experience.organization}<span> · </span>{experience.location}</p>
        <ul>
          {experience.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </article>
  )
}
