// Single source of truth for site-wide facts.
// If a link or address here isn't real and monitored, remove it rather than guess.

export const SITE = {
  name: 'Crackbot',
  url: 'https://crackbot.in',
  description:
    'Crackbot is an independent security research group. We study vulnerabilities, malware and attacker infrastructure, and publish what we find with the evidence attached.',
  email: 'system@crackbot.in',
  securityEmail: 'system@crackbot.in',
  github: 'https://github.com/Crackbot-in',
  githubHandle: 'Crackbot-in',
} as const;

export const NAV = [
  { href: '/research/', label: 'Research' },
  { href: '/disclosure/', label: 'Disclosure' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;

export type TopicKey = 'vulnerabilities' | 'malware' | 'intelligence' | 'forensics' | 'notes';

export const TOPICS: Record<TopicKey, { label: string; short: string; blurb: string }> = {
  vulnerabilities: {
    label: 'Vulnerability Research',
    short: 'Vulnerabilities',
    blurb:
      'Root-cause write-ups of bugs we find or reproduce: what broke, why it broke, and how to tell if you were hit. Always after the vendor has had time to fix it.',
  },
  malware: {
    label: 'Malware & Reverse Engineering',
    short: 'Malware',
    blurb:
      'Taking samples apart in an isolated lab: how they get in, what they do once inside, and the detection rules we wrote along the way.',
  },
  intelligence: {
    label: 'Threat Intelligence',
    short: 'Intelligence',
    blurb:
      'Following campaigns and the infrastructure behind them. Indicators, timelines and context that a defender can actually act on this week.',
  },
  forensics: {
    label: 'Forensics & Incident Response',
    short: 'Forensics',
    blurb:
      'Methods for finding out what happened after the fact: artefacts worth collecting, how to read them, and small tools to make that faster.',
  },
  notes: {
    label: 'Field Notes',
    short: 'Notes',
    blurb: 'Shorter pieces: lab set-ups, tooling, things we learned the hard way, and news about the group.',
  },
};

export const PRINCIPLES = [
  {
    title: 'We only test what we’re allowed to test.',
    body: 'Our own lab, public bug bounty scopes, or systems we have written permission for. Nothing else, however tempting.',
  },
  {
    title: 'The vendor hears it before the internet does.',
    body: 'We follow coordinated disclosure with a default 90-day window, and we publish fixes and detection advice alongside the details.',
  },
  {
    title: 'We show our work.',
    body: 'Claims come with samples, hashes, logs or reproduction steps. If we are unsure, we say so instead of rounding up to certainty.',
  },
  {
    title: 'One good report beats ten thin ones.',
    body: 'We would rather publish late and right. Every piece is read by someone other than its author before it goes out.',
  },
] as const;

export const IN_PROGRESS = [
  { name: 'Lab infrastructure', note: 'An isolated analysis environment for detonating and recording samples safely.' },
  { name: 'Detection rules', note: 'YARA and Sigma rules from our own analysis, published with notes on false positives.' },
  { name: 'Artefact parsers', note: 'Small, dependency-light tools for Windows and Linux forensic artefacts.' },
] as const;
