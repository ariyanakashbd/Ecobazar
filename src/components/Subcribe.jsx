import React from 'react'
import Container from './layouts/Container';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Subcribe = () => {
  return (
    <>
    <Container>
        <div className='flex justify-between mt-25 mb-10 '>
           <div className='max-w-[448px]'>
            <h3 className='font-pop text-[#1A1A1A] font-semibold mb-1'>Subcribe our Newsletter</h3>
            <p className='font-pop font-normal text-[#999999]'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
           </div>
           <div className='max-w-[536px] relative'>
            <input type="email" className='w-123 h-13 border pl-15 outline-[#4c4b4b] border-[#E6E6E6] rounded-3xl placeholder:pl-6 py-3.5' placeholder='Your email address'/>
            <button className=' absolute cursor-pointer top-0 -right-15 bg-primry px-10 py-3.75 font-pop font-semibold rounded-[43px] text-[#ffffff]'>Subscribe</button>
           </div>
           <div className='max-w-[184px] flex gap-2 text-[40px] text-[#4D4D4D]'>
              <FaFacebook className='hover:text-primry rounded-[50%]'/>
              <FaTwitter className='hover:text-primry rounded-[50%]' />
              <FaPinterestP className='hover:text-primry rounded-[50%]'/>
              <FaInstagram className='hover:text-primry rounded-[50%]'/>
           </div>
        </div>
    </Container>
    </>
  )
}

export default Subcribe