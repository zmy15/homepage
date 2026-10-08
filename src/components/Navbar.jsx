import { useState, useEffect } from 'react'
import { Icon } from './Icon.jsx'
import { navItems, profile } from '../data.js'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-tk-border bg-tk-bg/80 backdrop-blur-lg'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-tk-border bg-tk-panel font-mono text-sm font-bold text-tk-blue transition-colors group-hover:border-tk-blue/60">
            z
          </span>
          <span className="font-mono text-sm font-semibold text-tk-text">{profile.handle}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 font-mono text-sm text-tk-muted transition-colors hover:bg-tk-panel/60 hover:text-tk-blue"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/zmy15"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-2 inline-flex items-center gap-1.5 rounded-lg border border-tk-blue/40 bg-tk-blue/10 px-3.5 py-2 font-mono text-sm text-tk-blue transition-colors hover:bg-tk-blue/20"
          >
            <Icon name="github" className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center rounded-lg border border-tk-border text-tk-muted transition-colors hover:text-tk-blue md:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-tk-border bg-tk-bg/95 backdrop-blur-lg transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-80' : 'max-h-0 border-t-transparent'
        }`}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-mono text-sm text-tk-muted transition-colors hover:bg-tk-panel/60 hover:text-tk-blue"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/zmy15"
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center gap-2 rounded-lg border border-tk-blue/40 bg-tk-blue/10 px-3 py-2.5 font-mono text-sm text-tk-blue"
          >
            <Icon name="github" className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}