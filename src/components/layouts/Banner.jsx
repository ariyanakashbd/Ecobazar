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
        <div className='flex mt-6 mb-6 relative'>
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
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
                prevEl: '.prev-arrow',
                nextEl: '.next-arrow',
            }}
            modules={[Navigation,Pagination,Scrollbar,Autoplay]}
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
            pagination={{
              clickable:true,
            }}
            scrollbar={{
              hide: true,
            }}
            autoplay={true}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
                prevEl: '.prev-arrow',
                nextEl: '.next-arrow',
            }}
            modules={[Navigation,Pagination,Scrollbar,Autoplay]}
            >
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide> <img className='mb-6' src={BannerSmallTwo} alt="BannerSmall" /></SwiperSlide>
             <div className='prev-arrow'><FaArrowLeft /></div>
            <div className='next-arrow'><FaArrowRight /></div>
            </Swiper>
            
            <img src={BannerSmall} alt="BannerSmall" />
           </div>
        </div>
        
    </Container>
    
    </>
  )
}

export default Banner