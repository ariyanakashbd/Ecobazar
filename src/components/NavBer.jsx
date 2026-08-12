import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './layouts/Container';
import useOutsiteClick from '../hooks/outsideClick';

import { FaBars, FaAngleDown, FaCarrot } from "react-icons/fa";
import { FiPhoneCall, FiShoppingCart } from "react-icons/fi";
import { IoFishOutline, IoClose, IoMenu } from "react-icons/io5";
import { LiaDrumstickBiteSolid } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { CgIcecream } from "react-icons/cg";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

const NavBer = () => {
  const [open, setOpen] = useState(false);
  const [pagesDrop, setPagesDrop] = useState(false);
  const [blogDrop, setBlogDrop] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [navMenu, setNavMenu] = useState(false);

  const [mPagesDrop, setMPagesDrop] = useState(false);
  const [mBlogDrop, setMBlogDrop] = useState(false);

  const allcatagoryDrop = useRef(null);
  const sidebarRef = useRef(null);
  const navMenuRef = useRef(null);

  useOutsiteClick(allcatagoryDrop, () => setOpen(false), open);
  useOutsiteClick(sidebarRef, () => setSidebar(false), sidebar);
  useOutsiteClick(navMenuRef, () => setNavMenu(false), navMenu);

  return (
    <div className='bg-[#0e0d0d] w-full mt-5 text-white font-pop'>
      <Container>
        <nav
          onMouseLeave={() => setOpen(false)}
          className='flex justify-between items-center relative py-3 lg:py-0'
        >
          <div className='flex items-center w-full lg:w-auto'>
            <ul className='flex gap-x-3 lg:gap-x-8 items-center text-sm font-pop relative w-full lg:w-auto justify-between lg:justify-start'>
              {/* Hamburger Icon */}
              <li
                onClick={() => setSidebar(!sidebar)}
                className='p-3 lg:p-4 bg-primry lg:mr-30 text-[24px] lg:text-[32px] cursor-pointer'
              >
                <FaBars />
              </li>

              {/* Mobile Menu Icon */}
              <li
                onClick={() => setNavMenu(!navMenu)}
                className='lg:hidden p-3 text-[24px] cursor-pointer'
              >
                <IoMenu />
              </li>

              {/* All Categories Desktop */}
              <li
                onMouseEnter={() => setOpen(!open)}
                ref={allcatagoryDrop}
                className='hidden lg:block font-bold absolute bg-[#333333] top-0 left-[64px] p-5.5 cursor-pointer'
              >
                <div className='flex items-center gap-x-1 mr-17'>
                  All Categories <FaAngleDown className='absolute right-5.5' />
                </div>
              </li>

              {/* Home */}
              <li className='hidden lg:block'>
                <Link to="/" className='text-[#808080] hover:text-white ml-26'>
                  Home
                </Link>
              </li>

              {/* Shop */}
              <li className='hidden lg:block'>
                <Link to="/shop" className='text-[#808080] hover:text-white'>
                  Shop
                </Link>
              </li>


              {/* Pages Dropdown (trigger + menu in same li, no gap) */}
              <li
                onMouseEnter={() => setPagesDrop(true)}
                onMouseLeave={() => setPagesDrop(false)}
                className='hidden lg:block relative'
              >
                <div className='flex items-center gap-x-1 text-[#808080] hover:text-white cursor-pointer py-4'>
                  Pages <FaAngleDown />
                </div>

                {pagesDrop && (
                  <div className='absolute top-full left-0 bg-[#ffffff] font-pop text-sm text-[#000000] border-2 w-28 text-center z-20 shadow-md'>
                    <ul>
                      <li className='p-2 hover:bg-primry hover:text-white'><Link to="/cart">Cart</Link></li>
                      <li className='p-2 hover:bg-primry hover:text-white'><Link to="/cart">Cart Details</Link></li>
                      <li className='p-2 hover:bg-primry hover:text-white'><Link to="/details">Details</Link></li>
                      <li className='p-2 hover:bg-primry hover:text-white'><Link to="/chakout">Checkout</Link></li>
                    </ul>
                  </div>
                )}
              </li>

              {/* Blog Dropdown (trigger + menu in same li, no gap) */}
              <li
                onMouseEnter={() => setBlogDrop(true)}
                onMouseLeave={() => setBlogDrop(false)}
                className='hidden lg:block relative'
              >
                <div className='flex items-center gap-x-1 text-[#808080] hover:text-white cursor-pointer py-4'>
                  Blog <FaAngleDown />
                </div>

                {blogDrop && (
                  <div className='absolute top-full left-0 bg-[#ffffff] font-pop text-sm text-[#000000] border-2 w-28 text-center z-20 shadow-md'>
                    <ul>
                      <li className='p-2 hover:bg-primry hover:text-white'><Link to="/blog/1">Blog 1</Link></li>
                      <li className='p-2 hover:bg-primry hover:text-white'><Link to="/blog/2">Blog 2</Link></li>
                    </ul>
                  </div>
                )}
              </li>

              <li className='hidden lg:block'>
                <Link to="/about" className='text-[#808080] hover:text-white'>About Us</Link>
              </li>

              <li className='hidden lg:block'>
                <Link to="/contact" className='text-[#808080] hover:text-white'>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Right side - Phone & Cart Icon */}
          <div className='hidden lg:flex items-center gap-x-6'>
            <a href='tel:2195550114' className='flex items-center gap-x-2 text-sm hover:text-primry'>
              <FiPhoneCall /> (219) 555-0114
            </a>

            {/* Cart Icon Link */}
            <Link to="/cart" className='flex items-center gap-x-2 bg-primry text-white px-4 py-2 rounded hover:opacity-90 transition-all'>
              <FiShoppingCart className='text-lg' />
              <span className='font-medium text-sm'>Cart</span>
            </Link>
          </div>

          {/* Desktop Categories Dropdown */}
          {open && (
            <div className='hidden lg:block absolute bg-white text-black font-pop text-bold p-2 top-16 left-16 border border-[#333333] w-51.5 z-50'>
              <ul>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><FaCarrot />Fresh Fruit</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><FaCarrot />Vegetables</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><IoFishOutline />River Fish</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><LiaDrumstickBiteSolid />Chicken & Meat</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><SiBuymeacoffee />Drink & Water</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><CgIcecream />Yogurt & Ice Cream</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><GiCupcake />Cake & Bread</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><LuIceCreamBowl />Butter & Cream</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><PiCookingPot />Cooking</Link></li>
                <li className='hover:bg-primry p-2'><Link to="/cat" className='flex gap-x-1 items-center'><GoPlus />View all Category</Link></li>
              </ul>
            </div>
          )}
        </nav>
      </Container>

      {/* Overlay */}
      {(sidebar || navMenu) && (
        <div
          onClick={() => { setSidebar(false); setNavMenu(false); }}
          className='fixed inset-0 bg-black/50 z-40'
        />
      )}

      {/* Categories Sidebar Drawer */}
      <div ref={sidebarRef}>
        <div
          className={`fixed z-50 top-0 left-0 h-full w-[85%] sm:w-100 max-w-100 transition-all duration-300 ease-in-out bg-white border border-[#E5E5E5] shadow-2xl shadow-black text-black p-5 overflow-y-auto
          ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className='flex items-center justify-between mb-6'>
            <h2 className="text-xl font-bold">All Categories</h2>
            <button
              onClick={() => setSidebar(false)}
              className='text-2xl cursor-pointer p-1 hover:text-primry'
              aria-label="Close categories"
            >
              <IoClose />
            </button>
          </div>

          <ul className="space-y-2">
            <li className='hover:bg-primry p-2'><Link to="/cat" onClick={() => setSidebar(false)} className='flex gap-x-1 items-center'><FaCarrot />Fresh Fruit</Link></li>
            <li className='hover:bg-primry p-2'><Link to="/cat" onClick={() => setSidebar(false)} className='flex gap-x-1 items-center'><FaCarrot />Vegetables</Link></li>
            <li className='hover:bg-primry p-2'><Link to="/cat" onClick={() => setSidebar(false)} className='flex gap-x-1 items-center'><IoFishOutline />River Fish</Link></li>
            <li className='hover:bg-primry p-2'><Link to="/cat" onClick={() => setSidebar(false)} className='flex gap-x-1 items-center'><LiaDrumstickBiteSolid />Chicken & Meat</Link></li>
            <li className='hover:bg-primry p-2'><Link to="/cat" onClick={() => setSidebar(false)} className='flex gap-x-1 items-center'><SiBuymeacoffee />Drink & Water</Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <div ref={navMenuRef}>
        <div
          className={`fixed z-50 top-0 right-0 h-full w-[85%] sm:w-100 max-w-100 transition-all duration-300 ease-in-out bg-white border border-[#E5E5E5] shadow-2xl shadow-black text-black p-5 overflow-y-auto
          ${navMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className='flex items-center justify-between mb-6'>
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => { setNavMenu(false); setMPagesDrop(false); setMBlogDrop(false); }}
              className='text-2xl cursor-pointer p-1 hover:text-primry'
              aria-label="Close menu"
            >
              <IoClose />
            </button>
          </div>

          <ul className='space-y-1'>
            <li className='p-2 hover:bg-gray-100'>
              <Link to="/" onClick={() => setNavMenu(false)}>Home</Link>
            </li>

            <li className='p-2 hover:bg-gray-100'>
              <Link to="/shop" onClick={() => setNavMenu(false)}>Shop</Link>
            </li>

            {/* Direct Cart Link for Mobile */}
            <li className='p-2 hover:bg-gray-100 font-semibold text-primry'>
              <Link to="/cart" onClick={() => setNavMenu(false)} className='flex items-center gap-x-2'>
                <FiShoppingCart /> Cart
              </Link>
            </li>

            {/* Pages (Mobile Dropdown) - Cart & Details links here */}
            <li>
              <div onClick={() => setMPagesDrop(!mPagesDrop)} className='flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100'>
                <span>Pages</span>
                <FaAngleDown className={`transition-transform ${mPagesDrop ? "rotate-180" : ""}`} />
              </div>
              {mPagesDrop && (
                <ul className='pl-4 bg-gray-50'>
                  <li className='py-2 hover:text-primry'>
                    <Link to="/cart" onClick={() => { setMPagesDrop(false); setNavMenu(false); }}>Cart</Link>
                  </li>
                  <li className='py-2 hover:text-primry'>
                    <Link to="/cart" onClick={() => { setMPagesDrop(false); setNavMenu(false); }}>Cart Details</Link>
                  </li>
                  <li className='py-2 hover:text-primry'>
                    <Link to="/details" onClick={() => { setMPagesDrop(false); setNavMenu(false); }}>Details</Link>
                  </li>
                  <li className='py-2 hover:text-primry'>
                    <Link to="/chakout" onClick={() => { setMPagesDrop(false); setNavMenu(false); }}>Checkout</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blog (Mobile Dropdown) */}
            <li>
              <div onClick={() => setMBlogDrop(!mBlogDrop)} className='flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100'>
                <span>Blog</span>
                <FaAngleDown className={`transition-transform ${mBlogDrop ? "rotate-180" : ""}`} />
              </div>
              {mBlogDrop && (
                <ul className='pl-4 bg-gray-50'>
                  <li className='py-2 hover:text-primry'><Link to="/" onClick={() => { setMBlogDrop(false); setNavMenu(false); }}>Blog 1</Link></li>
                </ul>
              )}
            </li>

            <li className='p-2 hover:bg-gray-100'>
              <Link to="/about" onClick={() => setNavMenu(false)}>About Us</Link>
            </li>
            <li className='p-2 hover:bg-gray-100'>
              <Link to="/contact" onClick={() => setNavMenu(false)}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBer;