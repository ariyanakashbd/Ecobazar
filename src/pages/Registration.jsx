import React from 'react'
import Container from '../components/layouts/Container'
import { Link } from 'react-router'

const Registration = () => {
  return (
    <>
    <Container>
      <div className='max-w-130 h-108 mx-auto mt-20 px-6 border border-[#f7f3f3] shadow
      shadow-md'>
         <h5 className='mt-6 text-center font-pop font-bold text-[32px] mb-5'>Create Account</h5>
         <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type="text" placeholder='Email' />
         <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type="password" placeholder='Passwrod' />
         <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type="password" placeholder='Confram Passwrod'/>
         <div className='flex items-center gap-[6px] mb-5'><input className='w-5 h-5' type="checkbox" /> <label className='text-[#666666] font-pop font-normal' htmlFor="">Accept all terms & Conditions</label></div>
         <div className='text-center w-118 bg-primry py-3.25 mb-5 text-white font-pop text-sm font-semibold rounded-full cursor-pointer'><button className='cursor-pointer'>Create Account</button></div>
        <div className='text-center mb-8'>
           <label className='font-pop text-sm text-[#666666] font-normal' htmlFor="">Already have account</label> <Link to={"/Login"} className='font-pop font-[500] text-[#1A1A1A]'> Login</Link>
        </div>
        
      </div>
    </Container>
    </>
  )
}

export default Registration