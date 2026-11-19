import { useState, type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { person } from '../data/content'
import { Photo } from '../components/Photo'
import { Button } from '../components/Button'
import { Headline, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'

const purposes = ['Partnership', 'Speaking or podcast', 'Shared initiative', 'Media', 'Just saying hello']

/**
 * There is no backend, so the form is honest about it: it composes an email
 * and opens the visitor's mail app. Nothing is stored or sent by this site.
 */
function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'opened'>('idle')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const org = String(f.get('org') || '').trim()
    const subject = `${f.get('purpose')} · ${f.get('name')}${org ? ` (${org})` : ''}`
    const body = `${f.get('message')}\n\n—\n${f.get('name')}${org ? `\n${org}` : ''}`
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('opened')
  }

  const field = 'w-full border-b border-ivory/30 bg-transparent py-3 text-base outline-none transition-colors focus:border-accent placeholder:text-ivory/30'

  return (
    <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
      <label className="block">
        <span className="label">Name *</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="label">Organisation (optional)</span>
        <input name="org" autoComplete="organization" className={field} />
      </label>
      <label className="block md:col-span-2">
        <span className="label">Purpose *</span>
        <select name="purpose" required defaultValue="" className={`${field} bg-ink`}>
          <option value="" disabled>
            Choose one
          </option>
          {purposes.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="label">Message *</span>
        <textarea name="message" required rows={4} className={field} />
      </label>
      <div className="md:col-span-2">
        <Button type="submit" solid>
          Compose email <ArrowUpRight size={14} aria-hidden />
        </Button>
        <p className="mt-3 text-xs text-ivory-dim" role="status">
          {status === 'opened'
            ? `Your email app should now be open with the message ready to send to ${person.email}. If nothing opened, please email that address directly.`
            : `This opens your email app with the message prefilled. Nothing is sent or stored until you press send. Email is the supported contact method.`}
        </p>
      </div>
    </form>
  )
}

export function Connect() {
  return (
    <section id="connect" aria-label="Let's connect" className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="absolute right-[4.5vw] top-32 hidden w-[19vw] max-w-[320px] md:block">
          <Photo
            src={person.portraitContact}
            alt="Sudhanshu Shekhar in a dark suit standing in a hotel lobby in front of framed black-and-white portraits"
            label="Portrait"
            className="aspect-[3/4] w-full"
            parallax={0.04}
          />
        </div>
        <Reveal>
          <SectionLabel>08 / LET&apos;S CONNECT</SectionLabel>
        </Reveal>
        <div className="mt-8">
          <Headline
            as="h2"
            className="text-[clamp(2.8rem,11vw,5rem)] md:text-[clamp(4rem,8.6vw,11rem)]"
            lines={[
              'Good things happen',
              <>
                when people <em className="emph">connect.</em>
              </>,
            ]}
          />
        </div>

        <Reveal className="mt-14 grid gap-14 md:mt-24 md:grid-cols-12">
          <div className="fade-up md:col-span-5">
            <p className="lede">
              Founders, institutions, entrepreneurs, sustainability advocates, community builders, and curious minds—there is always room for a
              meaningful conversation.
            </p>
            <p className="font-serif mt-6 text-3xl italic text-sand">Have an idea worth exploring? Let&apos;s start a conversation.</p>
            <p className="label mt-8">Email</p>
            <a href={`mailto:${person.email}`} className="ulink break-all text-lg">
              {person.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${person.email}`}>
                Send an email <ArrowUpRight size={14} aria-hidden />
              </Button>
              <Button href={person.linkedin} external>
                Connect on LinkedIn <ArrowUpRight size={14} aria-hidden />
              </Button>
              <Button href={person.instagram} external>
                Follow on Instagram <ArrowUpRight size={14} aria-hidden />
              </Button>
            </div>
          </div>
          <div className="fade-up md:col-span-6 md:col-start-7" style={{ ['--d' as string]: '150ms' }}>
            <ContactForm />
          </div>
        </Reveal>

        <footer className="mt-28 flex flex-col justify-between gap-3 border-t border-line pt-6 md:flex-row">
          <p className="label">© {new Date().getFullYear()} Sudhanshu Shekhar · Patna, India</p>
        </footer>
      </div>
    </section>
  )
}
