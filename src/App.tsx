import { useEffect, useState } from 'react'
import { Cursor } from './components/Cursor'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { useParallax } from './hooks/useParallax'
import { initSmoothScroll } from './lib/scroll'
import { Collaborations } from './sections/Collaborations'
import { Connect } from './sections/Connect'
import { Engagements } from './sections/Engagements'
import { Foundation } from './sections/Foundation'
import { Hero } from './sections/Hero'
import { Intro } from './sections/Intro'
import { Media } from './sections/Media'
import { Proof } from './sections/Proof'
import { Ventures } from './sections/Ventures'

export default function App() {
  const [ready, setReady] = useState(false)
  useParallax()
  useEffect(() => initSmoothScroll(), [])

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={ready} />
        <Intro />
        <Ventures />
        <Foundation />
        <Engagements />
        <Media />
        <Collaborations />
        <Proof />
        <Connect />
      </main>
    </>
  )
}
