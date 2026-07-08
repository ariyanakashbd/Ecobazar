import React from 'react'
import Container from './Container'
import popular1 from '../../assets/popular1.webp'
import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

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
    <Container>
      
        <div className='lg:flex justify-between mt-15 mb-8 font-pop font-normal text-sm'>
          <h2 className='font-pop font-semibold text-[24px] lg:text-[32px] text-[#1A1A1A]'>
            {title}
          </h2>
          <Link
           className='flex items-center font-pop text-[14px] mt-5 lg:mt-0 lg:text-[16px] font-medium text-[#00B207]'
            to="/cat"> View All<IoIosArrowRoundForward className='text-[25px] lg:text-[30px]' /></Link>
        </div>
        
        <div className={`items-center w-full text-center flex flex-wrap justify-center gap-y-4 ${title == "Popular Categories" && "lg:gap-5 text-center "}`}>
          {dataPass?.map(item => (
          
            <div className={`cursor-pointer relative group w-full md:w-[48%] ${title == 'Popular Categories' ? 'lg:w-[14.66%]' : 'lg:w-[20%]'} ${title == 'Featured Products' ? 'lg:w-[20%]' : ''} border border-[#E6E6E6] rounded-[5px] hover:border-[#2C742F] hover:shadow-2xl transition-all duration-300`}>
            <img src={item.thumbnail || popular1} alt="popular1" className='mx-auto' />
              <h3 className={`text-[#1A1A1A] pl-3 font-pop font-medium text-[16px] group-hover:text-[#2C742F] transition-all duration-300 ${title == "Popular Categories" && "my-4"}`}>
               {item.name
                  ?
                  item.name
                  :
                  `${item.title?.slice(0, 16)}...`}
              </h3>
              {item.price && (
               <p className='mb-2 pl-3'>${item.price}</p>
              )}
              <div>
              {item.rating && (
                <div className='flex pl-3 mb-3 relative'>
                  {rating(item.rating).map((star, starIndex) =>
                    star === "color" ? (
                      <FaStar className='text-yellow-300' />
                    ) : star == "half" ? (
                      <FaStarHalfAlt className='text-yellow-300' />
                    ) : (
                      <FaStar className='text-gray-300' />
                    )
                  )}
                  <div className='absolute right-[26px] -top-7 text-[20px] group-hover:bg-[#00B207] group-hover:p-[4px] group-hover:rounded-2xl transition-all duration-300 group-hover:text-white'>
                    <HiOutlineShoppingBag />
                  </div>
                    {title !== "Hot Deals" && (
                    <div className='hidden group-hover:block absolute bottom-60 right-6.5'>
                      <div className="flex flex-col gap-y-4 text-[20px]">
                        <CiHeart size={24} />
                        <FaEye size={24} />
                      </div>
                    </div>
                  )}
                </div>
              )} 
              </div>
            </div>
          ))}
          
        </div>
    </Container>
  )}
export default ProdactShowcase