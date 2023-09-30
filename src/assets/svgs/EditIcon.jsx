import PropTypes from 'prop-types'
const EditIcon = ({ size = 32, width = '33px', height = '32px' }) => {
  return (
    <svg
      width={width || `${size}px`}
      height={height || `${size}px`}
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='vuesax/linear/edit'>
        <g id='edit'>
          <path
            id='Vector'
            d='M15.167 2.66675H12.5003C5.83366 2.66675 3.16699 5.33341 3.16699 12.0001V20.0001C3.16699 26.6667 5.83366 29.3334 12.5003 29.3334H20.5003C27.167 29.3334 29.8337 26.6667 29.8337 20.0001V17.3334'
            stroke='#120B48'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_2'
            d='M21.8865 4.02676L11.3798 14.5334C10.9798 14.9334 10.5798 15.7201 10.4998 16.2934L9.92651 20.3068C9.71317 21.7601 10.7398 22.7734 12.1932 22.5734L16.2065 22.0001C16.7665 21.9201 17.5532 21.5201 17.9665 21.1201L28.4732 10.6134C30.2865 8.80009 31.1398 6.69343 28.4732 4.02676C25.8065 1.36009 23.6998 2.21343 21.8865 4.02676Z'
            stroke='#120B48'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            id='Vector_3'
            d='M20.3799 5.53345C21.2732 8.72011 23.7666 11.2134 26.9666 12.1201'
            stroke='#120B48'
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  )
}

EditIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.number,
}

export default EditIcon
