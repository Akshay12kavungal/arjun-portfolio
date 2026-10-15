import Icon from '../components/Icon'
import SectionTitle from '../components/SectionTitle'
import { education } from '../data/portfolio'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <SectionTitle index="04" eyebrow="Learning" title="Education" />
        <div className="edu-grid">
          {education.map((e, i) => (
            <div key={e.title} className="card edu reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="edu-top">
                <span className="edu-icon"><Icon name="cap" size={22} /></span>
                <span className="period">{e.period}</span>
              </div>
              <h3>{e.title}</h3>
              <p>{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
