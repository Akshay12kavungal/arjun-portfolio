import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, suffix = '' }) {
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
