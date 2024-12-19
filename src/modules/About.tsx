import { FaReact } from 'react-icons/fa'
import { GiSittingDog } from 'react-icons/gi'
import { MdElectricCar } from 'react-icons/md'
import { IoSchool } from 'react-icons/io5'
import MacMemoji from '../assets/images/macmemoji.png'
import ExperienceSection from '../components/Experience'
import ProjectsSection from '../components/ProjectsSection'
import ContactMeSection from '../components/ContactMeSection'

export default function About() {
  return (
    <div className='min-h-screen bg-secondary text-white font-sans'>
      {/* Header Section */}
      <header className='px-4 pt-10 pb-8 text-center'>
        <h1 className='text-5xl font-bold tracking-tight mb-4 text-gray-300'>
          Hi, I'm{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4ECCA3] to-[#FF9F45] drop-shadow-lg'>
            Harrison Kidd
          </span>
        </h1>
        <span className='flex justify-center my-4'>
          <img
            src={MacMemoji}
            alt='Feature Image'
            className='rounded-lg shadow-lg h-40 w-40'
          />
        </span>
        <ContactMeSection />
        <p className='text-lg mx-auto sm:p-4'>
          Dallas, TX based software developer specializing in modern web
          development
        </p>
      </header>

      {/* Icons / Categories */}
      <section className='flex justify-center gap-8 flex-wrap'>
        {[
          {
            title: 'Texas Ex',
            icon: <IoSchool />,
            specialClassName: 'hover:bg-[#cc5500] hover:text-primary'
          },
          {
            title: 'Front End',
            icon: <FaReact />,
            specialClassName: 'hover:bg-gray-950 hover:text-primary'
          },
          {
            title: 'Dog Dad',
            icon: <GiSittingDog />,
            specialClassName: 'hover:bg-[#F6D992] hover:text-gray-950'
          },
          {
            title: 'EV Nerd',
            icon: <MdElectricCar />,
            specialClassName: 'hover:bg-[#4ECCA3] hover:text-primary'
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.specialClassName} flex flex-col items-center bg-primary p-6 rounded-lg shadow-lg transition-all text-secondary text-center w-36`}
          >
            <span className='text-5xl mb-4'>{item.icon}</span>
            <h3 className='text-xl font-semibold'>{item.title}</h3>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />
      <footer className='text-center text-white/50 pb-4'>
        © 2024 Harrison Kidd. All rights reserved.
      </footer>
    </div>
  )
}
