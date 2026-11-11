import { useEffect, useRef, useState } from 'react'
import Home from './pages/portfolio/Home'
import './App.css'

const navigation = [
  ['home', 'Home'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['lab', 'Lab'],
  ['courses', 'Short Courses'],
  ['contact', 'Contact'],
] as const

const oldSections: Record<string, string> = {
  '/experience': 'experience', '/education': 'education', '/skill': 'skills',
  '/course': 'courses', '/lab': 'lab', '/contact': 'contact',
}

function currentSection() {
  return window.location.hash.slice(1) || 'home'
}

export default function App() {
  const [section, setSection] = useState(currentSection)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const legacy = oldSections[window.location.pathname.replace(/\/$/, '')]
    if (legacy) window.history.replaceState(null, '', `/#${legacy}`)

    function syncSection() {
      setSection(currentSection())
      setMenuOpen(false)
    }

    syncSection()
    if (window.location.hash) {
      document.getElementById(currentSection())?.scrollIntoView({ behavior: 'instant' })
    }

    window.addEventListener('hashchange', syncSection)
    return () => window.removeEventListener('hashchange', syncSection)
  }, [])

  return (
    <div className="portfolio-site">
      <a className="portfolio-skip" href="#portfolio-main">Skip to content</a>
      <header className="portfolio-header">
        <div className="portfolio-wrap portfolio-header-row" onKeyDown={(event) => {
          if (event.key === 'Escape' && menuOpen) {
            setMenuOpen(false)
            menuButton.current?.focus()
          }
        }}>
          <a href="#home" className="portfolio-brand" onClick={() => setMenuOpen(false)}>
            My <span>Portfolio</span>
          </a>
          <button type="button" className="portfolio-menu" ref={menuButton} aria-expanded={menuOpen}
            aria-controls="portfolio-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} aria-hidden="true" />
          </button>
          <nav id="portfolio-navigation" aria-label="Main navigation" data-open={menuOpen}>
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={section === id ? 'portfolio-current' : undefined}
                aria-current={section === id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>
        </div>
      </header>
      <main id="portfolio-main" tabIndex={-1}>
        <Home />
      </main>
      <footer className="portfolio-footer">
        <div className="portfolio-wrap portfolio-footer-row">
          <nav aria-label="More portfolio links">
            <a href="https://linkedin.com/in/chearasmey" aria-label="LinkedIn">
              <i className="bx bxl-linkedin" aria-hidden="true" /> LinkedIn
            </a>
            <a href="https://facebook.com/chearasmey.yt" aria-label="Facebook">
              <i className="bx bxl-facebook" aria-hidden="true" /> Facebook
            </a>
            <a href="https://t.me/chearasmey" aria-label="Telegram">
              <i className="bx bxl-telegram" aria-hidden="true" /> Telegram
            </a>
            <a href="https://x.com/chearasmey" aria-label="X">
              <i className="bx bxl-twitter" aria-hidden="true" /> X
            </a>
            <a href="https://instagram.com/dr.chearasmey" aria-label="Instagram">
              <i className="bx bxl-instagram" aria-hidden="true" /> Instagram
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
