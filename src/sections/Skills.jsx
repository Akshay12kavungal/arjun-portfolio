import Icon from '../components/Icon'
import SectionTitle from '../components/SectionTitle'
import { skills, tools, languages } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle index="03" eyebrow="Expertise" title="Skills" />
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={s.name} className="card skill reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="skill-icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.name}</h3>
              {s.note && <p>{s.note}</p>}
            </div>
          ))}
        </div>

        <div className="skills-lower">
          <div className="card reveal">
            <h3 className="sub">Technical skills</h3>
            <ul className="tools">
              {tools.map((t) => (
                <li key={t.name}>
                  <span className={`tool-icon ${t.icon}`}><Icon name={t.icon} size={22} /></span>
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="card reveal">
            <h3 className="sub">Languages</h3>
            <ul className="langs">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="lang-row">
                    <span>{l.name}</span>
                    <em>{l.level}</em>
                  </div>
                  <div className="bar"><span style={{ '--w': `${l.value}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
