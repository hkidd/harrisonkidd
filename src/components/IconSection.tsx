import { FaReact } from 'react-icons/fa'
import { GiSittingDog } from 'react-icons/gi'
import { MdElectricCar } from 'react-icons/md'
import { IoSchool } from 'react-icons/io5'

export default function IconSection() {
  return (
    <section className='flex justify-center gap-8 flex-wrap'>
      {[
        {
          title: 'Dog Dad',
          icon: <GiSittingDog />,
          specialClassName: 'hover:bg-[#F6D992] hover:text-gray-950'
        },
        {
          title: 'EV Nerd',
          icon: <MdElectricCar />,
          specialClassName: 'hover:bg-[#4ECCA3] hover:text-primary'
        },
        {
          title: 'Front End',
          icon: <FaReact />,
          specialClassName: 'hover:bg-gray-950 hover:text-primary'
        },
        {
          title: 'Texas Ex',
          icon: <IoSchool />,
          specialClassName: 'hover:bg-[#cc5500] hover:text-primary'
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
  )
}
