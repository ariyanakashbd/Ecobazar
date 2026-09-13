import Container from './layouts/Container';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Subcribe = () => {
  return (
    <>
    <Container>
        <div className='flex flex-col lg:flex-row justify-between lg:mt-20 md:mt-15 mb-8 sm:mb-10 items-start lg:items-center gap-6'>
           <div className='lg:max-w-[448px] w-full'>
            <h3 className='font-pop text-[#1A1A1A] font-semibold text-[20px] sm:text-[24px] lg:text-[32px] mb-1'>Subcribe our Newsletter</h3>
            <p className='font-pop font-normal text-[#999999] text-xs sm:text-sm'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
           </div>
           <div className='w-full lg:w-auto relative'>
              <div className='relative flex flex-col sm:flex-row gap-2 sm:gap-0'>
                <div className="relative w-full sm:flex-1">
                  <input
                    className='w-full py-2.5 sm:py-2 lg:py-3.75 rounded-[50px] sm:rounded-r-none pl-11 pr-4 sm:pr-28 lg:pr-36 border border-2 lg:border-l lg:border-t lg:border-b border-[#E6E6E6] placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm outline-[#808080]'
                    type="text"
                    placeholder='Search'
                  />
                  <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-[#1A1A1A]' />
                </div>
                <button className='w-full sm:w-auto sm:absolute sm:right-0 sm:top-0 sm:bottom-0 text-[#FFFFFF] bg-primry px-4 py-2.5 sm:py-2 lg:px-10 lg:py-3.75 rounded-[46px] sm:rounded-l-[0px] whitespace-nowrap cursor-pointer'>
                  Subscribe
                </button>
              </div>
            </div>
           <div className='flex gap-3 sm:gap-4 w-full lg:w-auto justify-center lg:justify-start'>
             <div className='flex w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#4D4D4D] text-[16px] sm:text-[18px] justify-center items-center hover:bg-primry hover:text-white'>
               <Link to={"https://web.facebook.com/ariyan.akash.01303"}><FaFacebookF /></Link>
             </div>
             <div className='flex w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#4D4D4D] text-[16px] sm:text-[18px] justify-center items-center hover:bg-primry hover:text-white'>
                <Link><FaTwitter/></Link>
             </div>
             <div className='flex w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#4D4D4D] text-[16px] sm:text-[18px] justify-center items-center hover:bg-primry hover:text-white'>
               <Link><FaPinterestP/></Link>
             </div>
             <div className='flex w-9 h-9 sm:w-10 sm:h-10 rounded-full text-[#4D4D4D] text-[16px] sm:text-[18px] justify-center items-center hover:bg-primry hover:text-white'>
                <Link><FaInstagram/></Link>
             </div>
           </div>
        </div>
    </Container>
    </>
  )
}

export default Subcribe