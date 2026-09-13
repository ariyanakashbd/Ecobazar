import { useState } from 'react'
import Container from '../components/layouts/Container'
import { Link } from 'react-router-dom'
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa6";

const Reset = () => {
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  return (
    <>
    <Container>
      <div className='w-full max-w-[520px] mx-auto my-10 sm:my-16 px-4 sm:px-6 sm:px-8 py-6 sm:py-8 border border-[#f7f3f3] shadow-md rounded-lg'>
        <h5 className='mt-2 sm:mt-4 text-center font-pop font-bold text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-5'>Reset Password</h5>
       <div className='relative'>
         <div className="relative mb-3">
           <input className='w-full h-11 sm:h-12.25 px-4 py-3 sm:py-4 border mb-3 sm:mb-0 border-[#E6E6E6] rounded-[6px] text-sm sm:text-base outline-none pr-11' type={showTwo ?"text" : "password"} placeholder='Password' />
           <div className='right-3 sm:right-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl absolute cursor-pointer text-[#666666]' onClick={()=> setShowTwo(!showTwo)}>
            {showTwo ? 
             <FaRegEyeSlash />
             :
             <FaRegEye />
            }
           </div>
         </div>
       </div>
        <div className='relative'>
           <div className="relative mb-3">
             <input className='w-full h-11 sm:h-12.25 px-4 py-3 sm:py-4 border mb-3 sm:mb-0 border-[#E6E6E6] rounded-[6px] placeholder pr-11 text-sm sm:text-base outline-none' placeholder='Confirm Password' type={show ? "text" : "password"}/>
              <div onClick={()=>setShow(!show)} className='right-3 sm:right-4 top-1/2 -translate-y-1/2 absolute cursor-pointer text-lg sm:text-xl text-[#666666]'>
              {show ?
              <FaRegEyeSlash /> 
              :
              <FaRegEye />
              }
            </div>
           </div>
        </div>
         <button className='w-full bg-primry py-2.5 sm:py-3 mb-4 sm:mb-5 mt-2 text-white font-pop text-sm sm:text-[16px] font-semibold rounded-full hover:bg-green-700 transition-colors'>Reset Password</button>
         <p className='text-center mb-4 sm:mb-5 text-sm sm:text-[16px] text-[#0a0a0a]'><Link to={"/login"}>Go Back Login?</Link></p>
      </div>
    </Container>
    </>
  )
}

export default Reset