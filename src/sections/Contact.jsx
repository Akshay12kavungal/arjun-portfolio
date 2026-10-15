import { useState } from 'react'
import Icon from '../components/Icon'
import { profile } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
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
