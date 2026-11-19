import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { person } from '../data/content'
import { Photo } from '../components/Photo'
import { Headline } from '../components/Reveal'
import { Button } from '../components/Button'
import { scrollToTarget } from '../lib/scroll'

export function Hero({ ready }: { ready: boolean }) {
  return (
    <section
      id="top"
      className={`grain relative flex min-h-[100svh] flex-col overflow-hidden px-4 pb-6 pt-24 md:px-[4.5vw] md:pt-28 ${ready ? 'shown' : ''}`}
    >
      {/* portrait sits centred behind the headline and fades into the black */}
      <div
        className="clip-reveal pointer-events-none absolute left-1/2 top-[11svh] z-0 h-[46svh] w-[min(78vw,430px)] -translate-x-1/2 md:top-[9svh] md:h-[72svh]"
        style={{
          ['--d' as string]: '250ms',
          maskImage: 'linear-gradient(to bottom, #000 45%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 45%, transparent 98%)',
        }}
      >
        <Photo
          src={person.portrait}
          alt="Sudhanshu Shekhar in a dark suit in front of framed black-and-white portraits"
          label="Sudhanshu's portrait (tall, 4:5 or taller)"
          className="h-full w-full [&_img]:contrast-110 [&_img]:grayscale [&_.ph]:place-items-start [&_.ph>div]:mt-8"
          parallax={0.05}
          eager
        />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-6">
        <p className="label fade-up flex items-center gap-2" style={{ ['--d' as string]: '100ms' }}>
          <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          Entrepreneurship / Sustainability / Social Impact
        </p>
        <p className="label fade-up hidden shrink-0 text-right md:block" style={{ ['--d' as string]: '200ms' }}>
          Based in Patna, India
        </p>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-end pt-[34svh] text-center md:pt-[15svh]">
        <h1 className="display w-full text-[clamp(2.8rem,12.5vw,5rem)] leading-[0.92] md:text-[clamp(4rem,8.2vw,10rem)]" aria-label="Building ventures. Empowering communities. Connecting ideas.">
          <Headline
            as="span"
            show={ready}
            delay={150}
            className="block"
            lines={[
              'Building ventures.',
              <span className="it">
                Empowering <span className="text-accent">communities.</span>
              </span>,
              'Connecting ideas.',
            ]}
          />
        </h1>

        <div className="fade-up mt-8 max-w-xl" style={{ ['--d' as string]: '700ms' }}>
          <p className="text-[1.05rem] leading-relaxed text-ivory md:text-lg">
            I&apos;m Sudhanshu Shekhar—an entrepreneur and social-impact leader working across environmental sustainability, community
            development, and purposeful collaboration.
          </p>
          <p className="label mt-5 !text-sand">
            Founder &amp; CEO, Skrappers <span className="mx-1 text-accent">·</span> Co-Founder, Jigyasa Samaj Kalyan Kendra
          </p>
          <p className="label mt-2">Entrepreneur · Speaker · Sustainability Advocate</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <Button solid href="#about">
              Explore my journey <ArrowDown size={16} aria-hidden />
            </Button>
            <a
              href="#connect"
              className="ulink inline-flex items-center gap-2 pb-1 text-sm"
              onClick={(e) => {
                e.preventDefault()
                scrollToTarget('#connect')
              }}
            >
              Let&apos;s connect <ArrowUpRight size={14} aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="label relative z-10 mt-8 flex items-center border-t border-line pt-4">
        <span className="flex items-center gap-2">
          <span aria-hidden className="h-6 w-px bg-accent" /> Scroll to discover
        </span>
      </div>
    </section>
  )
}
