import { useState } from 'react'
import { EditIcon } from '../../assets/svgs'
import PropTypes from 'prop-types'
const SingleFileHero = ({ video_name }) => {
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [name, setName] = useState(video_name)
  return (
    <div>
      <div className='w-full bg-red-600 flex items-center gap-4 mb-5'>
        <input
          style={{ minWidth: '350px' }}
          onChange={(e) => setName(e.target.value)}
          type='text'
          value={name}
          readOnly={isReadOnly}
          className={`focus:outline-none text-dark font-semibold  text-[16px] lg:text-lg h-8 pl-2 border ${
            isReadOnly
              ? ' border-white'
              : ' border-[#413C6D] rounded-md  text-[16px]'
          }`}
        />
        <div>
          <button type='button' onClick={() => setIsReadOnly(!isReadOnly)}>
            <EditIcon width={'20px'} height={'20px'} />
          </button>
        </div>
      </div>
      <div className='overflow-hidden  lg:max-h-[400px] border border-light-border rounded-[17px] '>
        <div className='border relative border-light-border  rounded-[13px] overflow-hidden box-border'>
          <video
            width='100%'
            height='auto'
            className='overflow-hidden  box-border h-full'
          >
            <source src='/screen-recording.webm' type='video/webm' />
          </video>
          <div className='video absolute z-50 w-full left-0 top-0 h-full'></div>
        </div>
      </div>
    </div>
  )
}
SingleFileHero.propTypes = {
  video_name: PropTypes.string,
}
export default SingleFileHero
