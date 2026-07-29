import React from 'react'
import Container from '../components/layouts/Container'
import Accodion from '../components/Accodion';
import { FaAngleDown } from "react-icons/fa6";

const Shop = () => {
  return (
   <>
   <Container>
    <div>
      <div className='flex justify-between mt-11 font-pop items-center'>
          <div className='font-pop text-[14px] font-semibold text-[#ffff] bg-primry py-3.5 px-8 rounded-[43px]'>Filter</div>
          <div className='flex items-center  text-sm  gap-x-5'><span className='text-[#808080]'>Sort by:</span><span className=' text-[#4D4D4D] mr-10 font-pop border border-2 border-[#E6E6E6] flex items-center gap-x-20 pl-4 py-2.5 pr-7.5 rounded-[5px] text-sm '>Latest <span><FaAngleDown /></span></span></div>
          <div className='font-pop text-[16px] text-[#666666] font-normal'><span className='font-pop font-semibold text-[16px] text-[#1A1A1A]'>52</span> Results Found</div>
        </div>
      <Accodion/>
    </div>
   </Container>
   </>
  )
}

export default Shop