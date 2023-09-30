import { Link } from 'react-router-dom'
import Logo from '../assets/svgs/Logo'
import Form from '../components/auth/Form'

const AuthPage = () => {
  return (
    <section className='py-12 max-w-[1440px] mx-auto'>
      <div className=' mx-auto max-w-[80%] lg:max-w-[80%]'>
        <Link
          to='/'
          className='flex items-center gap-1 justify-center lg:justify-start mb-5 lg:mb-10'
        >
          <>
            <Logo color={'black'} />
            <p className='font-bold'>HelpMeOut</p>
          </>
        </Link>
        <Form />
      </div>
    </section>
  )
}

export default AuthPage
