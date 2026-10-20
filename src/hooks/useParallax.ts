import { useEffect } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/**
 * Moves every [data-parallax="0.15"] element vertically relative to its
 * distance from the viewport centre. One shared scroll listener.
 */
export function useParallax() {
  useEffect(() => {
    if (prefersReducedMotion()) return
    let raf = 0
    const update = () => {
      raf = 0
      const mid = window.innerHeight / 2
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const r = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect()
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return
        const speed = parseFloat(el.dataset.parallax ?? '0')
        el.style.transform = `translate3d(0, ${((r.top + r.height / 2 - mid) * speed).toFixed(1)}px, 0)`
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
