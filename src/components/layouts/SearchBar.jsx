import Container from './Container';
import Logo from "../../assets/Logo1.webp";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Heart from '../../icon/Heart';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className='font-pop text-sm text-[#666666]'>
      <Container>
        <div className='flex flex-col gap-3 sm:gap-4 lg:gap-5 lg:flex-row lg:justify-between lg:items-center my-3 sm:my-4 lg:my-5.5'>

          {/* Logo + Right quick icons row on mobile */}
          <div className="flex items-center justify-between lg:justify-start w-full lg:w-auto">
            <Link
              to="/"
              className='cursor-pointer flex justify-center lg:justify-start'
            >
              <img
                className='h-7 sm:h-8 md:h-10 w-auto'
                src={Logo}
                fetchPriority="high"
                alt="logo"
              />
            </Link>

            {/* Mobile quick icons */}
            <div className='lg:hidden flex items-center gap-x-4 sm:gap-x-5'>
              <div className='relative'>
               <Link to="/wishlist"> <Heart /></Link>
              </div>
              <div className='flex items-center gap-2'>
                <div>
                  <Link to='/cart'><HiOutlineShoppingBag className='text-2xl sm:text-3xl relative top-[-2px]' /></Link>
                </div>
                <div className='text-[#1A1A1A] font-pop font-bold text-sm'>
                  $57.00
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className='relative flex items-center w-full lg:w-auto'>
            <input
              className='w-full lg:w-[400px] xl:w-[500px] min-w-0 h-10 sm:h-11 border-l border-t border-b border-[#E6E6E6] rounded-l-md pl-10 sm:pl-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-xs sm:placeholder:text-sm outline-[#808080]'
              type="text"
              placeholder='Search'
            />

            <IoSearch className='absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-lg sm:text-xl md:text-2xl text-[#1A1A1A]' />

            <button className='h-10 sm:h-11 text-[#FFFFFF] bg-primry px-3 sm:px-4 md:px-6 lg:px-8 rounded-r-md cursor-pointer whitespace-nowrap text-xs sm:text-sm'>
              Search
            </button>
          </div>

          {/* Right Side - Desktop only */}
          <div className='hidden lg:flex items-center justify-center lg:justify-end gap-x-5 sm:gap-x-8'>

            {/* Wishlist */}
            <div className='relative after:w-[2px] after:h-6 after:bg-[#CCCCCC] after:content-[""] after:absolute after:top-1 after:-right-3 sm:after:-right-4'>
             <Link to="/wishlist"> <Heart /></Link>
            </div>

            {/* Cart */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <div>
                <Link to='/cart'><HiOutlineShoppingBag className='text-3xl sm:text-hsize relative top-[-2px]' /></Link>
              </div>

              <div>
                <span className='font-pop text-[#4D4D4D] text-sm font-normal'>
                  Shopping cart:
                </span>
                <br />
                <span className='text-[#1A1A1A] font-pop font-bold'>
                  $57.00
                </span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;