import Logo from '../assets/svgs/Logo'

const Header = () => {
  return (
    <nav className='lg:block max-w-[1440px] mx-auto text-primary font-sora'>
      <div className='py-6 flex justify-between items-center lg:max-w-[80%] max-w-[90%] mx-auto'>
        <div className='flex items-center gap-3'>
          <Logo color={'black'} />
          <p className='font-bold'>HelpMeOut</p>
        </div>
        <ul className='hidden lg:flex gap-10 text-black'>
          <li>
            <a href='#features'>Features</a>
          </li>
          <li>
            <a href='#howitworks'>How it works </a>
          </li>
        </ul>
        <div>
          <button className='font-semibold text-sm'>Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Header
