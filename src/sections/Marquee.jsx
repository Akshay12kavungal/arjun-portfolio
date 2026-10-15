import { strengths } from '../data/portfolio'
import './Marquee.css'

export default function Marquee() {
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
