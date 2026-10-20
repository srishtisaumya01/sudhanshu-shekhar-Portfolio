import Lenis from 'lenis'
import { prefersReducedMotion } from './motion'

let lenis: Lenis | null = null

export function initSmoothScroll() {
  if (prefersReducedMotion()) return () => {}
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 })
  let raf = 0
  const loop = (t: number) => {
    lenis?.raf(t)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)
  return () => {
    cancelAnimationFrame(raf)
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToTarget(hash: string) {
  const el = hash === '#top' ? document.body : document.querySelector<HTMLElement>(hash)
  if (!el) return
  if (lenis) lenis.scrollTo(hash === '#top' ? 0 : el, { offset: -56 })
  else el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  history.replaceState(null, '', hash === '#top' ? ' ' : hash)
}

export const pauseScroll = (p: boolean) => (p ? lenis?.stop() : lenis?.start())
