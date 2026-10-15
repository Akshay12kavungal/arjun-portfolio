import './SectionTitle.css'

export default function SectionTitle({ index, eyebrow, title, light }) {
  return (
    <div className={`section-title reveal ${light ? 'light' : ''}`}>
      <span className="eyebrow">
        <em>{index}</em> {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  )
}
