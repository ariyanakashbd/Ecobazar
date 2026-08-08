import React, { useState } from 'react';
import Container from "../components/layouts/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { InnerImageZoom } from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import dd1 from '../assets/daitels/dd1.jpg';
import dd2 from '../assets/daitels/dd2.jpg';
import dd4 from '../assets/daitels/dd4.jpg';
import dd5 from '../assets/daitels/dd5.jpg';
import dd6 from '../assets/daitels/dd6.webp';
import dd8 from '../assets/daitels/dd8.png';
import dd9 from '../assets/daitels/dd9.jpg';
import sing from '../assets/daitels/sing.webp';
import { FaStar, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaHeart, FaMinus, FaPlus } from 'react-icons/fa';

const images = [
  dd1, dd2, dd4, dd5, dd6, dd8, dd9,
];

const Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Container>
      <div className="flex gap-6 mt-10">
        <div className="w-[648px] flex gap-4 h-[450px]">
          <div className="w-[70px] flex flex-col justify-between items-center relative h-full">
            <button className="thumb-prev mb-10 cursor-pointer text-gray-500 z-20">
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
                    <div>
                      <img
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        className="w-full h-[300px] object-cover"
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
              className="w-full h-full bg-gray-50 rounded-lg overflow-hidden">
              {images.map((img, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <InnerImageZoom
                    src={img}
                    zoomSrc={img}
                    zoomType="hover"
                    zoomScale={1.5}
                    hideHint={true}
                    className="w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="w-[648px]">
          {/* Title + Rating + SKU */}
          <div>
            <h3 className='flex gap-x-4 items-center font-pop font-semibold text-[36px] text-[#1A1A1A]'>
              Chinese Cabbage
              <span className='font-pop text-sm font-normal text-[#2C742F] bg-[#aedbb07a] py-1 px-2 rounded-[5px]'>
                In Stock
              </span>
            </h3>
            <div className='flex items-center relative mt-2'>
              <p className='flex items-center text-[#FF8A00]'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span className='text-[#666666] font-pop font-normal text-[14px] ml-1'>4 Review</span>
              </p>
              <span className='bg-[#B3B3B3] w-1.5 h-1.5 rounded-full mx-3'></span>
              <p className='font-medium text-sm text-[#333333]'>
                SKU: <span className='font-normal text-sm text-[#666666]'>2,51,594</span>
              </p>
            </div>
          </div>

          {/* Price */}
          <div className='flex items-center gap-x-5.5 mt-4'>
            <span className='font-pop font-normal text-lg text-[#999999] line-through'>$49.00</span>
            <span className='font-pop font-semibold text-[28px] text-[#2C742F]'>$17.28</span>
            <span className='font-pop font-medium text-xs text-red-500 bg-[#d4c7c76c] py-1 px-2 rounded-[5px]'>65% Off</span>
          </div>

          {/* Brand + Share */}
          <div className='flex items-center justify-between mt-4 pb-4 border-b border-[#EAEAEA]'>
            <p className='flex items-center gap-x-4 font-pop text-sm text-[#333333]'>
              <span>Brand:</span> <img src={sing} alt="sing" />
            </p>
            <div className='flex items-center gap-x-2 text-[#4D4D4D] '>
              <span className='font-pop text-sm text-[#333333] mr-1'>Share Item:</span>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full  hover:bg-primry text-[#4D4D4D]'>
                <FaFacebookF />
              </a>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full  hover:bg-primry text-[#4D4D4D]'>
                <FaTwitter />
              </a>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full  hover:bg-primry text-[#4D4D4D]'>
                <FaPinterestP />
              </a>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full  hover:bg-primry text-[#4D4D4D]'>
                <FaInstagram />
              </a>
            </div>
          </div>

          <p className='font-pop text-sm text-[#666666] leading-6 mt-4 pr-30'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>

          {/* Quantity + Add to Cart + Wishlist */}
          <div className='flex items-center gap-x-4 mt-6'>
            <div className='flex items-center border border-[#E5E5E5] rounded-[5px]'>
              <button onClick={handleMinus} className='w-10 h-11 cursor-pointer flex items-center justify-center text-[#333333] hover:bg-gray-50'>
                <FaMinus size={12} />
              </button>
              <span className='w-10 text-center font-pop text-[16px] text-[#1A1A1A]'>{count}</span>
              <button onClick={handlePlus} className='w-10 h-11  cursor-pointer flex items-center justify-center text-[#333333] hover:bg-gray-50'>
                <FaPlus size={12} />
              </button>
            </div>

            <button className='flex-1 h-11 flex items-center justify-center gap-x-2 bg-primry hover:bg-[#245F26] text-white font-pop font-medium text-sm rounded-[43px] transition-colors'>
              Add to Cart
            </button>

            <button className='w-11 h-11   flex items-center justify-center  rounded-full text-[#333333] hover:text-[#ffff]  transition-colors hover:bg-primry'>
              <FaHeart />
            </button>
          </div>

          {/* Category + Tags */}
          <div className='mt-6 space-y-2'>
            <p className='font-pop text-sm text-[#333333]'>
              Category: <span className='text-[#666666] font-normal'>Vegetables</span>
            </p>
            <p className='font-pop text-sm text-[#333333]'>
              Tags:{' '}
              <span className='text-[#666666] font-normal'>
                Vegetables, Healthy,{' '}
                <span className='underline text-[#2C742F]'>Chinese Cabbage</span>, Green Cabbage
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* description start */}
      <div className='mt-2 '>
        <div className='flex gap-x-8 justify-center font-pop font-medium text-[16px] text-[#808080]'>
          <h3
            onClick={() => setActiveTab('desc')}
            className={`cursor-pointer hover:text-[#000000] hover:border-b border-primry transition-all duration-300 ${activeTab === 'desc' ? 'text-[#000000] border-b border-primry' : ''}`}
          >
            Descriptions
          </h3>
          <h3
            onClick={() => setActiveTab('info')}
            className={`cursor-pointer hover:text-[#000000] hover:border-b border-primry transition-all duration-300 ${activeTab === 'info' ? 'text-[#000000] border-b border-primry' : ''}`}
          >
            Additional Information
          </h3>
          <h3
            onClick={() => setActiveTab('feedback')}
            className={`cursor-pointer hover:text-[#000000] hover:border-b border-primry transition-all duration-300 ${activeTab === 'feedback' ? 'text-[#000000] border-b border-primry' : ''}`}
          >
            Customer Feedback
          </h3>
        </div>

        <div className='flex mt-6 gap-x-[143px]'>
          <div className='w-[50%]'>
            {activeTab === 'desc' && (
              <p className='font-pop text-sm text-[#666666] leading-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, totam. Nulla voluptate ipsum magnam laudantium facilis reprehenderit porro doloremque ipsa iure tenetur. Eos unde minus assumenda hic nisi. Sint, corrupti! Voluptas sit incidunt harum nesciunt fugit! Alias, amet asperiores adipisci ex architecto dolores obcaecati quae, rerum sit temporibus nostrum officiis!
              </p>
            )}
            {activeTab === 'info' && (
              <p className='font-pop text-sm text-[#666666] leading-6'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis est assumenda. Autem ea adipisci debitis facere saepe aperiam nisi impedit cumque ipsam architecto nobis voluptatibus, maiores nemo quod atque eum, obcaecati esse, perferendis praesentium beatae accusamus labore ab ratione. Temporibus nihil asperiores eaque veniam eius voluptatibus eligendi laudantium? Sunt in possimus totam? Nemo odio velit, amet corporis, consequuntur delectus voluptatibus laudantium deserunt voluptates unde inventore nesciunt vitae nobis maiores sequi exercitationem ducimus quis quisquam cum asperiores! Impedit, velit temporibus iure corporis nam sint dolore maiores doloribus tempora rerum minima id ea quod expedita cum! Repellendus excepturi sit quam accusamus aut, aliquam ex quia labore optio illo repellat unde ipsum eos debitis praesentium officia a nostrum facilis molestias quasi corrupti? Corporis illo unde libero perferendis facilis quis quos. Saepe, enim eligendi? Fuga totam molestiae ad dicta dolorum ex minima et esse, laboriosam libero, error facilis quos. Laborum temporibus corporis eius!
              </p>
            )}
            {activeTab === 'feedback' && (
              <p className='font-pop text-sm text-[#666666] leading-6'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit dolores voluptas voluptate doloribus numquam sequi necessitatibus quisquam. Nesciunt voluptatem autem quo perferendis exercitationem quam debitis. Fugiat voluptate inventore facilis magni, accusantium facere cum libero quidem repellat ab eum ipsum fugit vero reprehenderit recusandae nostrum autem. Aperiam, aliquid. Perspiciatis nobis deserunt tenetur nemo dolore. Atque ratione blanditiis quae hic asperiores nobis ducimus nostrum ipsum dignissimos consequuntur, porro consectetur illo distinctio nam earum commodi dolorem totam, minus reprehenderit nemo, perferendis deserunt possimus. Exercitationem illo, temporibus earum perspiciatis quisquam sapiente neque, quis nisi aut culpa quos quia optio? Nemo, corporis? Eaque, amet pariatur.
              </p>
            )}
          </div>

          <div className='w-[50%]'>
            <div>
              <iframe
                width="100%"
                height="220"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Product video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className='flex'>
              <div>sdf</div>
              <div>hmjg</div>
            </div>
          </div>
        </div>
      </div>
      {/* description end */}
    </Container>
  );
};

export default Details;