import { profile, socials } from '../data.js'
import { Icon } from './Icon.jsx'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* ── Bio ── */}
          <div>
            <p className="section-title">// About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-tk-text sm:text-4xl">
              A bit about me
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-tk-muted">
              <p>{profile.bio}</p>
              <p>
                Most of my work sits at the intersection of developer tooling and games. I like
                problems where the documentation doesn't cover the answer yet — reverse-engineering
                an undocumented game API, or getting an IDE extension to behave against a moving
                target.
              </p>
              <p>
                I care about the unglamorous parts too: CI that actually gates merges, contribution
                guides that respect a stranger's time, and tests that fail loudly when something
                breaks.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  className="chip chip-hover inline-flex items-center gap-2 px-3 py-2"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Terminal card ── */}
          <div className="lg:pt-16">
            <div className="overflow-hidden rounded-2xl border border-tk-border bg-tk-bgDark/80 shadow-2xl backdrop-blur-sm">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-tk-border bg-tk-panel/50 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-tk-red/80" />
                <span className="h-3 w-3 rounded-full bg-tk-yellow/80" />
                <span className="h-3 w-3 rounded-full bg-tk-green/80" />
                <span className="ml-2 font-mono text-xs text-tk-dim">zmy15@njupt — ~</span>
              </div>

              <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed">
                <p className="text-tk-dim">
                  <span className="text-tk-green">➜</span> <span className="text-tk-cyan">~</span>{' '}
                  <span className="text-tk-text">cat profile.json</span>
                </p>
                <pre className="mt-3 overflow-x-auto text-tk-muted">
{`{
  "name":     `}<span className="text-tk-green">"{profile.name}"</span>{`,
  "school":   `}<span className="text-tk-green">"NJUPT"</span>{`,
  "location": `}<span className="text-tk-green">"{profile.location}"</span>{`,
  "focus": [
    `}<span className="text-tk-green">"AI tooling"</span>{`,
    `}<span className="text-tk-green">"game modding"</span>{`,
    `}<span className="text-tk-green">"dev experience"</span>{`
  ],
  "languages": [
    `}<span className="text-tk-green">"C#"</span>{`, `}<span className="text-tk-green">"Python"</span>{`,
    `}<span className="text-tk-green">"TypeScript"</span>{`, `}<span className="text-tk-green">"Lua"</span>{`
  ],
  "open_to":  `}<span className="text-tk-orange">"collaboration"</span>{`
}`}
                </pre>
                <p className="pt-2 text-tk-dim">
                  <span className="text-tk-green">➜</span> <span className="text-tk-cyan">~</span>{' '}
                  <span className="inline-block h-4 w-2 animate-blink bg-tk-blue align-middle" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const email = socials.find((s) => s.icon === 'mail')?.href ?? '#'

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-px">
        <div className="card relative overflow-hidden p-8 text-center sm:p-14">
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(122,162,247,0.16), transparent 65%)',
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <p className="section-title">// Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-tk-text sm:text-4xl">
              Let's build something
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-tk-muted">
              Open to collaboration on developer tooling, AI applications, and anything that
              involves making an engine do something it wasn't designed for.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={email}
                className="inline-flex items-center gap-2 rounded-xl bg-tk-blue px-6 py-3.5 font-mono text-sm font-semibold text-tk-bg transition-all hover:bg-tk-cyan hover:shadow-[0_8px_30px_-8px_rgba(122,162,247,0.6)]"
              >
                <Icon name="mail" className="h-4 w-4" />
                Send an email
              </a>
              <a
                href="https://github.com/zmy15"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-tk-border bg-tk-panel/60 px-6 py-3.5 font-mono text-sm font-semibold text-tk-muted transition-all hover:border-tk-blue/50 hover:text-tk-blue"
              >
                <Icon name="github" className="h-4 w-4" />
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-tk-border py-10">
      <div className="container-px flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-tk-dim">
          © {year} {profile.name} · Built with React, Vite &amp; Tailwind
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer noopener"
              title={s.label}
              aria-label={s.label}
              className="text-tk-dim transition-colors hover:text-tk-blue"
            >
              <Icon name={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}