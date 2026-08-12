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
        <div className='lg:flex justify-between lg:mt-25 mb-10 items-center'>
           <div className='lg:max-w-[448px]'>
            <h3 className='font-pop text-[#1A1A1A] font-semibold text-[24px] lg:text-[32px] mb-1'>Subcribe our Newsletter</h3>
            <p className='font-pop font-normal text-[#999999] text-sm'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
           </div>
           <div className='relative lg:flex items-center'>
              <input
                className=' my-5 lg:my-0 w-full py-2 rounded-[50px] border border-2 lg:w-100 lg:py-3.75 lg:border-l lg:border-t lg:border-b border-[#E6E6E6] lg:rounded-l-[46px] pl-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm outline-[#808080]'
                type="text"
                placeholder='Search'
              />
              <IoSearch className='absolute left-4 top-[40px] lg:top-1/2 -translate-y-1/2 text-2xl text-[#1A1A1A]' />
              <button className='lg:absolute text-[#FFFFFF] bg-primry px-4 py-2 lg:px-10 lg:py-3.75 rounded-[46px] lg:-right-25 cursor-pointer'>
                Subscribe
              </button>
            </div>
           <div className='flex gap-4 ml-4'>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
               <Link to={"https://web.facebook.com/ariyan.akash.01303"}><FaFacebookF /></Link>
             </div>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
                <Link><FaTwitter/></Link>
             </div>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
               <Link><FaPinterestP/></Link>
             </div>
             <div className='flex w-10 h-10 rounded-full text-[#4D4D4D] text-[30px] justify-center items-center hover:bg-primry hover:text-white'>
                <Link><FaInstagram/></Link>
             </div>
           </div>
        </div>
    </Container>
    </>
  )
}

export default Subcribe