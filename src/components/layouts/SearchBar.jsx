import React from 'react';
import Container from './Container';
import Logo from "../../assets/Logo1.webp";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Heart from '../../icon/Heart';
import { Link } from 'react-router';

const SearchBar = () => {
  return (
    <>
    <div className='font-pop text-sm text-[#666666] '>
      <Container>
      <div className='flex justify-between items-center my-5.5'>
        <Link to="/" className='cursor-pointer'>
          <img src={Logo} fetchPriority="high" alt="logo" />
        </Link>
       {/* ay khane flex nah dewar karone jodi button mt dewa hoi tahole input mt pai */}
        <div className='relative flex items-center'>
          <input
            className='w-100 h-11.25 border-l border-t border-b border-[#E6E6E6] rounded-l-md pl-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm outline-[#808080]'
            type="text"
            placeholder='Search'
          />
          <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#1A1A1A]' />
          <button className='h-11.25  text-[#FFFFFF] bg-primry px-6 rounded-r-md cursor-pointer'>
            Search
          </button>
        </div>
        <div className='flex gap-x-8 items-center'>
        <div className=' relative after:w-[2px] after:h-6 after:bg-[#CCCCCC] after:content-[""] after:absolute after:top-1 after:-right-4'>
          <Heart/></div>
         <div className='flex items-center gap-3'>
          <div>
            <HiOutlineShoppingBag className='text-hsize relative top-[-2px]'/>
          </div>
           <div>
            <span className='font-pop text-[#4D4D4D] text-sm font-normal '>Shopping cart:</span><br/>
            <span className='text-[#1A1A1A] font-pop font-bold'>$57.00</span>
          </div>
         </div>
        </div>
      </div>
    </Container>
    </div>
    </>
   
  )
}

export default SearchBar;