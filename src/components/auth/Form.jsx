import FormControl from './FormControl'
import Social from './Social'

const Form = () => {
  return (
    <div className='max-w-[400px] mx-auto'>
      <div className='text-center mb-5 lg:mb-10 lg:max-w-[80%] mx-auto'>
        <h3 className='text-2xl font-semibold font-inter mb-2'>
          Log in or Sign up
        </h3>
        <p className='text-[#434343] text-sm'>
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>
      </div>
      <Social />
      <FormControl />
    </div>
  )
}

export default Form
