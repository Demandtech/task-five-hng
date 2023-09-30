const FormControl = () => {
  return (
    <form className='mt-5 lg:mt-10'>
      <div className='mb-5'>
        <label className='block mb-2 text-sm leading-tight' htmlFor='email'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='enter your email address'
          className='placeholder:text-[#626262] border border-[#626262] p-3 text-base rounded-md'
          style={{ width: '100%' }}
        />
      </div>
      <div className='w-full mb-5'>
        <label className='block mb-2 text-sm leading-tight' htmlFor='password'>
          Password
        </label>
        <input
          type='text'
          name='passord'
          id='password'
          placeholder='enter your password'
          className='placeholder:text-[#626262] border border-[#626262] p-3 rounded-md'
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <button className='bg-primary w-full text-white py-2 text-sm rounded-md'>
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default FormControl
