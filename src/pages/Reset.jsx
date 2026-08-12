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
      <div className='max-w-130  mx-auto mt-20 px-6 border border-[#f7f3f3] shadow
      shadow-md'>
        <h5 className='mt-6 text-center font-pop font-bold text-[32px] mb-5'>Reset Password</h5>
       <div className='relative'>
         <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type={showTwo ?"text" : "password"} placeholder='Passwrod' />
         <div className='right-1 top-4 right-1 top-4 text-[18px] absolute cursor-pointer text-[18px]' onClick={()=> setShowTwo(!showTwo)}>
          {showTwo ? 
           <FaRegEyeSlash />
           :
           <FaRegEye />
          }
         </div>
       </div>
        <div className='relative'>
           <input className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' placeholder='Confram Passwrod' type={show ? "text" : "password"}/>
            <div onClick={()=>setShow(!show)} className='right-1 top-4 absolute cursor-pointer text-[18px]'>
            {show ?
            <FaRegEyeSlash /> 
            :
            <FaRegEye />
            }
          </div>
           
        </div>
         <button className='w-full bg-primry py-3 mb-5 mt-2 text-white font-pop text-[16px] font-semibold rounded-full'>Reset Password</button>
         <p className='text-center mb-5 text-[16px] text-[#0a0a0a]'><Link to={"/login"}>Go Back Login?</Link></p>
      </div>
    </Container>
    </>
  )
}

export default Reset