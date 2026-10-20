import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/** Soft follower, enabled only for fine pointers with hover and no reduced-motion preference. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion()
    const el = ref.current
    if (!ok || !el) return
    el.style.display = 'block'
    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let raf = 0
    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      el.classList.toggle('big', !!(e.target as Element).closest('a,button,[data-hover]'))
    }
    const tick = () => {
      cx += (x - cx) * 0.2
      cy += (y - cy) * 0.2
      el.style.transform = `translate3d(${cx}px,${cy}px,0)`
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor" style={{ display: 'none' }} aria-hidden="true" />
}
