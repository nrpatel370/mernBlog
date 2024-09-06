import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to="/" className='text-sm font-bold dark:text-white text-4xl' >
            <span className='px-2 py-1 bg-gradient-to-r 
              from-blue-500 via-cyan-500 to-lime-500 rounded-lg text-white '>
                Nirav's</span> Blog
          </Link>
          <p className='text-sm mt-5'>
            Welcome to my MERN fullstack website!
          </p>
        </div>

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value="Your username"/>
              <TextInput 
                type='text'
                placeholder='Username'
                id='username'/>
            </div>

            <div>
              <Label value="Your email"/>
              <TextInput 
                type='email'
                placeholder='Your email'
                id='email'/>
            </div>

            <div>
              <Label value="Your password"/>
              <TextInput 
                type='password'
                placeholder='Password'
                id='password'/>
            </div>

            <Button gradientDuoTone='tealToLime' type='submit' className='text-gray bold'>Sign Up</Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to="/sign-in" className='text-blue-500'>Sign In</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp
