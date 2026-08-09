import React, { useEffect, useState } from 'react';
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
import { FaStar, FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaHeart, FaMinus, FaPlus, FaEye } from 'react-icons/fa';
import { RiShoppingBagLine } from "react-icons/ri";
import key from '../assets/daitels/key.webp';
import pata from '../assets/daitels/pata.webp';
import { MdOutlineDone } from "react-icons/md";
import feedbackOne from '../assets/daitels/feedbackOne.webp';
import feedbackTwo from '../assets/daitels/feedbackTwo.webp';
import feedbackThree from '../assets/daitels/feedbackThree.webp';
import feedbackFour from '../assets/daitels/feedbackFour.webp';
import axios from 'axios';

const images = [
  dd1, dd2, dd4, dd5, dd6, dd8, dd9,
];

const Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');
  const [shop, setshop] = useState([]);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    async function allData() {
      let proData = await axios.get('https://dummyjson.com/products');
      setshop(proData.data.products.slice(0, 4));
    }
    allData();
  }, []);

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-6 mt-6 sm:mt-10">
        <div className="w-full lg:w-1/2 flex gap-2 sm:gap-4 h-[280px] xs:h-[340px] sm:h-[400px] lg:h-[450px]">
          <div className="w-[50px] sm:w-[70px] flex flex-col justify-between items-center relative h-full shrink-0">
            <button className="thumb-prev mb-4 sm:mb-10 cursor-pointer text-gray-500 z-20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <div className="w-full h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden">
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
            <button className="thumb-next cursor-pointer mt-4 sm:mt-10 text-gray-500 z-20">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="w-full lg:w-1/2">
          <div>
            <h3 className='flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 items-center font-pop font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-[#1A1A1A]'>
              Chinese Cabbage
              <span className='font-pop text-sm font-normal text-[#2C742F] bg-[#aedbb07a] py-1 px-2 rounded-[5px]'>
                In Stock
              </span>
            </h3>
            <div className='flex flex-wrap items-center relative mt-2 gap-y-2'>
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

          <div className='flex flex-wrap items-center gap-x-3 sm:gap-x-5.5 gap-y-2 mt-4'>
            <span className='font-pop font-normal text-base sm:text-lg text-[#999999] line-through'>$49.00</span>
            <span className='font-pop font-semibold text-[22px] sm:text-[28px] text-[#2C742F]'>$17.28</span>
            <span className='font-pop font-medium text-xs text-red-500 bg-[#d4c7c76c] py-1 px-2 rounded-[5px]'>65% Off</span>
          </div>

          <div className='flex flex-wrap items-center justify-between gap-y-3 mt-4 pb-4 border-b border-[#EAEAEA]'>
            <p className='flex items-center gap-x-4 font-pop text-sm text-[#333333]'>
              <span>Brand:</span> <img src={sing} alt="sing" />
            </p>
            <div className='flex items-center gap-x-2 text-[#4D4D4D] '>
              <span className='font-pop text-sm text-[#333333] mr-1'>Share Item:</span>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full hover:bg-primry text-[#4D4D4D]'>
                <FaFacebookF />
              </a>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full hover:bg-primry text-[#4D4D4D]'>
                <FaTwitter />
              </a>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full hover:bg-primry text-[#4D4D4D]'>
                <FaPinterestP />
              </a>
              <a href="#" className='w-7 h-7 hover:text-[#ffff] flex items-center justify-center rounded-full hover:bg-primry text-[#4D4D4D]'>
                <FaInstagram />
              </a>
            </div>
          </div>

          <p className='font-pop text-sm text-[#666666] leading-6 mt-4 pr-0 lg:pr-30'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
          </p>

          <div className='flex flex-wrap items-center gap-4 mt-6'>
            <div className='flex items-center border border-[#E5E5E5] rounded-[5px]'>
              <button onClick={handleMinus} className='w-10 h-11 cursor-pointer flex items-center justify-center text-[#333333] hover:bg-gray-50'>
                <FaMinus size={12} />
              </button>
              <span className='w-10 text-center font-pop text-[16px] text-[#1A1A1A]'>{count}</span>
              <button onClick={handlePlus} className='w-10 h-11 cursor-pointer flex items-center justify-center text-[#333333] hover:bg-gray-50'>
                <FaPlus size={12} />
              </button>
            </div>

            <button className='flex-1 min-w-[140px] h-11 flex items-center justify-center gap-x-2 bg-primry hover:bg-[#245F26] text-white font-pop font-medium text-sm rounded-[43px] transition-colors'>
              Add to Cart
            </button>

            <button className='w-11 h-11 flex items-center justify-center rounded-full text-[#333333] hover:text-[#ffff] transition-colors hover:bg-primry'>
              <FaHeart />
            </button>
          </div>

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
      <div className='mt-8 sm:mt-2 '>
        <div className='flex flex-wrap gap-x-5 sm:gap-x-8 gap-y-2 justify-center font-pop font-medium text-[14px] sm:text-[16px] text-[#808080] px-2 text-center'>
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

        <div className='flex flex-col lg:flex-row mt-6 gap-x-8 lg:gap-x-[80px] xl:gap-x-[143px] gap-y-10'>
          <div className='w-full lg:w-1/2'>
            {activeTab === 'desc' && (
              <p className='font-pop text-sm text-[#666666] leading-6'>
                <span>
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                </span> <br />
                <br />
                <span>
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. 
                </span>
                <div className='mt-5'>
                  <span>
                    <span className='flex gap-x-2'><MdOutlineDone className='bg-primry rounded-full w-6 h-6 p-1 text-[16px] text-white mb-3.5 shrink-0'/>100 g of fresh leaves provides.</span>
                    <span className='flex gap-x-2'><MdOutlineDone className='bg-primry rounded-full w-6 h-6 p-1 text-[16px] text-white mb-3.5 shrink-0'/>Aliquam ac est at augue volutpat elementum.</span>
                    <span className='flex gap-x-2'><MdOutlineDone className='bg-primry rounded-full w-6 h-6 p-1 text-[16px] text-white mb-3.5 shrink-0'/>Aliquam ac est at augue volutpat elementum.</span>
                    <span className='flex gap-x-2'><MdOutlineDone className='bg-primry rounded-full w-6 h-6 p-1 text-[16px] text-white mb-3.5 shrink-0'/>Proin convallis odio volutpat finibus posuere.</span>
                  </span>
                    <p>
                      Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. 
                    </p>
                </div>
              </p>
            )}
            {activeTab === 'info' && (
              <p className='font-pop text-sm leading-6 flex gap-x-8 sm:gap-x-12'>
                <ul className='text-black'>
                  <li className='mb-3'>Weight:</li>
                  <li className='mb-3'>Color:</li>
                  <li className='mb-3'>Type:</li>
                  <li className='mb-3'>Category:</li>
                  <li className='mb-3'>Stock Status:</li>
                  <li className='mb-3'>Tags:</li>
                </ul>
                <ul className='text-[#666666]'>
                  <li className='mb-3'>03</li>
                  <li className='mb-3'>Green</li>
                  <li className='mb-3'>Organic</li>
                  <li className='mb-3'>Vegetables</li>
                  <li className='mb-3'>Available (5,413)</li>
                  <li className='mb-3'>Vegetables, Healthy,<u className='text-[#1A1A1A]'> Chinese,</u> Cabbage, Green Cabbage</li>
                </ul>
              </p>
            )}
            {activeTab === 'feedback' && (
              <div className='font-pop'>
                <div className='mb-10'>
                  <div className='flex flex-wrap justify-between gap-y-2'>
                    <div className='flex gap-x-3'>
                      <img src={feedbackOne} alt="feedbackOne" className='w-10 h-10 sm:w-auto sm:h-auto rounded-full object-cover' />
                      <div>
                        <p>Kristin Watson</p>
                        <p className='flex items-center text-[#FF8A00]'>
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </p>
                      </div>
                    </div>
                    <p className='text-[#666666]'>2 min ago</p>
                  </div>
                  <p className='font-pop font-normal text-sm text-[#666666] mt-3'>
                    Duis at ullamcorper nulla, eu dictum eros.
                  </p>
                </div>

                <div className='mb-10'>
                  <div className='flex flex-wrap justify-between gap-y-2'>
                    <div className='flex gap-x-3'>
                      <img src={feedbackTwo} alt="feedbackOne" className='w-10 h-10 sm:w-auto sm:h-auto rounded-full object-cover' />
                      <div>
                        <p>Jane Cooper</p>
                        <p className='flex items-center text-[#FF8A00]'>
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </p>
                      </div>
                    </div>
                    <p className='text-[#666666]'>30 Apr, 202</p>
                  </div>
                  <p className='font-pop font-normal text-sm text-[#666666] mt-3'>
                    Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.
                  </p>
                </div>

                <div className='mb-10'>
                  <div className='flex flex-wrap justify-between gap-y-2'>
                    <div className='flex gap-x-3'>
                      <img src={feedbackThree} alt="feedbackOne" className='w-10 h-10 sm:w-auto sm:h-auto rounded-full object-cover' />
                      <div>
                        <p>Jacob Jones</p>
                        <p className='flex items-center text-[#FF8A00]'>
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </p>
                      </div>
                    </div>
                    <p className='text-[#666666]'>27 min ago</p>
                  </div>
                  <p className='font-pop font-normal text-sm text-[#666666] mt-3'>
                    Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.
                  </p>
                </div>

                <div className='mb-10'>
                  <div className='flex flex-wrap justify-between gap-y-2'>
                    <div className='flex gap-x-3'>
                      <img src={feedbackFour} alt="feedbackOne" className='w-10 h-10 sm:w-auto sm:h-auto rounded-full object-cover' />
                      <div>
                        <p>Ralph Edwards</p>
                        <p className='flex items-center text-[#FF8A00]'>
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </p>
                      </div>
                    </div>
                    <p className='text-[#666666]'>2 days ago</p>
                  </div>
                  <p className='font-pop font-normal text-sm text-[#666666] mt-3'>
                    200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className='w-full lg:w-1/2'>
            {activeTab !== 'feedback' && (
              <>
                <div>
                  <iframe
                    width="100%"
                    height="220"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Product video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className='rounded-lg aspect-video h-auto'
                  ></iframe>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap mt-8 sm:mt-12 gap-6'>
                  <div className='flex w-full sm:w-1/2 gap-x-2 '>
                    <img src={key} alt="key" className='shrink-0' />
                    <div>
                      <h3 className='font-pop font-medium text-[16px] text-[#1A1A1A]'>64% Discount</h3>
                      <p className='font-pop font-normal text-sm text-[#808080]'>Save your 64% money with us</p>
                    </div>
                  </div>
                  <div>
                    <div className='flex gap-x-2 '>
                      <img src={pata} alt="pata" className='shrink-0' />
                      <div>
                        <h3 className='font-pop font-medium text-[16px] text-[#1A1A1A]'>100% Organic</h3>
                        <p className='font-pop font-normal text-sm text-[#808080]'>100% Organic Vegetables</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* description end */}

      {/* Related Products Start */}
      <div className='mb-12 sm:mb-20'>
        <h3 className='text-center font-pop font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-[#1a1a1a] mt-12 sm:mt-20 mb-6 sm:mb-8'>
          Related Products
        </h3>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
          {shop.map((item) => (
            <div
              key={item.id}
              className='group border border-[#E6E6E6] hover:border-primry rounded-lg p-3 sm:p-4 transition-all duration-300 relative bg-white hover:shadow-lg'
            >
              {/* Product Image & Hover Icons */}
              <div className='relative overflow-hidden rounded-md mb-3 sm:mb-4 bg-[#F2F2F2]'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-full h-[140px] sm:h-[180px] lg:h-[230px] object-cover group-hover:scale-105 transition-all duration-300'
                />

                {/* Hover Eye & Heart Icons */}
                <div className='absolute top-2 sm:top-3 right-2 sm:right-3 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10'>
                  <button className='w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-primry hover:text-white transition-colors shadow-sm cursor-pointer'>
                    <FaHeart size={16} />
                  </button>
                  <button className='w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-primry hover:text-white transition-colors shadow-sm cursor-pointer'>
                    <FaEye size={16} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <h4 className='font-pop font-medium text-sm sm:text-base text-[#4D4D4D] group-hover:text-primry transition-colors truncate mb-2 sm:mb-2.5'>
                {item.title}
              </h4>
              <div className='flex items-center justify-between mt-2'>
                <div>
                  <p className='font-pop font-semibold text-[14px] sm:text-[16px] text-[#1A1A1A] '>${item.price}</p>

                  <div className='flex items-center mt-1 gap-x-1 text-xs'>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.round(item.rating) ? 'text-[#FF8A00]' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                <button className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F2F2F2] flex items-center justify-center text-[#1A1A1A] group-hover:bg-primry group-hover:text-white transition-all duration-300 cursor-pointer shrink-0'>
                  <RiShoppingBagLine className='text-[16px] sm:text-[20px]' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Related Products End */}

    </Container>
  );
};

export default Details;