import { useState, useEffect } from 'react'
import { Icon, toneClasses } from './Icon.jsx'
import { profile, socials, stats } from '../data.js'

/** Types out rotating phrases, terminal-style. */
function useTypewriter(words, { typeMs = 85, deleteMs = 45, holdMs = 1500 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timer = setTimeout(
        () => {
          setText((prev) =>
            deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1),
          )
        },
        deleting ? deleteMs : typeMs,
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs])

  return text
}

export function Hero() {
  const typed = useTypewriter(profile.rotating)

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #2f334d 1px, transparent 1px), linear-gradient(to bottom, #2f334d 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* ── Left: copy ── */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-tk-green/30 bg-tk-green/10 px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tk-green opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tk-green" />
              </span>
              <span className="font-mono text-xs text-tk-green">Available for collaboration</span>
            </div>

            <p className="mt-7 font-mono text-sm text-tk-dim">
              <span className="text-tk-purple">$</span> whoami
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              <span className="text-tk-text">Hi, I'm </span>
              <span className="bg-gradient-to-r from-tk-blue via-tk-cyan to-tk-purple bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>

            <div className="mt-5 flex min-h-[2.5rem] items-center font-mono text-lg sm:text-2xl">
              <span className="text-tk-muted">I do&nbsp;</span>
              <span className="font-semibold text-tk-blue">{typed}</span>
              <span className="ml-0.5 inline-block h-5 w-[3px] animate-blink bg-tk-blue sm:h-6" />
            </div>

            <div className="mt-7 max-w-xl space-y-2 text-base leading-relaxed text-tk-muted">
              {profile.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-tk-blue px-5 py-3 font-mono text-sm font-semibold text-tk-bg transition-all hover:bg-tk-cyan hover:shadow-[0_8px_30px_-8px_rgba(122,162,247,0.6)]"
              >
                View Projects
                <Icon name="arrow-down" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="https://github.com/zmy15"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-tk-border bg-tk-panel/60 px-5 py-3 font-mono text-sm font-semibold text-tk-muted transition-all hover:border-tk-blue/50 hover:text-tk-blue"
              >
                <Icon name="github" className="h-4 w-4" />
                GitHub Profile
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  title={s.label}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-tk-border bg-tk-panel/50 text-tk-dim transition-all hover:-translate-y-0.5 hover:border-tk-blue/50 hover:text-tk-blue"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: avatar ── */}
          <div className="relative mx-auto animate-fade-up lg:mx-0" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-6 rounded-full bg-tk-blue/20 blur-3xl" aria-hidden="true" />
            <div className="relative animate-float">
              <div className="rounded-full border border-tk-border bg-gradient-to-br from-tk-panel to-tk-bgDark p-2 shadow-2xl">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  width="224"
                  height="224"
                  loading="eager"
                  className="h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56"
                />
              </div>
              {/* Availability dot */}
              <span
                className="absolute bottom-5 right-5 h-5 w-5 rounded-full border-4 border-tk-bg bg-tk-green"
                title="Available"
              />
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="card card-hover animate-fade-up p-5"
              style={{ animationDelay: `${0.25 + i * 0.07}s` }}
            >
              <p className="flex items-center gap-1.5 font-mono text-2xl font-bold text-tk-blue sm:text-3xl">
                {s.icon === 'star' && <Icon name="star" className="h-5 w-5 text-tk-yellow sm:h-6 sm:w-6" />}
                {s.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-tk-text">{s.label}</p>
              <p className="mt-0.5 font-mono text-xs text-tk-dim">{s.hint}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}