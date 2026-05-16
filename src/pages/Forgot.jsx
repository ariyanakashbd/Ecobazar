import React, { useState } from 'react';
import Container from '../components/layouts/Container';
import { Link } from 'react-router';
import { MdOutlineMail } from "react-icons/md";

const Forgot = () => {
  return (
    <>
    <Container>
      <div className='max-w-130  mx-auto mt-20 px-6 border border-[#f7f3f3] shadow
      shadow-md'>
         <h5 className='mt-6 text-center font-pop font-bold text-[32px] mb-5'>Forgot Password?</h5>
         <p className='font-pop text-sm mt-3 text-center mb-5'>Don’t worry! Enter your email address and we’ll send you a link to reset your password.</p>
         <div className='relative'>
          <input className='w-118 h-12.25 px-10  py-4 border mb-5 border-[#E6E6E6] rounded-[6px]' type="text" placeholder='Enter Your Email' />
          <MdOutlineMail className='absolute top-6.5 left-3 text-[#474343] -translate-y-1/2 text-[20px]'/>
          <button className='w-full bg-primry py-3 text-white font-pop text-[16px] font-semibold rounded-full'><Link to={"/Reset"}>Reset Password</Link></button>
         </div>
      </div>
    </Container>
    </>
  )
}

export default Forgot