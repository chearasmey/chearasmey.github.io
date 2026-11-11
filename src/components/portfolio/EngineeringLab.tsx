import { useEffect, useRef, useState, type CSSProperties } from 'react'

const stages = [
  { name: 'GitLab', icon: 'bx-git-branch', detail: 'Source changes enter the pipeline when a commit is pushed.' },
  { name: 'Jenkins', icon: 'bx-cog', detail: 'Builds the application and runs automated tests.' },
  { name: 'SonarQube', icon: 'bx-radar', detail: 'Checks the code against the configured rules before the build can proceed.' },
  { name: 'Harbor', icon: 'bx-layer', detail: 'Stores the versioned container image for deployment.' },
  { name: 'Kubernetes', icon: 'bx-network-chart', detail: 'Pulls the image and rolls out the application to the cluster.' },
  { name: 'Observability', icon: 'bx-bar-chart-alt-2', detail: 'Helps the team understand application health after deployment.' },
] as const

export default function EngineeringLab() {
  const labRef = useRef<HTMLElement>(null)
  const [running, setRunning] = useState(() => !('IntersectionObserver' in window))
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const element = labRef.current
    if (!element || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting))
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={labRef} id="lab" className="portfolio-lab portfolio-wrap" aria-labelledby="portfolio-lab-title"
      data-running={running} style={{ '--stage-count': stages.length } as CSSProperties}>
      <div className="portfolio-lab-heading">
        <div>
          <h2 id="portfolio-lab-title">Engineering Lab</h2>
          <p>Explore a sample delivery pipeline.</p>
        </div>
        <span className="portfolio-simulation"><i className="bx bx-flask" aria-hidden="true" /> Practice simulation</span>
      </div>
      <div className="portfolio-flow">
        <div className="portfolio-track" aria-hidden="true"><span className="portfolio-pulse" /></div>
        <ol className="portfolio-stages">
          {stages.map(({ name, icon }, index) => (
            <li key={name} style={{ '--stage': index } as CSSProperties}>
              <button type="button" aria-pressed={selected === index} aria-controls="portfolio-stage-detail"
                onClick={() => setSelected(selected === index ? null : index)}>
                <span className="portfolio-stage-icon"><i className={`bx ${icon}`} aria-hidden="true" /></span>
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="portfolio-stage-detail" id="portfolio-stage-detail" aria-live="polite">
        {selected !== null && <><strong>{stages[selected].name}</strong> {stages[selected].detail}</>}
      </p>
    </section>
  )
}
