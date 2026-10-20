/**
 * Single source of truth for all verifiable content.
 *
 * RULES
 * - Nothing here may be invented. Entries flagged `pending: true` are
 *   labelled slots: the client has told us this kind of item exists, but the
 *   details/evidence have not been supplied yet. They render with a visible
 *   "Pending verification" marker.
 * - To publish a real item: drop the file in /public/assets/<folder>/, fill in
 *   the fields, and remove `pending`.
 */

export const person = {
  name: 'Sudhanshu Shekhar',
  email: 'sudhanshushekhar1606@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sudhanshu-shekhar-875a65319/',
  instagram: 'https://www.instagram.com/sudhanshushekhar556/',
  portrait: '/assets/portrait/sudhanshu.jpg',
  /** Second portrait, used in the introduction. */
  portraitAlt: '/assets/portrait/sudhanshu-walking.jpg',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Engagements', href: '#engagements' },
  { label: 'Media', href: '#media' },
  { label: 'Collaborations', href: '#collaborations' },
  { label: 'Contact', href: '#connect' },
]

export const venturesContent = {
  skrappers: {
    label: '02 / ENTREPRENEURSHIP',
    role: 'Founder & CEO',
    themes: ['E-waste management', 'Material recovery', 'Responsible recycling', 'Resource circularity'],
    cta: { label: 'EXPLORE SKRAPPERS', href: undefined as string | undefined }, // add the official Skrappers URL
    images: [
      { src: undefined as string | undefined, alt: 'Skrappers e-waste operations', caption: 'Operations' },
      { src: undefined as string | undefined, alt: 'Recovered electronic components', caption: 'Materials' },
      { src: undefined as string | undefined, alt: 'The Skrappers team at work', caption: 'Team' },
    ],
  },
  sudhaArpan: {
    label: '03 / SOCIAL IMPACT',
    role: 'Co-Founder',
    themes: ['Grassroots sports', 'Youth empowerment', 'Community participation', 'Social development'],
    cta: { label: 'DISCOVER SUDHA ARPAN', href: undefined as string | undefined }, // add the official NGO URL / page
    images: [
      { src: undefined as string | undefined, alt: 'Youth playing at a Sudha Arpan sports event', caption: 'On the field' },
      { src: undefined as string | undefined, alt: 'Community members at a Sudha Arpan initiative', caption: 'Community' },
      { src: undefined as string | undefined, alt: 'Sudha Arpan participants', caption: 'Participants' },
    ],
  },
}

export const education = [
  // Degree names to be verified with the client before publishing.
  { degree: 'M.Sc. in Botany', note: 'Postgraduate' },
  { degree: 'B.S. in Plant Biology', note: 'Undergraduate' },
]

export type Role =
  | 'Attendee'
  | 'Speaker'
  | 'Organiser'
  | 'Institutional representative'
  | 'Award recipient'
  | 'Role to be confirmed'

export interface EventItem {
  id: string
  category: string
  title: string
  org: string
  date?: string
  location?: string
  role: Role
  /** What Sudhanshu actually did, in plain words. */
  roleNote: string
  image?: string
  imageAlt: string
  /** Show the whole image (documents, badges) instead of cropping it. */
  contain?: boolean
  pending?: boolean
}

export const roleGuide: { role: Role; meaning: string }[] = [
  { role: 'Attendee', meaning: 'Took part as a participant or guest.' },
  { role: 'Speaker', meaning: 'Addressed the audience or sat on a panel.' },
  { role: 'Organiser', meaning: 'Helped plan or run the event.' },
  { role: 'Award recipient', meaning: 'Formally recognised with a named award.' },
]

export const events: EventItem[] = [
  {
    id: 'swm-2026',
    category: 'Side event',
    title: 'SWM Rules 2026, BWGs and EPR Mechanism',
    org: "Side event, 'Driving Transformation & Strengthening Circularity'",
    date: '8 October 2026',
    location: 'Patna',
    role: 'Attendee',
    roleNote:
      "Attended with a participant badge reading 'Sudhanshu Shekhar, Skrappers'. The badge credits the Mitigation Action Facility-funded programme 'Waste Solutions for a Circular Economy in India'. Attendance does not imply endorsement by the organisers or funders.",
    image: '/assets/events/swm-side-event-badge.jpg',
    imageAlt: 'Participant badge for the SWM Rules 2026, BWGs and EPR Mechanism side event in Patna, 8 October 2026, reading Sudhanshu Shekhar, Skrappers',
    contain: true,
  },
  {
    id: 'g20',
    category: 'G20-related',
    title: 'G20-related event',
    org: 'Organiser to be confirmed',
    role: 'Role to be confirmed',
    roleNote: 'Participation in a related event does not imply an official G20 appointment.',
    imageAlt: 'Photograph from a G20-related event',
    pending: true,
  },
  {
    id: 'brics',
    category: 'BRICS side event',
    title: 'BRICS side event, New Delhi',
    org: 'Organiser to be confirmed',
    location: 'New Delhi',
    role: 'Role to be confirmed',
    roleNote: 'A side event is not an official BRICS role. Exact capacity to be confirmed.',
    imageAlt: 'Photograph from a BRICS side event in New Delhi',
    pending: true,
  },
  {
    id: 'constitution-club',
    category: 'Institutional',
    title: 'Constitution Club of India',
    org: 'Constitution Club of India',
    location: 'New Delhi',
    role: 'Role to be confirmed',
    roleNote: 'Engagement or recognition: to be confirmed from the supplied evidence.',
    imageAlt: 'Photograph from an engagement at the Constitution Club of India',
    pending: true,
  },
  {
    id: 'awards',
    category: 'Award',
    title: 'Awards & recognition',
    org: 'Awarding body to be confirmed',
    role: 'Role to be confirmed',
    roleNote: 'Award titles will be listed exactly as printed on the certificates.',
    imageAlt: 'Award certificate or ceremony photograph',
    pending: true,
  },
]

export interface MediaItem {
  id: string
  kind: 'Podcast' | 'Interview' | 'Public talk' | 'Panel' | 'Feature'
  title: string
  source: string
  date?: string
  thumb?: string
  link?: string
  pending?: boolean
}

export const media: MediaItem[] = [
  { id: 'm1', kind: 'Podcast', title: 'Podcast appearance', source: 'Host and show to be confirmed', pending: true },
  { id: 'm2', kind: 'Interview', title: 'Interview', source: 'Publication to be confirmed', pending: true },
  { id: 'm3', kind: 'Public talk', title: 'Public talk or panel', source: 'Forum to be confirmed', pending: true },
]

export interface Partnership {
  id: string
  partner: string
  purpose: string
  date?: string
  role: string
  outcome?: string
  pending?: boolean
}

export const partnerships: Partnership[] = [
  {
    id: 'p1',
    partner: 'Partner organisation',
    purpose: 'Purpose of the MoU or collaboration to be documented.',
    role: 'Role to be confirmed',
    pending: true,
  },
  {
    id: 'p2',
    partner: 'Partner organisation',
    purpose: 'Purpose of the MoU or collaboration to be documented.',
    role: 'Role to be confirmed',
    pending: true,
  },
]

export interface Evidence {
  id: string
  type: 'Award' | 'Invitation' | 'Event photo' | 'MoU' | 'Podcast' | 'Documentation'
  title: string
  org: string
  date?: string
  context: string
  image?: string
  contain?: boolean
  source?: string
  pending?: boolean
}

export const evidence: Evidence[] = [
  { id: 'e1', type: 'Award', title: 'Award certificate', org: 'Awarding body', context: 'Certificate to be supplied, with personal details redacted.', pending: true },
  { id: 'e2', type: 'Invitation', title: 'Event invitation', org: 'Hosting institution', context: 'Invitation to be supplied; email addresses and tokens removed.', pending: true },
  { id: 'e3', type: 'MoU', title: 'Memorandum of understanding', org: 'Partner organisation', context: 'First page only, once the partner has given permission.', pending: true },
  {
    id: 'e4',
    type: 'Event photo',
    title: 'Participant badge, SWM Rules 2026 side event',
    org: 'Side event on SWM Rules 2026, BWGs and EPR Mechanism',
    date: '8 October 2026',
    context: 'Participant badge issued at the event in Patna; attendance, not an award or speaking role.',
    image: '/assets/events/swm-side-event-badge.jpg',
    contain: true,
  },
]
