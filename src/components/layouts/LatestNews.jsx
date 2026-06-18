import React from 'react'
import Container from './Container'
import latestone from '../../assets/latestone.webp';
import latesttwo from '../../assets/latesttwo.webp';
import latestthree from '../../assets/latestthree.webp';
import { FaTag } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiMessageAlt } from "react-icons/bi";
import { Link } from 'react-router';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Testimonial from '../../assets/Testimonial Card.webp';
import Testimonial2 from '../../assets/Testimonial caedtwo.webp';
import Testimonial3 from '../../assets/Testimonial.webp';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const LatestNews = () => {
  return (
    <>
    <Container>
        <div className='mt-15 mx-auto '>
            <h2 className='text-center font-pop text-[32px] text-[#1A1A1A] mb-8'>Latest News</h2>
            <div className='flex mx-auto gap-6 '>
               <div className='max-w-[442px] group'>
                <img src={latestone} alt="latestone" className='w-full h-79' />
                <div className='flex gap-3 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-19.5'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>

               <div className='max-w-[442px] group'>
                <img src={latesttwo} alt="latestone" />
                <div className='flex gap-3 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-19.5'>Eget lobortis lorem lacinia. Vivamus pharetra semper,</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>

               <div className='max-w-[442px] group'>
                <img src={latestthree} alt="latestone" />
                <div className='flex gap-3 mt-6 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-2 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-19.5'>Maecenas blandit risus elementum mauris malesuada.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
               </div>
              
            </div>
        </div>
    </Container>
    <div className='bg-[#F2F2F2] mt-15 '>
        <Container>
            <div className='relative bg-[#F2F2F2] '>
         <div className=' pt-15 font-pop font-semibold text-[32px] text-[#1A1A1A]  relative'>Client Testimonials</div>
         <div className='prev-arrowone'><FaArrowLeft /></div>
        <div className='next-arrowone'><FaArrowRight /></div>
        <div className='flex mt-9 '>
            <Swiper
            spaceBetween={0}
            slidesPerView={3}
            className='w-full'
            navigation={{
                prevEl: '.next-arrowone',
                nextEl: '.prev-arrowone',
            }}
            modules={[Navigation]}
            >
            <SwiperSlide> <img src={Testimonial} alt="BannerBig" className='w-full' /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial2} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial3} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial2} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial3} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={Testimonial} alt="BannerBig" /></SwiperSlide>
            
            </Swiper>
        </div>
       </div>
      
        </Container>
    </div>
    </>
  )
}

export default LatestNews