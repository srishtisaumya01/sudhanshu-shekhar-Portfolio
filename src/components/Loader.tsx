import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/** Short (~1.3s) intro wipe. Calls onDone as the curtain lifts so the hero can start revealing. */
export function Loader({ onDone }: { onDone: () => void }) {
  const [out, setOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const quick = prefersReducedMotion()
    const t1 = setTimeout(() => setOut(true), quick ? 0 : 1000)
    const t2 = setTimeout(onDone, quick ? 20 : 1250)
    const t3 = setTimeout(() => setGone(true), quick ? 40 : 1900)
    return () => [t1, t2, t3].forEach(clearTimeout)
  }, [onDone])

  if (gone) return null
  return (
    <div className={`loader ${out ? 'out' : ''}`} aria-hidden="true">
      <div className="w-[min(70vw,360px)]">
        <div className="display mb-4 text-center text-4xl">Sudhanshu Shekhar</div>
        <div className="loader-bar" />
      </div>
    </div>
  )
}
