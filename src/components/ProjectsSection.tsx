import { useState } from 'react'
import EvRangerScreenshot from '../assets/assets/images/EV-Ranger-screenshot.png'

export default function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false)

  const projects = [
    {
      title: 'EV Ranger',
      description:
        'Compare electric vehicles by range and find the best fit for your needs.  Built with NextUI, React, TailwindCSS, and TypeScript.',
      image: EvRangerScreenshot,
      link: 'https://www.evranger.io/'
    }
  ]

  return (
    <section className='text-primary px-8 pt-0 m-10'>
      <div className='max-w-2xl mx-auto'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full transition-colors text-primary font-bold py-4 px-6 rounded-lg flex justify-between items-center'
        >
          <span className='text-2xl tracking-tight'>Projects</span>
          <span className='text-3xl transform transition-transform duration-700'>
            {isOpen ? '▲' : '▼'}
          </span>
        </button>
        <div
          className={`text-center overflow-auto transition-all duration-700 ease-in-out ${
            isOpen ? 'opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className='space-y-8'>
            {projects.map((project, index) => (
              <li
                key={index}
                className='flex flex-col lg:flex-row items-center gap-6 bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-950 transition-all'
              >
                <div className='w-full lg:w-1/3'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='rounded-lg shadow-md object-cover w-full h-48'
                  />
                </div>
                <div className='w-full lg:w-2/3 text-left'>
                  <h3 className='text-2xl font-semibold mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-lg opacity-80 leading-relaxed mb-4'>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md text-white transition-all'
                  >
                    View Project
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
