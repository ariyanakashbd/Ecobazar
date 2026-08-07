import React, { useState } from 'react';
import Container from "../components/layouts/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import dd1  from '../assets/daitels/dd1.jpg';
import dd2 from '../assets/daitels/dd2.jpg';
import dd4 from '../assets/daitels/dd4.jpg';
import dd5 from '../assets/daitels/dd5.jpg';
import dd6 from '../assets/daitels/dd6.webp';
import dd8 from '../assets/daitels/dd8.png';
import dd9 from '../assets/daitels/dd9.jpg';



const images = [
 dd1,dd2,dd4,dd5,dd6,dd8,dd9,
];

const Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null); 

  return (
    <Container>
      <div className="flex gap-6 mt-10">
        <div className="w-[648px] flex gap-4 h-[450px]">
          <div className="w-[70px] flex flex-col justify-between items-center relative h-full">
            <button className=" thumb-prev mb-10 cursor-pointer text-gray-500  z-20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <div className="w-full h-[380px] overflow-hidden">
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                navigation={{
                  prevEl: '.thumb-prev',
                  nextEl: '.thumb-next',
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-full h-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => mainSwiper && mainSwiper.slideTo(index)}
                    className="cursor-pointer rounded-lg overflow-hidden border-2 border-transparent [&.swiper-slide-thumb-active]:border-green-600 transition-all select-none"
                  >
                   <div className=''>
                     <img
                      src={img}
                      alt={`Thumb ${index + 1}`}
                      className="w-full h-[300px] i object-cover"
                    />
                   </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button className="thumb-next cursor-pointer mt-10 text-gray-500 z-20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="flex-1 min-w-0 h-full">
            <Swiper
              onSwiper={setMainSwiper}
              spaceBetween={10}
              thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full h-full bg-gray-50 rounded-lg overflow-hidden"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="w-[648px]">review</div>
      </div>
    </Container>
  );
};

export default Details;