import { useState } from 'react'
import CopyVideo from './CopyVideo'
import SendVideo from './SendVideo'
import SocialMediaShare from './SocialMediaShare'
import VideoInterface from './VideoInterface'
import Transcript from './Transcript'

const VideoReady = () => {
  const [videoUrl, setVideoUrl] = useState(
    'https://www.helpmeoutntitled_Video_20232509'
  )

  return (
    <div className='font-sora flex flex-col lg:flex-row '>
      <div className='flex-1 lg:pr-10 lg:border-r border-[#CFCFCF]'>
        <h3 className='font-bold text-2xl lg:text-4xl mb-10 '>
          Your video is ready!
        </h3>
        <SendVideo />
        <CopyVideo videoUrl={videoUrl} />
        <SocialMediaShare />
      </div>
      <div className='flex-1 lg:pl-10'>
        <VideoInterface />
        <Transcript />
      </div>
    </div>
  )
}

export default VideoReady
