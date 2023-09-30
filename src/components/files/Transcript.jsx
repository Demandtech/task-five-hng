import data from '../../transcript'

data
const Transcript = () => {
  return (
    <div className='font-sora mt-10 lg:mt-20'>
      <p className='font-semibold leading-tight lg:text-xl'> Transcript</p>
      <select
        className='border w-[150px] px-2 mt-3 mb-5 border-[#cfcfcf] rounded-md py-1 focus:border-dashed focus:outline-none text-[#CFCFCF]'
        name='language'
        id='language'
        defaultValue='english'
      >
        <option value='english'>English</option>
        <option value='french'>French</option>
        <option value='german'>Germany</option>
      </select>
      <div className='w-full h-[300px] overflow-scroll relative'>
        {data.map((dat, index) => {
          return (
            <div key={index} className='flex gap-3 mb-3'>
              <p className='font-work-sans text-xs lg:text-sm'>{dat.time}</p>
              <p className='font-inter text-sm lg:text-base '>{dat.text}</p>
            </div>
          )
        })}
        <div className='w-full h-20 sticky bottom-0 faded'></div>
      </div>
    </div>
  )
}

export default Transcript
