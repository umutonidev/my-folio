export type SkillGroupType = {
  title: string
  skills: string[]
}

type SkillGroupProps = {
  group: SkillGroupType
  index: number
}

export function SkillGroup({ group, index }: SkillGroupProps) {
  return (
    <article className={`skill-group ${index === 2 ? 'skill-group-wide' : ''}`}>
      <h3>{group.title}</h3>
      <ul className="tag-list">
        {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </article>
  )
}
