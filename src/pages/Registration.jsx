import { useState } from 'react';
import Container from '../components/layouts/Container';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Registration = () => {
  let navigate = useNavigate()
  let [regData, setRegData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });
  let [errorMsg, setErrorMsg] = useState("")
  let [successMsg, setSuccessMsg] = useState("")
  let [show, setShow] = useState();
  let [showTwo, setShowTwo] = useState();

  let handleChange = (e) => {
    let name = e.target.name 
    let value = e.target.value

    if (name !== 'terms') {
      setRegData({ ...regData, [name]: value });
    } else {
      setRegData({ ...regData, terms: !regData.terms })
    }
  }

  let handleClick = async () => {
    let user = await axios.post('http://localhost:5000/registration', regData)
    let { success, message } = user.data 
    console.log(success);
    if (!success) {
      setErrorMsg(message)
      setSuccessMsg("");
    } else {
      setSuccessMsg(message)
      setErrorMsg("");
      navigate("/login")
    }
  }

  return (
    <>
    <Container>
      <div className='w-full max-w-[520px] mx-auto my-10 sm:my-20 px-4 sm:px-8 py-6 sm:py-8 border border-[#f7f3f3] shadow-md rounded-lg'>
         <h5 className='mt-2 sm:mt-4 text-center font-pop font-bold text-[26px] sm:text-[32px] mb-5'>Create Account</h5>
         
         {/* Success & Error Messages */}
         {successMsg && <p className='bg-green-500 mb-3 text-center text-white py-1.5 px-3 rounded text-sm sm:text-base'>{successMsg}</p>}
         {errorMsg && <p className='bg-red-500 mb-3 text-center text-white py-1.5 px-3 rounded text-sm sm:text-base'>{errorMsg}</p>}
         
         {/* Email Input */}
         <input 
           onChange={handleChange} 
           name="email" 
           className='w-full h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px] outline-none text-sm sm:text-base' 
           type="email" 
           placeholder='Email' 
         />

         {/* Password Input */}
         <div className='relative w-full mb-3'>
           <input 
             onChange={handleChange} 
             name="password" 
             className='w-full h-12.25 p-4 border border-[#E6E6E6] rounded-[6px] outline-none pr-12 text-sm sm:text-base' 
             type={show ? "text" : "password"} 
             placeholder='Passwrod' 
           />
           <div 
             onClick={() => setShow(!show)} 
             className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer text-[18px] text-[#666666]'
           >
             {show ? <FaRegEyeSlash /> : <FaRegEye />}
           </div>
         </div>

         {/* Confirm Password Input */}
         <div className='relative w-full mb-3'>
           <input 
             onChange={handleChange} 
             name="confirmPassword" 
             className='w-full h-12.25 p-4 border border-[#E6E6E6] rounded-[6px] outline-none pr-12 text-sm sm:text-base' 
             type={showTwo ? "text" : "password"}  
             placeholder='Confram Passwrod'
           />
           <div 
             onClick={() => setShowTwo(!showTwo)} 
             className='absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer text-[18px] text-[#666666]'
           >
             {showTwo ? <FaRegEyeSlash /> : <FaRegEye />}
           </div>
         </div>

         {/* Terms Checkbox */}
         <div className='flex items-center gap-[6px] mb-5'>
           <input 
             onChange={handleChange} 
             name="terms" 
             id="chack" 
             className='w-4 h-4 sm:w-5 sm:h-5 cursor-pointer' 
             type="checkbox" 
           /> 
           <label className='text-[#666666] font-pop font-normal text-xs sm:text-sm cursor-pointer' htmlFor="chack">
             Accept all terms & Conditions
           </label>
         </div>

         {/* Submit Button */}
         <div className='text-center w-full bg-primry py-3.25 mb-5 text-white font-pop text-sm font-semibold rounded-full cursor-pointer'>
           <button onClick={handleClick} className='cursor-pointer w-full h-full'>Create Account</button>
         </div>

         {/* Login Link */}
         <div className='text-center mb-2 sm:mb-4'>
            <label className='font-pop text-xs sm:text-sm text-[#666666] font-normal'>Already have account</label> 
            <Link to={"/Login"} className='font-pop font-[500] text-xs sm:text-sm text-[#1A1A1A]'> Login</Link>
         </div>
         
      </div>
    </Container>
    </>
  )
}

export default Registration