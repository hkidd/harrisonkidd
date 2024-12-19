import { FaLinkedin } from 'react-icons/fa'

export default function ContactMeSection() {
  return (
    <section className='py-2 text-center'>
      <div className='flex justify-center items-center'>
        <a
          href='https://www.linkedin.com/in/harrison-kidd'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-4 px-4 py-2 hover:bg-white/10 rounded-lg transition-transform transform hover:scale-105'
        >
          <FaLinkedin className='text-3xl text-white' />
          <div className='text-left'>
            <h4 className='text-sm font-bold text-white'>LinkedIn</h4>
            <p className='text-gray-400'>@Harrison Kidd</p>
          </div>
        </a>
      </div>
    </section>
  )
}
