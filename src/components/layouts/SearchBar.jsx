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
        <div className='flex flex-col gap-4 sm:gap-5 lg:flex-row lg:justify-between lg:items-center my-4 sm:my-5.5'>

          {/* Logo */}
          <Link
            to="/"
            className='cursor-pointer flex justify-center lg:justify-start'
          >
            <img
              className='h-8 sm:h-10 w-auto'
              src={Logo}
              fetchPriority="high"
              alt="logo"
            />
          </Link>

          {/* Search */}
          <div className='relative flex items-center w-full lg:w-auto'>
            <input
              className='w-full lg:w-[400px] xl:w-[500px] min-w-0 h-11 border-l border-t border-b border-[#E6E6E6] rounded-l-md pl-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm outline-[#808080]'
              type="text"
              placeholder='Search'
            />

            <IoSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-xl sm:text-2xl text-[#1A1A1A]' />

            <button className='h-11 text-[#FFFFFF] bg-primry px-4 sm:px-6 md:px-8 rounded-r-md cursor-pointer whitespace-nowrap'>
              Search
            </button>
          </div>

          {/* Right Side */}
          <div className='flex items-center justify-center lg:justify-end gap-x-5 sm:gap-x-8'>

            {/* Wishlist */}
            <div className='relative after:w-[2px] after:h-6 after:bg-[#CCCCCC] after:content-[""] after:absolute after:top-1 after:-right-3 sm:after:-right-4'>
              <Heart />
            </div>

            {/* Cart */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <div>
                <HiOutlineShoppingBag className='text-3xl sm:text-hsize relative top-[-2px]' />
              </div>

              <div className='hidden sm:block'>
                <span className='font-pop text-[#4D4D4D] text-sm font-normal'>
                  Shopping cart:
                </span>
                <br />
                <span className='text-[#1A1A1A] font-pop font-bold'>
                  $57.00
                </span>
              </div>

              <div className='sm:hidden text-[#1A1A1A] font-pop font-bold'>
                $57.00
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;