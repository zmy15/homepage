import { techGroups, otherProjects } from '../data.js'
import { Icon } from './Icon.jsx'

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-px">
        <div className="max-w-2xl">
          <p className="section-title">// Tech Stack</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-tk-text sm:text-4xl">
            Tools I reach for
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group, i) => (
            <div
              key={group.title}
              className="card card-hover animate-fade-up p-5"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-tk-dim">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip chip-hover">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Other projects ── */}
        <div className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-title">// More on GitHub</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-tk-text">
                Other things I've made
              </h3>
            </div>
            <a
              href="https://github.com/zmy15?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="hidden shrink-0 items-center gap-1.5 font-mono text-sm text-tk-dim transition-colors hover:text-tk-blue sm:inline-flex"
            >
              All repositories
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p, i) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="card card-hover animate-fade-up group flex flex-col p-4"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="truncate font-mono text-sm font-semibold text-tk-text transition-colors group-hover:text-tk-blue">
                    {p.name}
                  </h4>
                  {p.stars > 0 && (
                    <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-tk-yellow">
                      <Icon name="star" className="h-3 w-3" />
                      {p.stars}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-tk-dim">{p.desc}</p>
                <span className="mt-3 font-mono text-xs text-tk-muted/70">{p.stack}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}