import Container from '../components/layouts/Container';
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";

const Forgot = () => {
  return (
    <>
    <Container>
      <div className='w-full max-w-[520px] mx-auto my-10 sm:my-16 px-4 sm:px-6 sm:px-8 py-6 sm:py-8 border border-[#f7f3f3] shadow-md rounded-lg'>
         <h5 className='mt-2 sm:mt-4 text-center font-pop font-bold text-[24px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-5'>Forgot Password?</h5>
         <p className='font-pop text-xs sm:text-sm mt-2 sm:mt-3 text-center mb-4 sm:mb-5 text-[#666666]'>Don&rsquo;t worry! Enter your email address and we&rsquo;ll send you a link to reset your password.</p>
         <div className='relative'>
          <div className="relative mb-4 sm:mb-5">
            <input className='w-full h-11 sm:h-12.25 px-4 sm:px-10 py-3 sm:py-4 border border-[#E6E6E6] rounded-[6px] pl-10 sm:pl-11 text-sm sm:text-base outline-none' type="text" placeholder='Enter Your Email' />
            <MdOutlineMail className='absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-[#474343] text-lg sm:text-xl'/>
          </div>
          <button className='w-full bg-primry py-2.5 sm:py-3 text-white font-pop text-sm sm:text-[16px] font-semibold rounded-full hover:bg-green-700 transition-colors'><Link to={"/Reset"}>Reset Password</Link></button>
         </div>
      </div>
    </Container>
    </>
  )
}

export default Forgot