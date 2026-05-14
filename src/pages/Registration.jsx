import React, { useState } from 'react';
import Container from '../components/layouts/Container';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { FaRegEye,FaRegEyeSlash  } from "react-icons/fa6";

const Registration = () => {
  let navigate = useNavigate()
  let [regData,setRegData] = useState({
    email:"",
    password:"",
    confirmPassword:"",
    terms: false
  });
  let [errorMsg, setErrorMsg]= useState("")
  let [successMsg, setSuccessMsg]= useState("")
  let [show,setShow] = useState();
  let [showTwo,setShowTwo] = useState();
  let handleChange = (e) =>{
    let name = e.target.name 
    let value = e.target.value

    if (name !== 'terms'){
      setRegData({...regData, [name]:value});
    } else{
      setRegData({...regData,terms: !regData.terms})
    }
    
  }
  let handleClick = async () => {
  let user = await axios.post('http://localhost:5000/registration', regData)
  let {success,message} = user.data 
  console.log(success);
  if(!success){
     setErrorMsg(message)
     setSuccessMsg("");
  }else{
    setSuccessMsg(message)
    setErrorMsg("");
    navigate("/login")
  }
  
}
  return (
    <>
    <Container>
      <div className='max-w-130 h-108 mx-auto mt-20 px-6 border border-[#f7f3f3] shadow
      shadow-md'>
         <h5 className='mt-6 text-center font-pop font-bold text-[32px] mb-5'>Create Account</h5>
           {successMsg && <p className='bg-green-500 mb-2 text-center'>{successMsg}</p>}
           {errorMsg && <p className='bg-red-500 mb-2 text-center'>{errorMsg}</p>}
         <input onChange={handleChange} name="email" className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type="email" placeholder='Email' />

         <div className='relative'>
          <input onChange={handleChange} name="password" className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type={show ? "text" :"password"} placeholder='Passwrod' />
          <div onClick={()=>setShow(!show)} className='right-1 top-4 absolute cursor-pointer text-[18px]'>
            {show ?
            <FaRegEyeSlash /> 
            :
            <FaRegEye />
            }
          </div>
         </div>

         <div className='relative'>
          <input onChange={handleChange} name="confirmPassword" className='w-118 h-12.25 p-4 border mb-3 border-[#E6E6E6] rounded-[6px]' type={showTwo ? "text" : "password"}  placeholder='Confram Passwrod'/>
           <div onClick={()=>setShowTwo(!showTwo)} className='right-1 top-4 absolute cursor-pointer text-[18px]'>
            {showTwo ?
            <FaRegEyeSlash /> 
            :
            <FaRegEye />
            }
          </div>
         </div>

         <div className='flex items-center gap-[6px] mb-5'><input onChange={handleChange} name="terms" id="chack" className='w-5 h-5' type="checkbox" /> <label className='text-[#666666] font-pop font-normal' htmlFor="chack">Accept all terms & Conditions</label></div>

         <div className='text-center w-118 bg-primry py-3.25 mb-5 text-white font-pop text-sm font-semibold rounded-full cursor-pointer'><button onClick={handleClick} className='cursor-pointer w-full'>Create Account</button></div>
        <div className='text-center mb-8'>
           <label className='font-pop text-sm text-[#666666] font-normal' htmlFor="">Already have account</label> <Link to={"/Login"} className='font-pop font-[500] text-[#1A1A1A]'> Login</Link>
        </div>
        
      </div>
    </Container>
    </>
  )
}

export default Registration