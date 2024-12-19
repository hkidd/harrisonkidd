export default function ContactMeSection() {
    return (
      <section className='py-12 bg-gray-900 text-center'>
        {/* Header */}
        <h3 className='text-3xl font-semibold mb-8'>
          Let's <span className='text-secondary'>connect</span>!
        </h3>

        {/* LinkedIn Card */}
        <div className='flex justify-center items-center gap-4'>
          <a
            href='https://www.linkedin.com/in/harrison-kidd'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105'
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
              alt='LinkedIn'
              className='w-8 h-8'
            />
            <div className='text-left'>
              <h4 className='text-md font-bold text-white'>LinkedIn</h4>
              <p className='text-gray-400'>@Harrison Kidd</p>
            </div>
          </a>

          {/* Contact Me Button */}
          {/* <a
            href='mailto:harrisonakidd@gmail.com?subject=Let%27s%20Connect&body=Hi%20there%2C%20I%20would%20like%20to%20connect%20with%20you.'
            className='inline-block px-8 py-3 bg-secondary hover:bg-white hover:text-gray-900 rounded-lg text-lg shadow transition-transform transform hover:scale-105'
          >
            Contact Me
          </a> */}
        </div>
      </section>
    )
}