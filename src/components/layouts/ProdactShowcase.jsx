import React from 'react'
import Container from './Container'
import popular1 from '../../assets/popular1.webp'
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";


const ProdactShowcase = ({ title, dataPass }) => {
 function rating(count) {
  let halfStar = count.toString().split('.')[1];
  let index = Math.floor(count);

  let arr = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= index) {
      arr.push("color");
    } else {
      arr.push(i);
    }
  }

  if (halfStar) {
    arr[index] = "half";
  }

  return arr;
}
  
  return (
    <>
    <Container>
            <div className='flex justify-between mt-15 mb-8'>
              <h2 className='font-pop font-semibold text-[32px] text-[#1A1A1A]'>{title}</h2>
              <Link className='flex items-center font-pop text-[16px] font-medium text-[#00B207]' to="/cat">View All <IoIosArrowRoundForward  className='text-[30px]'/></Link>
            </div>

            <div className='flex flex-wrap gap-6 justify-between text-center '> 
             {dataPass.map(item =>(
              <div className='cursor-pointer group w-[14.66%] mx-auto border border-[#E6E6E6] rounded-[5px] hover:border-[#2C742F] hover:shadow-2xl transition-all duration-300'>
              <img src={popular1} alt="popular1" className='mx-auto'/>
              <h3 className="h-[50px] text-[#1A1A1A] font-pop font-medium text-[16px] mt-4 mb-4 group-hover:text-[#2C742F] transition-all duration-300">{item.name || item.title}</h3>
            
                <p>{item.price && item.price}</p>
              
                <p> {item.rating && Math.floor(item.rating)} </p>
               <div className='flex mb-3'>
                 {item.rating && rating(item.rating).map(item =>(
                 item == 'color'
                 ?
                < FaStar className='text-yellow-300'/>
                :
                item == 'half'
                ?
                <FaStarHalfAlt className='text-yellow-300'/>
                :
                < FaStar/>
                ))}
               </div>
               
              </div>
             ))}
            </div>
    </Container>
    </>
  )
}

export default ProdactShowcase