import { useEffect, useRef, useState } from 'react'
import { PlayIcon, SettingIcon, VolumeIcon } from '../../assets/svgs'
import imgSrc from '../../assets/images/muteicon.png'
import srcImg from '../../assets/images/pauseicon.png'

const VideoInterface = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    const newMutedState = !video.muted
    video.muted = newMutedState
    setIsMuted(newMutedState)
  }

  useEffect(() => {
    const video = videoRef.current

    video.addEventListener('loadedmetadata', () => {
      const videoDuration = video.duration
      if (isFinite(videoDuration)) {
        setDuration(videoDuration)
      }
    })

    video.addEventListener('timeupdate', () => {
      setCurrentTime(video.currentTime)
    })

    return () => {
      video.removeEventListener('loadedmetadata', () => {})
      video.removeEventListener('timeupdate', () => {})
    }
  }, [])

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60)
    const secs = Math.floor(timeInSeconds % 60)
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className='w-full border border-[#CFCFCF] rounded-md overflow-hidden '>
      <div className=' overflow-hidden relative'>
        <video ref={videoRef} width='100%' height='300px'>
          <source src='/screen-recording.webm' type='video/webm' />
        </video>
        <div className='video absolute z-50 w-full left-0 top-0 h-full'></div>
      </div>
      <div className='h-[60px] border-t border-[#CFCFCF] flex items-center px-5'>
        <div>
          <span className='text-light-gray'>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        <div className='flex items-center ml-auto gap-5'>
          <button onClick={togglePlay} className='flex flex-col items-center'>
            {!isPlaying ? (
              <>
                <PlayIcon />
                <p className='text-xs'>Play</p>
              </>
            ) : (
              <>
                <img src={srcImg} alt='pause button image' />
                <p className='text-xs'>Pause</p>
              </>
            )}
          </button>
          <button onClick={toggleMute} className='flex flex-col items-center'>
            {isMuted ? <img src={imgSrc} alt='' /> : <VolumeIcon />}
            <p className='text-xs'>Volume</p>
          </button>
          <button className='flex flex-col items-center'>
            <SettingIcon />
            <p className='text-xs'>setting </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoInterface
