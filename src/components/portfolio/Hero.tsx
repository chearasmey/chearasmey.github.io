import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Avatar from './Avatar'

const resumeUrl = 'https://drive.google.com/file/d/1fuwJbAfvxPEyWl93a8lrNIVRewqM24Cq/view?usp=sharing'
const topics = ['Spring Boot APIs', 'Digital Banking', 'CI/CD Pipelines']

function Typewriter() {
  const reducedMotion = useReducedMotion()
  const [frame, setFrame] = useState({ topic: 0, length: topics[0].length, deleting: false })
  const word = topics[frame.topic]

  useEffect(() => {
    if (reducedMotion) return

    const filled = frame.length === word.length
    const empty = frame.length === 0
    const delay = frame.deleting ? (empty ? 220 : 32) : (filled ? 1700 : 66)

    const timer = window.setTimeout(() => {
      if (!frame.deleting && filled) {
        setFrame({ ...frame, deleting: true })
      } else if (frame.deleting && empty) {
        setFrame({ topic: (frame.topic + 1) % topics.length, length: 0, deleting: false })
      } else {
        setFrame({ ...frame, length: frame.length + (frame.deleting ? -1 : 1) })
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [frame, reducedMotion, word.length])

  return (
    <div className="portfolio-typewriter">
      <span className="portfolio-sr-only">{topics.join(', ')}</span>
      <span aria-hidden="true">
        {reducedMotion ? topics[0] : word.slice(0, frame.length)}
        <span className="portfolio-caret" />
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="portfolio-hero portfolio-wrap" aria-labelledby="portfolio-title">
      <div className="portfolio-hero-copy">
        <h1 id="portfolio-title">CHEA Rasmey</h1>
        <p className="portfolio-role">Application Development Manager</p>
        <Typewriter />
        <p className="portfolio-intro">Building web applications and exploring digital banking architecture.</p>
        <div className="portfolio-actions">
          <a className="portfolio-button portfolio-primary" href={resumeUrl} aria-label="Download Resume PDF">
            <i className="bx bx-file" aria-hidden="true" /> Resume
          </a>
          <a className="portfolio-button" href="#lab">
            <i className="bx bx-flask" aria-hidden="true" /> Explore Lab
          </a>
        </div>
        <nav className="portfolio-social" aria-label="portfolio-social">
            <a href="https://linkedin.com/in/chearasmey" aria-label="LinkedIn">
              <i className="bx bxl-linkedin" aria-hidden="true" />
            </a>
            <a href="https://facebook.com/chearasmey.yt" aria-label="Facebook">
              <i className="bx bxl-facebook" aria-hidden="true" />
            </a>
            <a href="https://t.me/chearasmey" aria-label="Telegram">
              <i className="bx bxl-telegram" aria-hidden="true" />
            </a>
            <a href="https://x.com/chearasmey" aria-label="X">
              <i className="bx bxl-twitter" aria-hidden="true" />
            </a>
            <a href="https://instagram.com/dr.chearasmey" aria-label="Instagram">
              <i className="bx bxl-instagram" aria-hidden="true" />
            </a>
          </nav>
      </div>
      <Avatar />
    </section>
  )
}
