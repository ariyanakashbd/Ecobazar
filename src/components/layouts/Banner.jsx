import Container from './Container'
import BannerBig from '../../assets/Bannar Big.webp';
import BannerSmall from '../../assets/Bannar (1).webp';
import BannerSmallTwo from '../../assets/discount-banner.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Scrollbar,Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



const Banner = () => {
  return (
    <>
    <Container>
       <section className='mt-8 sm:mt-12 lg:mt-20'>
         <div className='flex flex-col gap-6 mb-6 relative lg:flex-row'>
           <div className='w-full lg:max-w-[872px]'>
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
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerBig" /></SwiperSlide>
            <div className="prev-arrow !w-8 !h-8 md:!w-12 md:!h-12 bg-green-500 rounded-full flex items-center justify-center">
            <FaArrowLeft className="w-4 h-4" />
          </div>
            <div className="next-arrow !w-8 !h-8 md:!w-12 md:!h-12 bg-green-500 rounded-full flex items-center justify-center">
            <FaArrowRight className="w-4 h-4" />
          </div>
            </Swiper>
           </div>
           <div className='hidden lg:block w-full lg:max-w-[423px] lg:ml-6'>
            <Swiper
           direction="vertical"
            className="h-[220px] sm:h-[300px]"
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
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerBig} alt="BannerSmall" /></SwiperSlide>
            </Swiper>
            <div className='mt-4'>
              <div>
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
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-auto rounded-xl' src={BannerSmall} alt="BannerSmall" /></SwiperSlide>
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
