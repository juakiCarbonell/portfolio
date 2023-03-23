import CoverImage from '@/components/CoverImage'

export default function About (): JSX.Element {
  return (
    <main>
        <div className='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center'>
          <div className='md:w-6/12 flex-shrink-0 relative '>
            <CoverImage
              title='about me profile'
              image='https://res.cloudinary.com/dhbrsb9qd/image/upload/v1678449023/medium_about_profile_77b92da4d6.jpg'
            />
          </div>
          <div className='md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first'>
            <div className='g:py-8 text-center md:text-left'>
              <h2 className='mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight'>
                About me
              </h2>
              <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center'>
          <div className='md:w-6/12 flex-shrink-0 relative '>
            <CoverImage
              title='about me computer'
              image='https://res.cloudinary.com/dhbrsb9qd/image/upload/v1678449039/medium_about_computer_b610d1fe66.jpg'
            />
          </div>
          <div className='md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last'>
            <div className='g:py-8 text-center md:text-left'>
              <h2 className='mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight'>
                Experience
              </h2>
              <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center'>
          <div className='md:w-6/12 flex-shrink-0 relative '>
            <CoverImage
              title='about me profile'
              image='https://res.cloudinary.com/dhbrsb9qd/image/upload/v1678449040/small_about_desktop_72712fabd7.jpg'
            />
          </div>
          <div className='md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first'>
            <div className='g:py-8 text-center md:text-left'>
              <h2 className='mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight'>
                Kind of projects
              </h2>
              <p className='my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
    </main>
  )
}
