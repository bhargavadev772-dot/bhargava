import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { CodingJourney } from '@/components/portfolio/coding-journey'
import { Education } from '@/components/portfolio/education'
import { Certifications } from '@/components/portfolio/certifications'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingJourney />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
