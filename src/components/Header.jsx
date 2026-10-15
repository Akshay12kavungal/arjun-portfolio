import { useState } from 'react'
import Icon from './Icon'
import { NAV } from '../data/nav'
import useTheme from '../hooks/useTheme'
import useScroll from '../hooks/useScroll'
import useActiveSection from '../hooks/useActiveSection'
import './Header.css'

export default function Header() {
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
