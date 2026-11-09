export const siteConfig = {
  name: 'Tebib Labs',
  slogan: 'Be Wise.',
  tagline: 'Engineering Software. Building What Matters.',
  subtagline: 'SOFTWARE ENGINEERING / APPLIED R&D',
  description:
    'Tebib Labs develops software products, computational tools, and applied research solutions that turn complex problems into practical technology.',
  
  // Brand roots & meaning
  brandStory: {
    origin: 'Tebib (ጠቢብ)',
    meaning:
      'Derived from the Amharic word for "wise," "learned," or "master craftsman," Tebib Labs embodies the synthesis of deep engineering knowledge and disciplined, practical implementation.',
    ethos: 'Technology is most valuable when knowledge, creativity, and sound engineering come together.',
  },

  founder: {
    name: 'Neguse Solomon Mekonnen',
    title: 'Founder, CEO & Founding Engineer',
    image: `${import.meta.env.BASE_URL}images/founder-portrait.png`,
    bio: 'Civil Engineering graduate, Erasmus Mundus master’s graduate in Risk Assessment and Management of Civil Infrastructures (NoRISK, Universitat Politècnica de Catalunya), and Computer Science student. His research specializes in structural reliability, Bayesian updating, uncertainty quantification, computational mechanics, and structural monitoring.',
    education: [
      'Master of Science (Erasmus Mundus NoRISK) — Risk Assessment and Management of Civil Infrastructures, Universitat Politècnica de Catalunya',
      'Bachelor of Science — Civil Engineering',
      'Undergraduate Studies — Computer Science',
    ],
    researchFocus: [
      'Structural Reliability & Probabilistic Assessment',
      'Bayesian Updating with Proof-Load & Sensor Evidence',
      'Uncertainty Quantification (UQ)',
      'Scientific Software Architecture',
      'Structural Health Monitoring (SHM)',
    ],
  },

  contact: {
    email: 'contact@tebiblabs.com',
    inquiriesEmail: 'research@tebiblabs.com',
    status: 'Direct email inquiries welcome. Backend form endpoint integration configurable via environment variables.',
  },

  links: {
    github: 'https://github.com/tebiblabs',
    linkedin: 'https://linkedin.com/company/tebiblabs',
    researchgate: 'https://www.researchgate.net',
  },

  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Research', path: '/research' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ],
};
