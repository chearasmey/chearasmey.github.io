const specialties = [
  ['Backend', 'bx-code-alt'],
  ['Frontend', 'bx-desktop'],
  ['Digital Banking', 'bxs-bank'],
  ['DevSecOps', 'bx-shield-quarter'],
] as const

export default function Avatar() {
  return (
    <div className="portfolio-avatar">
      <div className="portfolio-orbit" aria-hidden="true">
        <span className="portfolio-orbit-light" />
      </div>
      <img className="portfolio-portrait" src="/my_profile.jpg"
        alt="Portrait of CHEA Rasmey" width="960" height="960" />
      <ul className="portfolio-specialties" aria-label="Areas of focus">
        {specialties.map(([label, icon], index) => (
          <li className={`portfolio-chip portfolio-chip-${index + 1}`} key={label}>
            <i className={`bx ${icon}`} aria-hidden="true" /> {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
