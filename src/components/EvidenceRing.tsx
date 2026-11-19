import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react'
import type { Evidence } from '../data/content'
import { prefersReducedMotion } from '../lib/motion'
import { Photo } from './Photo'

const SPEED = 9 // degrees per second

/**
 * Auto-rotating 3D ring of achievements. It pauses while the pointer or keyboard
 * focus is on it, can be paused or stepped by hand, and stays still for
 * reduced-motion users.
 */
export function EvidenceRing({ items, onOpen }: { items: Evidence[]; onOpen: (e: Evidence) => void }) {
  const ringRef = useRef<HTMLDivElement>(null)
  const state = useRef({ angle: 0, delta: 0, hover: false })
  const [paused, setPaused] = useState(() => prefersReducedMotion())
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  const step = 360 / items.length
  // radius grows with the number of cards so neighbours never overlap
  const radius = Math.max(0.82, 0.58 / Math.tan(Math.PI / items.length))

  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000
      last = now
      const s = state.current
      if (!pausedRef.current && !s.hover) s.angle -= SPEED * dt
      if (s.delta !== 0) {
        const move = s.delta * 0.12
        s.angle += move
        s.delta -= move
        if (Math.abs(s.delta) < 0.05) {
          s.angle += s.delta
          s.delta = 0
        }
      }
      ring.style.transform = `translateZ(calc(var(--r) * -1)) rotateY(${s.angle.toFixed(2)}deg)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const nudge = (dir: 1 | -1) => {
    state.current.delta += dir * step
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Achievements and evidence"
      onMouseEnter={() => (state.current.hover = true)}
      onMouseLeave={() => (state.current.hover = false)}
      onFocusCapture={() => (state.current.hover = true)}
      onBlurCapture={() => (state.current.hover = false)}
    >
      <div className="overflow-hidden">
        <div
          className="mx-auto"
          style={{
            ['--cw' as string]: 'clamp(220px, 62vw, 340px)',
            ['--r' as string]: `calc(var(--cw) * ${radius.toFixed(3)})`,
            perspective: '1700px',
            height: 'calc(var(--cw) * 1.78)',
            width: '100%',
            position: 'relative',
          }}
        >
          <div
            ref={ringRef}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: 'var(--cw)',
              marginLeft: 'calc(var(--cw) / -2)',
              height: '100%',
              transformStyle: 'preserve-3d',
            }}
          >
            {items.map((item, i) => (
              <article
                key={item.id}
                aria-label={`${i + 1} of ${items.length}: ${item.title}`}
                className="absolute inset-x-0 top-0"
                style={{
                  transform: `rotateY(${i * step}deg) translateZ(var(--r))`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <p className="label !text-accent">
                  {item.type}
                  {item.date ? ` · ${item.date}` : ''}
                </p>
                <h3 className="display mt-2 min-h-[2.6em] text-2xl md:text-3xl">{item.title}</h3>
                <button
                  onClick={() => onOpen(item)}
                  aria-label={`Open preview: ${item.title}`}
                  className="group relative mt-3 block w-full overflow-hidden border border-line text-left"
                >
                  <Photo
                    src={item.image}
                    alt={item.title}
                    label={`${item.type}, redacted`}
                    contain={item.contain}
                    position={item.position}
                    className={`${item.aspect ?? 'aspect-[4/5]'} w-full bg-ink-2`}
                  />
                  <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center bg-ink/80 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 size={16} aria-hidden />
                  </span>
                </button>
                <p className="mt-3 text-sm">{item.org}</p>
                <p className="mt-1 text-xs text-ivory-dim">{item.context}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button className="btn !min-h-[44px] !px-3" aria-label="Previous achievement" onClick={() => nudge(1)}>
          <ChevronLeft size={18} aria-hidden />
        </button>
        <button className="btn !min-h-[44px] !gap-2 !px-4" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
          {paused ? <Play size={14} aria-hidden /> : <Pause size={14} aria-hidden />}
          {paused ? 'Play rotation' : 'Pause rotation'}
        </button>
        <button className="btn !min-h-[44px] !px-3" aria-label="Next achievement" onClick={() => nudge(-1)}>
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  )
}
