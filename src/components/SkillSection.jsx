import { useState } from 'react'

function SkillSection({ skills }) {
  const [selectedSkill, setSelectedSkill] = useState(skills[0])

  return (
    <div className="skillArea">
      <div className="skillList">
        {skills.map((skill) => (
          <button
            key={skill.name}
            className={`skillChip ${selectedSkill.name === skill.name ? 'active' : ''}`}
            type="button"
            onClick={() => setSelectedSkill(skill)}
          >
            {skill.name}
          </button>
        ))}
      </div>

      <div className="skillDescription">
        <p className="eyebrow">Selected Skill / 선택한 역량</p>
        <h3>{selectedSkill.name}</h3>
        <p>{selectedSkill.description}</p>
      </div>
    </div>
  )
}

export default SkillSection