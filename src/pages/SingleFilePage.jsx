import { AuthHeader, SingleFilePageHero } from '../components'

const SingleFilePage = () => {
  return (
    <section className='max-w-[1440px] mx-auto'>
      <div className='w-[90%] lg:w-[80%] mx-auto'>
        <AuthHeader />
        <div className='text-dark font-work-sans py-5'>
          <span className='opacity-70'>Home /</span>
          <span className='opacity-70'> Recent Video /</span>
          <span className='text-[#413C6D] font-semibold'>
            {' '}
            How To Create A Facebook Ad Listing{' '}
          </span>
        </div>
        <SingleFilePageHero
          video_name={'How To Create A Facebook Ad Listing'}
        />
      </div>
    </section>
  )
}

export default SingleFilePage
