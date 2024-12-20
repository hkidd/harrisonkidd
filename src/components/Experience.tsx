import { useState } from 'react'
import { FaLaptopCode, FaSearch, FaTools } from 'react-icons/fa'
import { FaHandshakeSimple } from 'react-icons/fa6'
import { IoRocketSharp } from 'react-icons/io5'

export default function ExperienceSection() {
  const [isOpen, setIsOpen] = useState(false)
  const experienceItems = [
    {
      title: 'Full Stack Development',
      description:
        '3+ years of experience in building robust web applications from front-end to back-end.',
      icon: <FaTools />
    },
    {
      title: 'Front-End Focused',
      description:
        'Exceptional skills in JavaScript/Typescript, React, and HTML/CSS to craft user-friendly, modern interfaces.',
      icon: <FaLaptopCode />
    },
    {
      title: 'Attention to Detail',
      description:
        'Keen eye for design and code quality, ensuring pixel-perfect UI components and smooth functionality.',
      icon: <FaSearch />
    },
    {
      title: 'Adaptability & Collaboration',
      description:
        'Proven ability to adapt to new technologies and collaborate effectively within dynamic development teams.',
      icon: <FaHandshakeSimple />
    },
    {
      title: 'Client Success',
      description:
        'Track record of enhancing web applications for major clients and contributing to impactful research.',
      icon: <IoRocketSharp />
    }
  ]

  return (
    <section className='text-primary px-8 pt-0 m-10'>
      <div className='max-w-2xl mx-auto'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='w-full transition-colors text-primary font-bold py-4 px-6 rounded-lg flex justify-between items-center'
        >
          <span className='text-2xl tracking-tight'> Experience</span>
          <span className='text-3xl transform transition-transform duration-700'>
            {isOpen ? '▲' : '▼'}
          </span>
        </button>
        <div
          className={`overflow-auto transition-all duration-700 ease-in-out ${
            isOpen ? 'opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className='space-y-8'>
            {experienceItems.map((item, index) => (
              <li
                key={index}
                className='flex flex-col md:flex-row items-start md:items-center gap-6 bg-gray-900 p-6 rounded-lg shadow-lg hover:bg-gray-950 transition-all'
              >
                <div className='flex-shrink-0 text-4xl'>{item.icon}</div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                  <p className='text-lg opacity-80 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
