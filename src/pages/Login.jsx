import { useState } from 'react'
import Container from '../components/layouts/Container'
import { Link } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  let [showOne, setShowOne] = useState(false);

  return (
    <>
    <Container>
      <div className='w-full max-w-[520px] mx-auto my-10 sm:my-20 px-4 sm:px-8 py-6 sm:py-8 border border-[#f7f3f3] shadow-md rounded-lg'>
         <h5 className='mt-2 sm:mt-4 text-center font-pop font-bold text-[26px] sm:text-[32px] mb-5'>Sign In</h5>
         
         {/* Email Input */}
         <input 
           className='w-full h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px] outline-none text-sm sm:text-base' 
           type="text" 
           placeholder='Email' 
         />
         
         {/* Password Input */}
         <div className='relative w-full mb-3'>
           <input 
             className='w-full h-12.25 p-4 border border-[#E6E6E6] rounded-[6px] outline-none pr-12 text-sm sm:text-base' 
             type={showOne ? "text" : "password"} 
             placeholder='Password' 
           />
           <div 
             onClick={() => setShowOne(!showOne)} 
             className='absolute top-1/2 -translate-y-1/2 right-4 text-[18px] cursor-pointer text-[#666666]'
           >
             {showOne ? <FaRegEyeSlash /> : <FaRegEye />}
           </div> 
         </div>

         {/* Remember Me & Forget Password */}
         <div className='flex flex-wrap items-center justify-between gap-2 mb-5'>
            <div className='flex items-center gap-[6px]'>
              <input id="chack" className='w-4 h-4 sm:w-5 sm:h-5 cursor-pointer' type="checkbox" /> 
              <label className='text-[#666666] font-pop font-normal text-xs sm:text-sm cursor-pointer' htmlFor="chack">
                Remember me
              </label>
            </div>
            <p>
              <label className='font-pop text-xs sm:text-sm text-[#666666] font-normal cursor-pointer'>
                <Link to={"/forgot"}>Forget Password?</Link>
              </label>
            </p>
         </div>

         {/* Submit Button */}
         <div className='text-center w-full bg-primry py-3.25 mb-5 text-white font-pop text-sm font-semibold rounded-full cursor-pointer'>
           <button type="button" className='cursor-pointer w-full h-full'>Login</button>
         </div>

         {/* Register Link */}
         <div className='text-center mb-2 sm:mb-4'>
            <label className='font-pop text-xs sm:text-sm text-[#666666] font-normal'>Don’t have account?</label> 
            <Link to={"/Registration"} className='font-pop font-[500] text-xs sm:text-sm text-[#1A1A1A]'> Register</Link>
         </div>
         
      </div>
    </Container>
    </>
  )
}

export default Login