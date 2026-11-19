import { ArrowUpRight } from 'lucide-react'
import { venturesContent } from '../data/content'
import { Button } from '../components/Button'
import { Photo } from '../components/Photo'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import type { ReactNode } from 'react'

type Venture = (typeof venturesContent)['skrappers']

interface FeatureProps {
  id: string
  name: string
  headline: ReactNode[]
  body: string[]
  venture: Venture
  flip?: boolean
  tone?: string
}

function VentureFeature({ id, name, headline, body, venture, flip, tone = '' }: FeatureProps) {
  // only real photographs are shown; with none, the copy is laid out in two balanced columns
  const [a, b, c] = venture.images.filter((i) => i.src)
  const hasPhotos = !!a

  const bodyEl = (
    <div className="fade-up space-y-5">
      {body.map((p) => (
        <p key={p} className={hasPhotos ? 'lede !text-[1.02rem] text-ivory/85' : 'font-serif text-[clamp(1.4rem,2.2vw,2rem)] leading-[1.3]'}>
          {p}
        </p>
      ))}
    </div>
  )
  const themesEl = (
    <ul className="fade-up border-t border-line" style={{ ['--d' as string]: '150ms' }}>
      {venture.themes.map((t, i) => (
        <li key={t} className="flex items-baseline gap-4 border-b border-line py-3">
          <span className="label !text-accent">0{i + 1}</span>
          <span className="display text-xl tracking-wide md:text-2xl">{t}</span>
        </li>
      ))}
    </ul>
  )
  const ctaEl = (
    <div className="fade-up mt-8" style={{ ['--d' as string]: '250ms' }}>
      <Button href={venture.cta.href} external solid disabled={!venture.cta.href}>
        {venture.cta.label} <ArrowUpRight size={14} aria-hidden />
      </Button>
      {!venture.cta.href && <p className="label mt-3 !text-[0.65rem]">Official page link coming soon</p>}
    </div>
  )

  return (
    <section id={id} aria-label={name} className={`relative px-4 py-24 md:px-8 md:py-40 ${tone}`}>
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex items-center justify-between">
          <SectionLabel>{venture.label}</SectionLabel>
          <span className="label fade-up">{venture.role}</span>
        </Reveal>

        <div className="mt-8">
          <Headline as="h2" className="text-[clamp(2.4rem,7.6vw,8.6rem)]" lines={headline} />
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
          {hasPhotos ? (
            <>
              <Reveal className={`relative md:col-span-7 ${flip ? 'md:order-2 md:col-start-6' : ''}`}>
                <div className="clip-reveal aspect-[4/5] w-[78%] md:aspect-[5/6]">
                  <Photo src={a.src} alt={a.alt} label={a.caption} className="h-full w-full" parallax={0.05} />
                </div>
                {b && (
                  <div
                    className="clip-reveal absolute -bottom-8 right-0 aspect-[4/3] w-[52%] border-[6px] border-ink md:-bottom-14"
                    style={{ ['--d' as string]: '250ms' }}
                  >
                    <Photo src={b.src} alt={b.alt} label={b.caption} className="h-full w-full" parallax={-0.07} />
                  </div>
                )}
                {c && (
                  <div
                    className="clip-reveal absolute -top-6 right-[6%] hidden aspect-square w-[24%] md:block"
                    style={{ ['--d' as string]: '450ms' }}
                  >
                    <Photo src={c.src} alt={c.alt} label={c.caption} className="h-full w-full" />
                  </div>
                )}
              </Reveal>
              <Reveal className={`mt-10 md:col-span-4 md:mt-0 md:self-end ${flip ? 'md:order-1 md:col-start-1' : 'md:col-start-9'}`}>
                {bodyEl}
                <div className="mt-8">{themesEl}</div>
                {ctaEl}
              </Reveal>
            </>
          ) : (
            <>
              <Reveal className="md:col-span-6">{bodyEl}</Reveal>
              <Reveal className="md:col-span-5 md:col-start-8">
                {themesEl}
                {ctaEl}
              </Reveal>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export function Ventures() {
  return (
    <div id="ventures">
      <VentureFeature
        id="skrappers"
        name="Skrappers"
        venture={venturesContent.skrappers}
        headline={[
          <>Waste isn&apos;t the end.</>,
          <>
            It&apos;s <em className="emph">another beginning.</em>
          </>,
        ]}
        body={[
          'Electronic waste presents a growing environmental challenge—and an opportunity to rethink how valuable materials are recovered and reused.',
          'Through Skrappers, Sudhanshu is focused on responsible e-waste management, material recovery, and environmentally conscious recycling practices.',
        ]}
      />
      <VentureFeature
        id="jigyasa"
        name="Jigyasa Samaj Kalyan Kendra"
        flip
        tone="bg-ink-2"
        venture={venturesContent.jigyasa}
        headline={[
          'Give youth the field.',
          <>
            Let <em className="emph">potential</em> take the lead.
          </>,
        ]}
        body={[
          'Jigyasa Samaj Kalyan Kendra is a registered public charitable trust in Muzaffarpur, Bihar, working across education, healthcare, women’s empowerment and community welfare.',
          'Through Jigyasa, Sudhanshu supports grassroots sports and youth participation, a belief that the chance to play, take part and grow can bring people together.',
        ]}
      />
    </div>
  )
}
