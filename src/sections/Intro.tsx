import { person } from '../data/content'
import { Photo } from '../components/Photo'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

const marquee = ['Entrepreneurship', 'E-waste', 'Sustainability', 'Grassroots sports', 'Youth', 'Community', 'Ideas']

export function Intro() {
  return (
    <section id="about" aria-label="About" className="relative px-4 py-28 md:px-8 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <SectionLabel>01 / THE PERSON</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.6rem,9vw,10rem)]"
            lines={[
              'More than a title.',
              <>
                A journey with <em className="emph">purpose.</em>
              </>,
            ]}
          />
        </div>

        <Reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-12">
          <div className="clip-reveal md:col-span-4 md:col-start-2 md:row-start-1">
            <Photo
              src={person.portraitAlt}
              alt="Sudhanshu Shekhar walking through a lit garden path at night"
              label="Second portrait"
              className="aspect-[3/4] w-full max-w-md"
              parallax={0.05}
            />
          </div>
          <div className="fade-up md:col-span-5 md:col-start-7 md:row-start-1 md:self-end" style={{ ['--d' as string]: '150ms' }}>
            <p className="font-serif text-[clamp(1.5rem,2.6vw,2.4rem)] leading-[1.25]">
              Rooted in <em className="emph">scientific learning</em> and driven by a commitment to meaningful change, Sudhanshu brings together
              entrepreneurship, environmental responsibility, and grassroots community development.
            </p>
            <p className="lede mt-8 text-ivory-dim">
              From building an <span className="text-ivory">e-waste management enterprise</span> to supporting youth through sports, his work
              reflects an interest in turning ideas into action.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-28 overflow-hidden border-y border-line py-5" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {marquee.map((m) => (
                <span key={m + k} className="display flex items-center text-4xl text-ivory/20 md:text-6xl">
                  {m}
                  <span className="mx-6 text-accent md:mx-10">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
