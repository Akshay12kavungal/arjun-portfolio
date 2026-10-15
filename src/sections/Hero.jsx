import photo from '../assets/arjun.jpg'
import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="grid" />
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="pill">
            <span className="dot" /> Open to new opportunities
          </p>
          <h1>
            {first} <span className="serif">{rest.join(' ')}.</span>
          </h1>
          <p className="role">{profile.title}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get in touch <Icon name="arrowRight" size={18} />
            </a>
            <a href="#experience" className="btn btn-ghost">View experience</a>
          </div>
          <ul className="hero-meta">
            <li><Icon name="pin" size={16} /> {profile.location}</li>
            <li><Icon name="mail" size={16} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
        </div>
        <div className="hero-photo">
          <div className="photo-ring" aria-hidden="true" />
          <div className="photo-frame">
            <img src={photo} alt={`Portrait of ${profile.name}`} />
          </div>
          <div className="float-card fc-1">
            <span className="fc-icon"><Icon name="users" size={18} /></span>
            <div>
              <strong>Operations In-Charge</strong>
              <span>MES Medical College</span>
            </div>
          </div>
          <div className="float-card fc-2">
            <strong className="big">7+</strong>
            <span>Years in<br />operations</span>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}
