import { NAV } from '../data/nav'
import { profile } from '../data/portfolio'
import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
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
  )
}
