// All site content lives here — edit this file to update the page.
// No component changes needed for normal content updates.

export const profile = {
  name: 'zmy15',
  handle: 'zmy15',
  avatar: 'https://avatars.githubusercontent.com/u/109537161?v=4',
  location: 'Nanjing, China',
  school: 'Nanjing University of Posts and Telecommunications',
  tagline: 'AI Tooling × Game Modding',
  intro: [
    "I build AI tools for developers, and occasionally bend game engines",
    'into doing things they were never meant to do.',
  ],
  bio: 'Student at Nanjing University of Posts and Telecommunications. I work across C#, Python, TypeScript, and Lua — mostly on developer tooling and game-adjacent projects.',
  // Rotating words in the hero
  rotating: ['AI Tooling', 'Game Modding', 'Developer Tools', 'Rendering Engines', 'Open Source'],
}

export const socials = [
  { label: 'GitHub',   href: 'https://github.com/zmy15', icon: 'github' },
  { label: 'Email',    href: 'mailto:109537161+zmy15@users.noreply.github.com', icon: 'mail' },
  { label: 'Releases', href: 'https://github.com/zmy15/DeepSeek-for-VisualStudio/releases', icon: 'download' },
]

export const stats = [
  { label: 'Total Stars', value: '128+', hint: 'across public repos' },
  { label: 'Public Repos', value: '27',  hint: 'and counting' },
  { label: 'Followers',   value: '11',   hint: 'on GitHub' },
  { label: 'Top Project', value: '109',  hint: 'DeepSeek for VS', icon: 'star' },
]

// ── Featured projects ────────────────────────────────────────────────────────
export const projects = [
  {
    name: 'DeepSeek for Visual Studio',
    repo: 'DeepSeek-for-VisualStudio',
    href: 'https://github.com/zmy15/DeepSeek-for-VisualStudio',
    tagline: 'AI coding agent for Visual Studio 2022/2026',
    description:
      'Chat, inline completion, and five autonomous agents that explore, plan, patch, and verify builds — inside the IDE. Works with the official DeepSeek API or any OpenAI-compatible endpoint.',
    highlights: [
      'Five-agent workflow — Ask, Explore, Plan, Edit, Build collaborate via a Handoff protocol',
      'Reliable edits — patch editing, four-tier matching, Healing repair, per-hunk diff confirmation',
      'Extensible — Markdown-based Skills and MCP tool servers',
      '900K token context with Deep Reasoning',
      'Multimodal — images, screenshots, PDFs, and OCR',
    ],
    stack: ['C#', '.NET 4.7.2', 'WPF', 'WebView2', 'MCP'],
    badges: [
      { label: '★ 109', href: 'https://github.com/zmy15/DeepSeek-for-VisualStudio/stargazers', tone: 'yellow' },
      { label: 'Forks 17', href: 'https://github.com/zmy15/DeepSeek-for-VisualStudio/forks', tone: 'blue' },
      { label: 'VS Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=zmy15.DS4-VS', tone: 'purple' },
    ],
    accent: 'blue',
    featured: true,
  },
  {
    name: 'Interview Agent',
    repo: 'interview-agent',
    href: 'https://github.com/zmy15/interview-agent',
    tagline: 'AI mock-interview platform with dual perspective',
    description:
      'Practice as the interviewer or as the candidate. Combines a RAG knowledge base, live web search, and voice I/O with detailed multi-dimension evaluation reports.',
    highlights: [
      'Dual mode — interview *as* the interviewer, or *as* the candidate, with SSE streaming',
      'RAG — LangChain + FAISS retrieval with SHA-256 index integrity verification',
      'Voice — faster-whisper STT and Piper TTS, CPU/GPU selectable, off by default',
      'Tiered difficulty — intern / campus / experienced, plus first / second / HR rounds',
      'Four ways to launch — desktop window, scripts, Docker Compose, single container',
    ],
    stack: ['Python 3.11+', 'FastAPI', 'React 19', 'TypeScript', 'Ant Design 6', 'DeepSeek'],
    badges: [
      { label: '★ 10', href: 'https://github.com/zmy15/interview-agent/stargazers', tone: 'yellow' },
      { label: 'Forks 2', href: 'https://github.com/zmy15/interview-agent/forks', tone: 'blue' },
    ],
    accent: 'purple',
    featured: true,
  },
  {
    name: 'genshin-ugc-webui',
    repo: 'genshin-ugc-webui',
    href: 'https://github.com/zmy15/genshin-ugc-webui',
    tagline: 'A pure-Lua HTML/CSS engine inside a game sandbox',
    description:
      "Renders HTML/CSS-style interfaces inside Genshin Impact's UGC sandbox — parsing, cascade, flex layout, shape clipping, and animation. Zero external dependencies.",
    highlights: [
      'HTML/CSS subset — parsing, cascade, specificity, inheritance, :hover / :active',
      'Real layout — box model, flex with wrap / grow / shrink, absolute positioning',
      'Shape clipping — circular, rectangular, and arbitrary-shape masks',
      'Game hooks — onTick(dt) per-frame logic, keyboard plus 8 cursor events',
      'Proof of concept — a playable Chrome-style dino runner built on top of it',
    ],
    stack: ['Lua 5.3', 'No dependencies'],
    badges: [
      { label: '34 test suites passing', href: 'https://github.com/zmy15/genshin-ugc-webui', tone: 'green' },
    ],
    accent: 'cyan',
    featured: true,
  },
]

// ── Tech stack ───────────────────────────────────────────────────────────────
export const techGroups = [
  {
    title: 'Languages',
    items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'C++', 'Lua', 'Java'],
  },
  {
    title: 'Frameworks & Runtimes',
    items: ['.NET', 'FastAPI', 'React', 'WPF', 'Vite'],
  },
  {
    title: 'AI & Data',
    items: ['DeepSeek', 'LangChain', 'FAISS', 'MCP', 'Whisper', 'Piper TTS'],
  },
  {
    title: 'Tooling',
    items: ['Git', 'Docker', 'Visual Studio', 'GitHub Actions', 'Cloudflare'],
  },
]

// ── Other projects (compact list) ────────────────────────────────────────────
export const otherProjects = [
  { name: 'ChinaRailway',  href: 'https://github.com/zmy15/ChinaRailway',  desc: 'Railway schedule queries via API — station big-screen mini program', stack: 'Python', stars: 8 },
  { name: 'Eventask',      href: 'https://github.com/zmy15/Eventask',      desc: 'Cross-platform calendar and task management system',               stack: '.NET 10', stars: 1 },
  { name: 'database',      href: 'https://github.com/zmy15/database',      desc: 'A relational database prototype written from scratch',              stack: 'C++',    stars: 0 },
  { name: 'CurrencyWarsTool', href: 'https://github.com/zmy15/CurrencyWarsTool', desc: 'Team-composition calculator for Honkai: Star Rail',           stack: 'C#',     stars: 0 },
  { name: 'Veinminermod',  href: 'https://github.com/zmy15/Veinminermod',  desc: 'Vein-mining mod for Minecraft Java (Fabric)',                       stack: 'Java',   stars: 0 },
  { name: 'nonebot_plugin_zzzwiki', href: 'https://github.com/zmy15/nonebot_plugin_zzzwiki', desc: 'Zenless Zone Zero wiki plugin for NoneBot2',         stack: 'Python', stars: 1 },
]

export const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack',    href: '#stack' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]