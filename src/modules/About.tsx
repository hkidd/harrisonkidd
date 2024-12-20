import ExperienceSection from '../components/Experience'
import ProjectsSection from '../components/ProjectsSection'
import IconSection from '../components/IconSection'
import AboutMeSection from '../components/AboutMeSection'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className='min-h-screen bg-secondary text-white font-sans'>
      <AboutMeSection />
      <IconSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}
