import Container from './Container'
import latestone from '../../assets/latestOne.webp';
import latesttwo from '../../assets/latestTwo.webp';
import latestthree from '../../assets/latestThree.webp';
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
            <h2 className='text-center font-pop text-2xl sm:text-[32px] text-[#1A1A1A] mb-15'>Latest News</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               <div className='w-full max-w-[442px] group mx-auto relative'>
                <img src={latestone} alt="latestone" className='w-full h-79 object-cover rounded-xl' />
                <div className='flex flex-wrap gap-x-3 gap-y-2 mt-10 mb-3 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-3 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-0 sm:pr-19.5'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
                <div className='bg-[#FFFFFF] w-[58px] h-[58px] rounded-[5px] text-center absolute top-59.5 left-6'>
                    <h3 className='font-pop text-[20px] font-bold text-[#1A1A1A]'>5</h3>
                    <h4 className='font-pop font-medium text-sm text-[#808080]'>JUN</h4>
                </div>
               </div>
               <div className='w-full max-w-[442px] group mx-auto relative'>
                <img src={latesttwo} alt="latesttwo" className='w-full h-79 object-cover rounded-xl' />
                <div className='flex flex-wrap gap-x-3 gap-y-2 mt-10 mb-3 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-3 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-0 sm:pr-19.5'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>
                <div className='bg-[#FFFFFF] w-[58px] h-[58px] rounded-[5px] text-center absolute top-59.5 left-6'>
                    <h3 className='font-pop text-[20px] font-bold text-[#1A1A1A]'>21</h3>
                    <h4 className='font-pop font-medium text-sm text-[#808080]'>JUN</h4>
                </div>
               </div>
               <div className='w-full max-w-[442px] group mx-auto relative'>
                <img src={latestthree} alt="latestthree" className='w-full h-79 object-cover rounded-xl' />
                <div className='flex flex-wrap gap-x-3 gap-y-2 mt-10 mb-3 font-pop text-[#666666]'>
                    <p className='flex items-center gap-2 ml-2'><FaTag className='text-[20px]' />Food</p>
                    <p className='flex items-center gap-3 '> <span><FaRegUser className='text-[20px]' /></span> By Admin</p>
                    <p className='flex items-center gap-2 '> <span> <BiMessageAlt className='text-[20px]'/></span> 65 Comments</p>
                </div>
                <p className='group-hover:text-[#2C742F] ml-2 text-[18px] font-pop text-[#1A1A1A] pr-0 sm:pr-19.5'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                <Link className='flex items-center text-[16px] font-pop ml-2 mt-6 text-[#00B207]'>Read More <IoIosArrowRoundForward className='text-[24px]' /> </Link>

                <div className='bg-[#FFFFFF] w-[58px] h-[58px] rounded-[5px] text-center absolute top-59.5 left-6'>
                    <h3 className='font-pop text-[20px] font-bold text-[#1A1A1A]'>25</h3>
                    <h4 className='font-pop font-medium text-sm text-[#808080]'>SEP</h4>
                </div>
               </div>
            </div>
        </div>
    </Container>
    <div className='bg-[#F2F2F2] mt-15 '>
        <Container>
            <div className='relative bg-[#F2F2F2] '>
         <div className='pt-15 font-pop font-semibold text-2xl sm:text-[32px] text-[#1A1A1A] relative'>Client Testimonials</div>
         <div className='prev-arrowone'><FaArrowLeft /></div>
        <div className='next-arrowone'><FaArrowRight /></div>
        <div className='mt-9'>
            <Swiper
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
            className='w-full'
            navigation={{
                prevEl: '.next-arrowone',
                nextEl: '.prev-arrowone',
            }}
            modules={[Navigation]}
            >
            <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial2} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial3} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial2} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial3} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            <SwiperSlide><img src={Testimonial} alt="BannerBig" className='w-full h-auto' /></SwiperSlide>
            
            </Swiper>
        </div>
       </div>
      
        </Container>
    </div>
    </>
  )
}

export default LatestNews
