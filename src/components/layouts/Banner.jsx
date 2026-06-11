import React from 'react'
import Container from './Container'
import BannerBig from '../../assets/Bannar Big.webp';
import BannerSmall from '../../assets/Bannar (1).webp';
import BannerSmallTwo from '../../assets/Bannar.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const Banner = () => {
  return (
    <>
    <Container>
       <section className='mt-20'>
         <div className='flex pt- mb-6 relative'>
           <div className='max-w-[872px]'>
            <Swiper
            pagination={{
              clickable:true,
            }}
            scrollbar={{
              hide: true,
            }}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                prevEl: '.prev-arrow',
                nextEl: '.next-arrow',
            }}
            modules={[Navigation,Pagination,Autoplay]}
            >
            <SwiperSlide> <img src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide> <img src={BannerBig} alt="BannerBig" /></SwiperSlide>
             <div className='prev-arrow'><FaArrowLeft /></div>
            <div className='next-arrow'><FaArrowRight /></div>
            </Swiper>
           </div>
           <div className='max-w-[423px] ml-6'>
            <Swiper
           direction="vertical"
            className="h-[300px]"
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            modules={[ Autoplay]}
            >
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            </Swiper>
            <div className='mt-2.5'>
              <div className=''>
            <Swiper
            pagination={{
              clickable:true,
            }}
            scrollbar={{
              hide: true,
            }}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
   
            modules={[Navigation,Scrollbar,Autoplay]}
            >
            <SwiperSlide><img src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            </Swiper>
           </div>
           </div>
           </div>
        </div>
       </section>
        
    </Container>
    
    </>
  )
}

export default Banner