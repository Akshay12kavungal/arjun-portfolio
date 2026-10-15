import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <SectionTitle index="02" eyebrow="Career" title="Work experience" />
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline-item reveal">
              <span className={`timeline-dot ${job.current ? 'current' : ''}`} />
              <article className={`card job ${job.current ? 'is-current' : ''}`}>
                <div className="job-head">
                  <div>
                    <h3>{job.company}</h3>
                    <p className="job-role">{job.role}</p>
                    {job.department && <p className="job-dept">{job.department}</p>}
                  </div>
                  <span className={`period ${job.current ? 'current' : ''}`}>
                    {job.current && <span className="dot" />}
                    {job.period}
                  </span>
                </div>
                <p className="job-desc">{job.description}</p>
                <ul className="tags">
                  {job.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
