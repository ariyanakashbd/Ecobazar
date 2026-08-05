import {  } from 'react'
import Container from '../components/layouts/Container'
import { Link } from 'react-router'
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa6";

const Login = () => {
  let [showOne, setShowOne] = useState ();
  return (
    <>
    <Container>
      <div className='max-w-130 h-108 mx-auto mt-20 px-6 border border-[#f7f3f3] shadow
      shadow-md'>
         <h5 className='mt-6 text-center font-pop font-bold text-[32px] mb-5'>Sign In</h5>
         <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type="text" placeholder='Email' />
         <div className='relative'>
          <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type={showOne ? "text" : "password"} placeholder='Passwrod' />
         <div onClick={() => setShowOne(!showOne)} className='absolute top-4 right-1 text-[18px] cursor-pointer'>
          {showOne ?
          <FaRegEyeSlash />
          :
          <FaRegEye />}
          </div> 
         </div>
        <div className='flex justify-between'>
           <div className='flex items-center gap-[6px] mb-5'><input id="chack" className='w-5 h-5' type="checkbox" /> <label className='text-[#666666] font-pop font-normal' htmlFor="chack">Remember me</label></div>
           <p><label className='font-pop text-sm text-[#666666] font-normal' htmlFor=""><Link to={"/forgot"}>Forget Password?</Link></label></p>
        </div>
         <div className='text-center w-118 bg-primry py-3.25 mb-5 text-white font-pop text-sm font-semibold rounded-full cursor-pointer'><button className='cursor-pointer'>Login</button></div>
        <div className='text-center mb-8'>
           <label className='font-pop text-sm text-[#666666] font-normal' htmlFor="">Don’t have account?</label> <Link to={"/Registration"} className='font-pop font-[500] text-[#1A1A1A]'> Register</Link>
        </div>
        
      </div>
    </Container>
    </>
  )
}

export default Login