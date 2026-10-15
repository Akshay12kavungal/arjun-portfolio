import { useEffect, useState } from 'react'

export default function useScroll() {
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
