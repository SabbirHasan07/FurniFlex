import React from 'react'
import { LoginForm } from '../component/Login/LoginForm'
import ImageSection from '../component/Login/ImageSection'
import SignUpForm from '../component/Signup/SignUpForm'

const Signup = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className='w-full h-full flex flex-col items-center justify-center flex-1'>
      <div className='mx-auto max-w-[500px] w-full p-6 rounded-[8px] bg-[#F5F5F5]'>
      <SignUpForm />
      </div>
      </div>
      <ImageSection />
    </div>
  )
}

export default Signup