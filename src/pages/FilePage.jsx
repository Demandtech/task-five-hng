import { Link, useParams } from 'react-router-dom'
import { VideoReady } from '../components'

const FilePage = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <section className='max-w-[1440px] mx-auto'>
      <div className=' w-[90%] lg:w-[80%] mx-auto py-10'>
        <VideoReady />
      </div>
      <div className='w-full bg-[#e7e7ed] bg-opacity-20 py-10  mb-10'>
        <div className='max-w-[90%] lg:max-w-[500px] mx-auto text-center flex flex-col items-center gap-8'>
          <h5 className='text-[#141414] font-bold font-sora lg:text-xl'>
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h5>
          <button className='bg-primary text-white py-1 px-3 rounded-md'>
            Save Video
          </button>
          <p className='font-bold text-[#7e7e7e]'>
            Don’t have an account?{' '}
            <Link className='text-primary underline'>Create account </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FilePage
