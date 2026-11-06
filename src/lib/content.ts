// Central content source for crackbot.in
// Swap placeholder data with real content as it becomes available.

export const SITE = {
  name: "Crackbot",
  tagline: "Independent Cybersecurity Research Group",
  description:
    "Crackbot conducts cybersecurity research, publishes technical analysis, develops security tools and shares actionable threat intelligence to help researchers, defenders and the broader security community.",
  email: "system@crackbot.in",
  supportEmail: "support@crackbot.in",
  github: "https://github.com/Crackbot-in",
  twitter: "https://x.com/CrackB0t",
  discord: "https://discord.gg/crackbot",
} as const;

export type ResearchDomain = {
  slug: string;
  title: string;
  status: "ACTIVE" | "ACTIVE DEVELOPMENT" | "PLANNED" | "RESEARCH";
  description: string;
  tags: string[];
};

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  {
    slug: "vulnerability-research",
    title: "Vulnerability Research",
    status: "ACTIVE",
    description:
      "Deep-dive vulnerability analysis, root cause analysis, exploit development, and responsible disclosure coordination with vendors and CERTs.",
    tags: ["CVE Analysis", "Root Cause", "Exploit Dev", "RCE"],
  },
  {
    slug: "threat-intelligence",
    title: "Threat Intelligence",
    status: "RESEARCH",
    description:
      "Curated advisories, emerging threat tracking, breach notification monitoring, IOC collection, and defensive intelligence for blue teams.",
    tags: ["APT Tracking", "IOC Feeds", "Advisories", "Dark Web"],
  },
  {
    slug: "responsible-disclosure",
    title: "Responsible Disclosure",
    status: "PLANNED",
    description:
      "Structured vulnerability disclosure program, coordinated vendor communication, and public advisory publication with mitigation guidance.",
    tags: ["CVD", "Vendor Coordination", "Advisories", "CERT Liaison"],
  },
  {
    slug: "digital-forensics",
    title: "Digital Forensics & DFIR",
    status: "PLANNED",
    description:
      "Incident response tooling, forensic artifact parsers, timeline analysis, memory forensics, and evidence preservation workflows.",
    tags: ["Memory Forensics", "Disk Analysis", "Timeline", "Artifacts"],
  },
  {
    slug: "malware-analysis",
    title: "Malware Analysis",
    status: "ACTIVE DEVELOPMENT",
    description:
      "Static and dynamic malware analysis, family classification, YARA rule development, unpacking, and behavioral profiling.",
    tags: ["Static Analysis", "Dynamic Analysis", "YARA Rules", "Unpacking"],
  },
  {
    slug: "ai-security",
    title: "AI for Cyber Security",
    status: "RESEARCH",
    description:
      "LLM-assisted vulnerability discovery, automated triage, intelligent log analysis, and AI-powered threat hunting workflows.",
    tags: ["LLM Security", "Auto-Triage", "Vuln Discovery", "Threat Hunting"],
  },
  {
    slug: "security-tools",
    title: "Open Source Security Tools",
    status: "ACTIVE",
    description:
      "Production-grade security tools released under permissive licenses — scanners, parsers, analyzers, and automation frameworks.",
    tags: ["CLI Tools", "Scanners", "Parsers", "Automation"],
  },
  {
    slug: "education-community",
    title: "Security Education & Community",
    status: "ACTIVE DEVELOPMENT",
    description:
      "Technical blogs, research paper summaries, interactive labs, mentorship programs, and open knowledge sharing.",
    tags: ["Blog Posts", "Paper Reviews", "CTF Writeups", "Mentorship"],
  },
];

export const PRINCIPLES = [
  {
    title: "Ethics Before Exploitation",
    description:
      "We research to defend. Every technique we publish includes detection and mitigation guidance.",
  },
  {
    title: "Authorization Before Testing",
    description:
      "No unauthorized access. All research is conducted in controlled environments or with explicit permission.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "One thorough analysis beats ten shallow write-ups. We optimize for depth and reproducibility.",
  },
  {
    title: "Evidence Over Assumptions",
    description:
      "Claims backed by artifacts — PCAPs, memory dumps, binaries, logs. Reproducibility is non-negotiable.",
  },
  {
    title: "Team Success Over Individual Recognition",
    description:
      "Credit is shared. Publications are collaborative. The group's reputation outlasts any single contribution.",
  },
  {
    title: "Continuous Learning",
    description:
      "The threat landscape evolves daily. We invest in skill growth, tool mastery, and cross-domain knowledge.",
  },
  {
    title: "Open Collaboration",
    description:
      "We build in the open. Tools, datasets, and methodologies are shared for collective defense.",
  },
  {
    title: "Respect for Privacy & Law",
    description:
      "We operate within legal and ethical boundaries. Disclosure follows coordinated vulnerability disclosure best practices.",
  },
] as const;

export type Tool = {
  name: string;
  description: string;
  status: "RELEASED" | "IN DEVELOPMENT" | "PLANNED";
  repo?: string;
  tags: string[];
};

export const TOOLS: Tool[] = [
  {
    name: "Crackbot Framework",
    description:
      "Core automation framework powering our research workflows — modular plugins for scanning, parsing, and analysis.",
    status: "IN DEVELOPMENT",
    tags: ["Python", "Framework", "Automation"],
  },
  {
    name: "IOC Collector",
    description:
      "Aggregates, normalizes and deduplicates indicators of compromise from multiple intelligence sources into STIX-compliant feeds.",
    status: "PLANNED",
    tags: ["Threat Intel", "STIX/TAXII"],
  },
  {
    name: "Forensic Artifact Parsers",
    description:
      "A suite of parsers for Windows and Linux forensic artifacts — prefetch, shellbags, jump lists, journal files.",
    status: "PLANNED",
    tags: ["DFIR", "Parsers"],
  },
  {
    name: "YARA Rule Library",
    description:
      "Community YARA rules developed from our malware analysis work, with detection coverage notes.",
    status: "PLANNED",
    tags: ["Malware", "Detection"],
  },
] as const;

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  domain: string;
  readTime: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "hello-world",
    title: "Introducing Crackbot",
    date: "2026-11-01",
    excerpt:
      "Why we started an independent cybersecurity research group, and what we plan to publish.",
    tags: ["Community", "Announcement"],
    domain: "education-community",
    readTime: "3 min",
    body: [
      {
        paragraphs: [
          "Crackbot is an independent, community-driven cybersecurity research group. We conduct research on vulnerabilities and malware, publish technical analysis, develop open-source security tooling, and share actionable threat intelligence with the defender community.",
          "This site is our public home: a place for published research, tool releases, and write-ups. Everything we release under the Crackbot name follows our research principles — ethics before exploitation, evidence over assumptions, and coordinated responsible disclosure.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Weekly technical posts when research is ready — CVE root-cause analysis, malware behavior deep-dives, forensics walkthroughs, and tooling write-ups. We won't publish fluff; every finding must satisfy our validation gates before it goes out.",
          "If you'd like to contribute research, tooling, or write-ups, reach out on GitHub or by email. We're building this in the open, for the defender community first.",
        ],
      },
    ],
  },
];

export const TEAM = [
  {
    handle: "Team Crackbot",
    role: "Researchers • Analysts • Engineers",
    bio: "A collaborative group of security researchers currently establishing our public presence. Individual profiles will be listed here as publications go out.",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
