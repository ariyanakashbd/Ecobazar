import React from 'react'
import Container from './layouts/Container';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router';

const Subcribe = () => {
  return (
    <>
    <Container>
        <div className='flex justify-between mt-25 mb-10 items-center'>
           <div className='max-w-[448px]'>
            <h3 className='font-pop text-[#1A1A1A] font-semibold text-[32px] mb-1'>Subcribe our Newsletter</h3>
            <p className='font-pop font-normal text-[#999999] text-sm'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
           </div>
           <div className='relative flex items-center'>
              <input
                className='w-100 h-13 border-l border-t border-b border-[#E6E6E6] rounded-l-[46px] pl-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm outline-[#808080]'
                type="text"
                placeholder='Search'
              />
              <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#1A1A1A]' />
              <button className='absolute text-[#FFFFFF] bg-primry px-10 py-3.75 rounded-[46px] -right-25 cursor-pointer'>
                Subscribe
              </button>
            </div>
           <div className='flex gap-4 ml-4'>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
               <Link to={"https://web.facebook.com/ariyan.akash.01303"}><FaFacebookF /></Link>
             </div>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
                <Link><FaTwitter/></Link>
             </div>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
               <Link><FaPinterestP/></Link>
             </div>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
                <Link><FaInstagram/></Link>
             </div>
           </div>
        </div>
    </Container>
    </>
  )
}

export default Subcribe