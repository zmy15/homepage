import { Icon, toneClasses } from './Icon.jsx'
import { projects } from '../data.js'

const accentText = {
  blue:   'text-tk-blue',
  purple: 'text-tk-purple',
  cyan:   'text-tk-cyan',
}
const accentBorder = {
  blue:   'group-hover:border-tk-blue/50',
  purple: 'group-hover:border-tk-purple/50',
  cyan:   'group-hover:border-tk-cyan/50',
}
const accentGlow = {
  blue:   'group-hover:shadow-[0_10px_50px_-14px_rgba(122,162,247,0.45)]',
  purple: 'group-hover:shadow-[0_10px_50px_-14px_rgba(187,154,247,0.45)]',
  cyan:   'group-hover:shadow-[0_10px_50px_-14px_rgba(125,207,255,0.45)]',
}

function ProjectCard({ project }) {
  return (
    <article
      className={`card group flex flex-col p-6 transition-all duration-300 sm:p-7 ${accentBorder[project.accent]} ${accentGlow[project.accent]} hover:-translate-y-1`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className={`truncate font-mono text-lg font-bold ${accentText[project.accent]}`}>
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-tk-muted">{project.tagline}</p>
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Open ${project.name}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-tk-border text-tk-dim transition-colors hover:border-tk-blue/50 hover:text-tk-blue"
        >
          <Icon name="external" className="h-4 w-4" />
        </a>
      </div>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.badges.map((b) => (
          <a
            key={b.label}
            href={b.href}
            target="_blank"
            rel="noreferrer noopener"
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition-opacity hover:opacity-80 ${toneClasses[b.tone]}`}
          >
            {b.tone === 'yellow' && <Icon name="star" className="h-3 w-3" />}
            {b.tone === 'blue' && <Icon name="fork" className="h-3 w-3" />}
            {b.label}
          </a>
        ))}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-tk-muted">{project.description}</p>

      {/* Highlights */}
      <ul className="mt-5 space-y-2.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-tk-muted/90">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentText[project.accent]} bg-current`} />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-tk-border/70">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      {/* Live GitHub stats card */}
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-auto block overflow-hidden rounded-xl border border-tk-border/70 pt-5 transition-colors hover:border-tk-blue/40"
      >
        <img
          src={`https://github-readme-stats.vercel.app/api/pin/?username=zmy15&repo=${project.repo}&theme=tokyonight&hide_border=true&bg_color=1a1b26`}
          alt={`${project.name} GitHub stats`}
          loading="lazy"
          className="w-full"
        />
      </a>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <p className="section-title">// Featured Projects</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-tk-text sm:text-4xl">
            Things I've built
          </h2>
          <p className="mt-4 text-base leading-relaxed text-tk-muted">
            Three projects that best represent what I work on — an IDE agent used by hundreds of
            developers, a full-stack AI application, and a rendering engine that probably shouldn't
            exist.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`animate-fade-up ${i === 0 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}