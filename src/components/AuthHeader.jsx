import { ProfileIcon, ArrowDownIcon } from '../assets/svgs'
import Logo from '../assets/svgs/Logo'
const AuthHeader = () => {
  return (
    <header>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1 py-5'>
          <Logo color={'black'} />
          <p className='font-bold'>HelpMeOut</p>
        </div>
        <div className='flex items-center gap-1'>
          <ProfileIcon />
          <span className='font-work-sans'>John Mark</span>
          <ArrowDownIcon />
        </div>
      </div>
    </header>
  )
}

export default AuthHeader
