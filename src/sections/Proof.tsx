import { useCallback, useState } from 'react'
import { evidence, type Evidence } from '../data/content'
import { EvidenceRing } from '../components/EvidenceRing'
import { Lightbox } from '../components/Lightbox'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

// Only verified items go in the ring; pending slots stay in the data file until their evidence arrives.
const verified = evidence.filter((e) => !e.pending)

export function Proof() {
  const [active, setActive] = useState<Evidence | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <section id="proof" aria-label="Proof of work" className="border-t border-line px-4 py-24 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>PROOF OF WORK</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.4rem,7.6vw,8.6rem)]"
            lines={[
              'Milestones that',
              <>
                tell the <em className="emph">story.</em>
              </>,
            ]}
          />
        </div>
        <Reveal className="mt-14 md:mt-20">
          <p className="lede fade-up mb-12">
            A selective record of certificates, event badges and photographs. Private details are redacted, and nothing is published without
            permission.
          </p>
          <div className="fade-up" style={{ ['--d' as string]: '150ms' }}>
            <EvidenceRing items={verified} onOpen={setActive} />
          </div>
        </Reveal>
      </div>
      <Lightbox item={active} onClose={close} />
    </section>
  )
}
