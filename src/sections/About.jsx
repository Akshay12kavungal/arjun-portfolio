import CountUp from '../components/CountUp'
import SectionTitle from '../components/SectionTitle'
import { profile, stats } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle index="01" eyebrow="Profile" title="About me" />
        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead">
              From office assistant to running <span className="hl">food &amp; beverage operations</span> — built on people, process and service.
            </p>
            <p className="about-text">{profile.about}</p>
          </div>
          <div className="about-side reveal">
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <CountUp value={s.value} suffix={s.suffix} />
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <ul className="details">
              <li><span>Date of birth</span>{profile.dob}</li>
              <li><span>Marital status</span>{profile.maritalStatus}</li>
              <li><span>Location</span>{profile.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
