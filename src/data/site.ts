// Single source of truth for site-wide facts.
// Only public, monitored addresses go here. Personal/internal inboxes stay off the site.

export const SITE = {
  name: 'Crackbot',
  url: 'https://crackbot.in',
  description:
    'Crackbot is a small, independent security research group and think tank. We research vulnerabilities, malware and threat activity, and share what we learn with the community.',
  email: 'support@crackbot.in',
  securityEmail: 'researcher@crackbot.in',
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
    blurb: 'Write-ups of security bugs: how they work and how to spot them. Published after the vendor has been told.',
  },
  malware: {
    label: 'Malware Analysis',
    short: 'Malware',
    blurb: 'Notes from taking samples apart in a lab: how they get in and what they do once they are there.',
  },
  intelligence: {
    label: 'Threat Intelligence',
    short: 'Intelligence',
    blurb: 'Campaigns and infrastructure we have been following, with indicators where we can share them.',
  },
  forensics: {
    label: 'Forensics & IR',
    short: 'Forensics',
    blurb: 'Working out what happened after an incident: artefacts, methods and lessons.',
  },
  notes: {
    label: 'Notes',
    short: 'Notes',
    blurb: 'Shorter posts and news about the group.',
  },
};

export const PRINCIPLES = [
  {
    title: 'Permission first',
    body: 'We test our own systems, public bug bounty scopes, or systems we have been given permission to test.',
  },
  {
    title: 'Report before we publish',
    body: 'If we find a vulnerability, including a zero-day, we report it to the vendor privately before writing about it.',
  },
  {
    title: 'Show the evidence',
    body: 'We try to include something you can check, and to say so when we are not sure.',
  },
] as const;
