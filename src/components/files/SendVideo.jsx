import { EditIcon } from '../../assets/svgs'
import { useState } from 'react'



const SendVideo = () => {
  const [video_name, setVideoName] = useState('Untitled_Video_20232509 ')

  const [isReadOnly, setIsReadOnly] = useState(true)



  const handleSubmit = async (e) => {
    e.preventDefault()

    
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-10'>
        <label className='text-light-gray pl-2' htmlFor='name'>
          Name
        </label>
        <div className='w-full bg-red-600 flex items-center gap-4'>
          <input
            onChange={(e) => setVideoName(e.target.value)}
            type='text'
            value={video_name}
            readOnly={isReadOnly}
            className={`focus:outline-none text-[#413C6D]  text-[16px] w-[250px] h-10 pl-2 border ${
              isReadOnly
                ? ' border-white'
                : ' border-[#413C6D] rounded-md  text-[16px]'
            }`}
          />
          <div>
            <button type='button' onClick={() => setIsReadOnly(!isReadOnly)}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center bg-[#E7E7ED] p-3 rounded-[10px] w-full mb-10'>
        <div className='w-full'>
          <input
            style={{ background: 'transparent' }}
            type='text'
            placeholder='enter email of receiver'
            className=' placeholder:text-[#43434343] w-full outline-none'
          />
        </div>
        <div>
          <button
            className='bg-[#605C84] text-white py-1 px-3 rounded-md'
            type='submit'
          >
            Send
          </button>
        </div>
      </div>
    </form>
  )
}

export default SendVideo
