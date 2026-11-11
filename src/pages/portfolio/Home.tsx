import Hero from '../../components/portfolio/Hero'
import EngineeringLab from '../../components/portfolio/EngineeringLab'
import Skills from '../../components/portfolio/Skills'
import Experience from '../../components/portfolio/Experience'
import Education from '../../components/portfolio/Education'
import Course from '../../components/portfolio/Course'
import Contact from '../../components/portfolio/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="experience" className="portfolio-wrap portfolio-detail" aria-labelledby="experience-title">
        <Experience />
      </section>
      <section id="education" className="portfolio-wrap portfolio-detail" aria-labelledby="education-title">
        <Education />
      </section>
      <Skills />
      <EngineeringLab />
      <section id="courses" className="portfolio-wrap portfolio-detail" aria-labelledby="courses-title">
        <Course />
      </section>
      <section id="contact" className="portfolio-wrap portfolio-detail" aria-labelledby="contact-title">
        <Contact />
      </section>
    </>
  )
}
