import Icon from './Icon'
import useScroll from '../hooks/useScroll'
import './BackToTop.css'

export default function BackToTop() {
  const { y } = useScroll()
  return (
    <a href="#top" className={`to-top ${y > 600 ? 'show' : ''}`} aria-label="Back to top">
      <Icon name="arrowUp" size={20} />
    </a>
  )
}
