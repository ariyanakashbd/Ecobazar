import React from 'react'
import Container from './Container'
import popular1 from '../../assets/popular1.webp'
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";

const ProdactShowcase = ({ dataPass }) => {
  console.log(dataPass);
  
  return (
    <>
    <Container>
        
            <div className='flex justify-between mt-15 mb-8'>
              <h2 className='font-pop font-semibold text-[32px] text-[#1A1A1A]'>Popular Categories</h2>
              <Link className='flex items-center font-pop text-[16px] font-medium text-[#00B207]' to="/cat">View All <IoIosArrowRoundForward  className='text-[30px]'/></Link>
            </div>

            <div className='flex flex-wrap gap-6 justify-between text-center '> 
             {dataPass.map(item =>(
              <div className='cursor-pointer group w-[14.66%] mx-auto border border-[#E6E6E6] rounded-[5px] hover:border-[#2C742F] hover:shadow-2xl transition-all duration-300'>
              <img src={popular1} alt="popular1" className='mx-auto'/>
              <h3 className='text-[#1A1A1A] font-pop font-medium text-[16px] mt-4 mb-6 group-hover:text-[#2C742F] transition-all duration-300'>{item.name}</h3>
              </div>
            ))}
            </div>
    </Container>
    </>
  )
}

export default ProdactShowcase