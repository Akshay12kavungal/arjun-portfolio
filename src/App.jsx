import { useEffect, useRef, useState } from 'react'
import photo from './assets/arjun.jpg'
import { profile, stats, strengths, experience, skills, tools, languages, education } from './data'
import './App.css'

const YEAR = new Date().getFullYear()

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const ICONS = {
  rupee: <><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  package: <><path d="m16.5 9.4-9-5.19" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96 12 12.01l8.73-5.05" /><path d="M12 22.08V12" /></>,
  chart: <><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></>,
  truck: <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9" /><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>,
  headset: <><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></>,
  doc: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></>,
  sheet: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 9v12" /><path d="M15 9v12" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  copy: <><rect x="8" y="8" width="14" height="14" rx="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  cap: <><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /><path d="M22 10v6" /></>,
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  arrowUp: <><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></>,
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
}

function Icon({ name, size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function useScroll() {
  const [state, setState] = useState({ y: 0, progress: 0 })
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setState({ y: window.scrollY, progress: max > 0 ? window.scrollY / max : 0 })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return state
}

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable; theme just won't persist
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))]
}

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [n, setN] = useState(reduced ? value : 0)
  useEffect(() => {
    const el = ref.current
    if (reduced) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1200, 1)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, reduced])
  return <strong ref={ref}>{n}{suffix}</strong>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()
  const { y, progress } = useScroll()
  const active = useActiveSection()

  return (
    <header className={`header ${y > 20 ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container nav">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">AK</span>
          <span className="logo-text">Arjun<span>.</span></span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm hide-sm">Hire me</a>
          <button
            className={`menu-btn ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function SectionTitle({ index, eyebrow, title, light }) {
  return (
    <div className={`section-title reveal ${light ? 'light' : ''}`}>
      <span className="eyebrow">
        <em>{index}</em> {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  )
}

function Hero() {
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

function Marquee() {
  const items = [...strengths, ...strengths]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((s, i) => (
          <span key={i}>{s}<i>✦</i></span>
        ))}
      </div>
    </div>
  )
}

function About() {
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

function Experience() {
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

function Skills() {
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

function Education() {
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

function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="grid" />
      </div>
      <div className="container">
        <div className="contact-head reveal">
          <span className="eyebrow light"><em>05</em> Contact</span>
          <h2>Let&apos;s work <span className="serif">together.</span></h2>
          <p>Open to opportunities in operations, customer relations and administration.</p>
        </div>
        <div className="contact-grid">
          <a className="contact-card reveal" href={profile.phoneHref}>
            <span className="c-icon"><Icon name="phone" /></span>
            <span className="c-label">Phone</span>
            <span className="c-value">{profile.phone}</span>
            <span className="c-cta">Call now <Icon name="arrowRight" size={16} /></span>
          </a>
          <div className="contact-card reveal">
            <span className="c-icon"><Icon name="mail" /></span>
            <span className="c-label">Email</span>
            <a className="c-value" href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className={`copy ${copied ? 'done' : ''}`} onClick={copyEmail}>
              <Icon name={copied ? 'check' : 'copy'} size={15} />
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
          <div className="contact-card reveal">
            <span className="c-icon"><Icon name="pin" /></span>
            <span className="c-label">Address</span>
            <address className="c-value">
              {profile.address.map((line) => <span key={line}>{line}</span>)}
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}

function BackToTop() {
  const { y } = useScroll()
  return (
    <a href="#top" className={`to-top ${y > 600 ? 'show' : ''}`} aria-label="Back to top">
      <Icon name="arrowUp" size={20} />
    </a>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <a href="#top" className="logo">
            <span className="logo-mark">AK</span>
          </a>
          <nav>
            {NAV.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
          </nav>
          <span>© {YEAR} {profile.name}</span>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}
