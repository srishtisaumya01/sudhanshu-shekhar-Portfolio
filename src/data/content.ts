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
  portrait: '/assets/portrait/sudhanshu-hero.jpg',
  /** Second portrait, used in the introduction. */
  portraitAlt: '/assets/portrait/sudhanshu-conference.jpg',
  /** Third portrait, used beside the contact section. */
  portraitContact: '/assets/portrait/sudhanshu-lobby.jpg',
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
  jigyasa: {
    label: '03 / SOCIAL IMPACT',
    role: 'Co-Founder',
    themes: ['Education & literacy', 'Grassroots sports & youth', 'Women empowerment', 'Community welfare'],
    cta: { label: 'DISCOVER JIGYASA', href: 'https://jigyasasamajkalyan.org/' },
    images: [
      { src: undefined as string | undefined, alt: 'Youth at a Jigyasa Samaj Kalyan Kendra sports activity', caption: 'On the field' },
      { src: undefined as string | undefined, alt: 'Community members at a Jigyasa Samaj Kalyan Kendra initiative', caption: 'Community' },
      { src: undefined as string | undefined, alt: 'Jigyasa Samaj Kalyan Kendra participants', caption: 'Participants' },
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
  role?: Role
  /** What Sudhanshu actually did, in plain words. */
  roleNote?: string
  image?: string
  imageAlt: string
  /** Show the whole image (documents, badges) instead of cropping it. */
  contain?: boolean
  pending?: boolean
}

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
    id: 'saviskar',
    category: 'University event',
    title: 'SAVISKAR Startup event',
    org: 'Patliputra University, South Bihar',
    role: 'Speaker',
    roleNote: 'Photographed addressing the audience from the podium. Date and exact session to be confirmed.',
    image: '/assets/events/saviskar-startup-patliputra.jpg',
    imageAlt: 'Sudhanshu Shekhar speaking from the podium at the SAVISKAR Startup event, Patliputra University, South Bihar',
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
    id: 'india-russia',
    category: 'Youth forum',
    title: 'II Russian–Indian Youth Forum 2026',
    org: 'Badge shows the Embassy of the Russian Federation in India and the Ministry of Youth Affairs and Sports, Government of India',
    date: '16–17 June 2026',
    image: '/assets/events/russian-indian-youth-forum-badge.jpg',
    imageAlt: 'Delegate badge for the II Russian-Indian Youth Forum 2026, 16 to 17 June, with the name Sudhanshu Shekhar handwritten',
    contain: true,
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
]

export interface Moment {
  id: string
  src: string
  alt: string
}

/** Event photographs shown without captions. People are not named until the client confirms names and permission. */
export const moments: Moment[] = [
  { id: 'mt1', src: '/assets/events/photo-conference-room.jpg', alt: 'Sudhanshu Shekhar with a group of people in a conference room' },
  { id: 'mt2', src: '/assets/events/photo-university-office.jpg', alt: 'Sudhanshu Shekhar holding a framed photograph in an office' },
  { id: 'mt3', src: '/assets/events/photo-office-1.jpg', alt: 'Sudhanshu Shekhar holding a bouquet in an office' },
  { id: 'mt4', src: '/assets/events/photo-office-2.jpg', alt: 'Sudhanshu Shekhar with two others holding a bouquet in an office' },
  { id: 'mt5', src: '/assets/events/photo-office-3.jpg', alt: 'Sudhanshu Shekhar with a colleague holding a bouquet in a library office' },
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
  { id: 'm3', kind: 'Public talk', title: 'Speaking at a public event', source: 'Forum and date to be confirmed', thumb: '/assets/media/podium-talk.jpg', pending: true },
]

export interface Partnership {
  id: string
  partner: string
  purpose: string
  date?: string
  role: string
  outcome?: string
  image?: string
  imageAlt?: string
  pending?: boolean
}

export const partnerships: Partnership[] = [
  {
    id: 'p1',
    partner: "Bharat NGO's Connect, an initiative by Jogi Foundation",
    purpose: "Certificate of Collaboration presented at an 'NGO–CSR Partnerships for Sustainable Impact' event.",
    role: 'Recipient of the certificate',
  },
  {
    id: 'p2',
    partner: 'T.N. Agarwal Group of Institutions for Management and Technology',
    purpose: 'MoU signed to set up an incubation centre in collaboration, with faculty training and student placement as further aims.',
    role: 'Party to the MoU',
  },
]

export interface Evidence {
  id: string
  type: 'Award' | 'Recognition' | 'Invitation' | 'Event photo' | 'MoU' | 'Podcast' | 'Documentation'
  title: string
  org: string
  date?: string
  context: string
  image?: string
  contain?: boolean
  /** object-position used when the photo is cropped to fit its card. */
  position?: string
  /** Tailwind aspect class for the card photo (default 4:5). */
  aspect?: string
  /** width / height of the photo, used to keep prints in a row the same height. */
  ratio?: number
  /** slight rotation (degrees) for the print look */
  tilt?: number
  source?: string
  pending?: boolean
}

export const evidence: Evidence[] = [
  {
    id: 'e1',
    type: 'Award',
    title: 'Certificate of Collaboration',
    org: "Bharat NGO's Connect, Jogi Foundation",
    context: "Presented at an 'NGO–CSR Partnerships for Sustainable Impact' event. Date to be confirmed.",
    image: '/assets/partnerships/certificate-of-collaboration.jpg',
  },
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
  {
    id: 'e2',
    type: 'Event photo',
    title: 'Speaking at SAVISKAR Startup event',
    org: 'Patliputra University, South Bihar',
    context: 'Photograph from the podium. Date to be confirmed.',
    image: '/assets/events/saviskar-startup-patliputra.jpg',
    position: '10% 50%',
  },
  {
    id: 'e5',
    type: 'MoU',
    title: 'MoU with T.N. Agarwal Group of Institutions',
    org: 'T.N. Agarwal Group of Institutions for Management and Technology',
    context: 'MoU signing. The stated aims are an incubation centre, faculty training and student placement. Date to be confirmed.',
    image: '/assets/partnerships/mou-tn-agarwal-group.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'e6',
    type: 'Event photo',
    title: 'Round table: AI in Industrial Operations',
    org: 'Chamber of Commerce',
    context: 'Invited to a round-table conference on the integration of AI in industrial operations. Date to be confirmed.',
    image: '/assets/events/roundtable-chamber-of-commerce.jpg',
  },
  {
    id: 'e7',
    type: 'Event photo',
    title: 'Meeting with the Principal, Patna Science College',
    org: 'Patna Science College',
    context: 'Discussed student participation in startups, and research and policy study in science and technology. Date to be confirmed.',
    image: '/assets/events/meeting-patna-science-college.jpg',
  },
  {
    id: 'e8',
    type: 'Event photo',
    title: 'Meeting at Parliament House',
    org: 'Shri Harsh Malhotra, Union Minister of Corporate Affairs and MoS, National Highways',
    context: 'Discussed a partnership to provide work to women in his constituency. A meeting does not imply endorsement. Date to be confirmed.',
    image: '/assets/events/meeting-parliament-house.jpg',
  },
]

/** Plaques and trophies shown as a shelf in the Media section. Text is taken from what is printed on each object. */
export const recognitions: Evidence[] = [
  {
    id: 'r1',
    type: 'Recognition',
    title: 'Keynote Speaker, MaterialSpark 2025',
    org: 'MatES, IIT Patna',
    context: 'Plaque thanking him for "illuminating our gathering with your warmth and presence at MatES IIT Patna".',
    image: '/assets/media/keynote-materialspark-2025.jpg',
    ratio: 0.753,
    tilt: -1.2,
  },
  {
    id: 'r2',
    type: 'Recognition',
    title: 'Guest of Honour',
    org: 'Indian Institute of Technology Patna',
    context: 'Plaque with best wishes and a "token of love for your exceptional mentorship". Event and date to be confirmed.',
    image: '/assets/media/guest-of-honour-iit-patna.jpg',
    ratio: 0.599,
    tilt: 1,
  },
  {
    id: 'r3',
    type: 'Recognition',
    title: 'Seed funding, Startup Bihar',
    org: 'Startup Cell, Lokanayak Jai Prakash Institute of Technology, Chapra',
    context: 'Trophy reads: seed funded by Startup Bihar with the amount of 10 Lac, Sudhanshu Shekhar, Skrapper.',
    image: '/assets/media/seed-funding-startup-bihar.jpg',
    ratio: 0.568,
    tilt: -0.8,
  },
]
