import MacMemoji from '../assets/images/macmemoji.png'
import ContactMeSection from '../components/ContactMeSection'

export default function AboutMeSection() {
  return (
    <header className='px-4 pt-8 pb-4 text-center'>
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
  )
}
