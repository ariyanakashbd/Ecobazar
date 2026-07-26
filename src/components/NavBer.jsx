import React, { useRef, useState } from 'react'
import Container from './layouts/Container';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import useOutsiteClick from '../hooks/outsideClick';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCarrot } from "react-icons/fa";
import { IoFishOutline, IoClose, IoMenu } from "react-icons/io5";
import { LiaDrumstickBiteSolid } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { CgIcecream } from "react-icons/cg";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

const dropItems = ["Home1", "Home2", "Home3", "Home4"];

const categoryList = [
  { icon: <FaCarrot />, label: "Fresh Fruit" },
  { icon: <FaCarrot />, label: "Vegetables" },
  { icon: <IoFishOutline />, label: "River Fish" },
  { icon: <LiaDrumstickBiteSolid />, label: "Chicken & Meat" },
  { icon: <SiBuymeacoffee />, label: "Drink & Water" },
  { icon: <CgIcecream />, label: "Yogurt & Ice Cream" },
  { icon: <GiCupcake />, label: "Cake & Bread" },
  { icon: <LuIceCreamBowl />, label: "Butter & Cream" },
  { icon: <PiCookingPot />, label: "Cooking" },
];

const NavBer = () => {
  let [open, setOpen] = useState(false);
  let [homeDrop, setHomeDrop] = useState(false);
  let [shopDrop, setShopDrop] = useState(false);
  let [pagesDrop, setPagesDrop] = useState(false);
  let [blogDrop, setBlogDrop] = useState(false);
  let [sidebar, setSidebar] = useState(false);
  let [navMenu, setNavMenu] = useState(false); // Home/Shop/Pages/Blog/About/Contact-er alada menu

  // Mobile drawer-er accordion-er jonno alada state - desktop hover state theke completely alada,
  // tai outside-click hook desktop-er sathe conflict korbe na ar close thik moto kaj korbe
  let [mHomeDrop, setMHomeDrop] = useState(false);
  let [mShopDrop, setMShopDrop] = useState(false);
  let [mPagesDrop, setMPagesDrop] = useState(false);
  let [mBlogDrop, setMBlogDrop] = useState(false);

  let allcatagoryDrop = useRef(null);
  let homeDropReff = useRef(null);
  let shopDropReff = useRef(null);
  let pagesDropReff = useRef(null);
  let blogDropReff = useRef(null);
  let sidebarRef = useRef(null);
  let navMenuRef = useRef(null);

  useOutsiteClick(allcatagoryDrop, () => setOpen(false), open);
  useOutsiteClick(homeDropReff, () => setHomeDrop(false), homeDrop);
  useOutsiteClick(shopDropReff, () => setShopDrop(false), shopDrop);
  useOutsiteClick(pagesDropReff, () => setPagesDrop(false), pagesDrop);
  useOutsiteClick(blogDropReff, () => setBlogDrop(false), blogDrop);
  // sidebar akhon close icon diye o close kora jabe, tobuo outside click rekhe dilam
  useOutsiteClick(sidebarRef, () => setSidebar(false), sidebar);
  useOutsiteClick(navMenuRef, () => setNavMenu(false), navMenu);

  return (
    <div
      onMouseLeave={() => { setPagesDrop(false); setBlogDrop(false); }}
      className='bg-[#0e0d0d] w-full mt-5 text-white font-pop'
    >
      <Container>
        <nav
          onMouseLeave={() => { setOpen(false); setShopDrop(false); setHomeDrop(false); setBlogDrop(false); }}
          className='flex justify-between items-center relative py-3 lg:py-0'
        >
          <div className='flex items-center w-full lg:w-auto'>
            <ul
              onMouseLeave={() => { setHomeDrop(false); setBlogDrop(false); }}
              className='flex gap-x-3 lg:gap-x-8 items-center text-sm font-pop relative w-full lg:w-auto justify-between lg:justify-start'
            >
              {/* Hamburger icon - shudhu "All Categories" er jonno, shob device a thakbe */}
              <li
                onClick={() => setSidebar(!sidebar)}
                className='p-3 lg:p-4 bg-primry lg:mr-30 text-[24px] lg:text-[32px] cursor-pointer'
              >
                <FaBars />
              </li>

              {/* Alada Menu icon - shudhu Home/Shop/Pages/Blog/About/Contact er jonno, shudhu choto device a (lg:hidden) dekha jabe */}
              <li
                onClick={() => setNavMenu(!navMenu)}
                className='lg:hidden p-3 text-[24px] cursor-pointer'
              >
                <IoMenu />
              </li>

              {/* All Categories - choto device a hidden, boro (lg) device a show */}
              <li
                onMouseEnter={() => setOpen(!open)}
                ref={allcatagoryDrop}
                className='hidden lg:block font-bold absolute bg-[#333333] top-0 left-[64px] p-5.5'
              >
                <Link className='flex items-center gap-x-1 mr-17' to="#">
                  All Categories <FaAngleDown className='absolute right-5.5' />
                </Link>
              </li>

              {/* Desktop nav links - choto device a hidden, lg thake dekha jabe */}
              <li onMouseEnter={() => setHomeDrop(!homeDrop)} ref={homeDropReff} className='hidden lg:block'>
                <Link className='flex items-center gap-x-1 text-[#808080] hover:text-white ml-26' to="#">Home <FaAngleDown /></Link>
              </li>
              <li onMouseEnter={() => setShopDrop(!shopDrop)} ref={shopDropReff} className='hidden lg:block'>
                <Link className='flex items-center gap-x-1 text-[#808080] hover:text-white' to="#">Shop <FaAngleDown /></Link>
              </li>
              <li onMouseEnter={() => setPagesDrop(!pagesDrop)} ref={pagesDropReff} className='hidden lg:block'>
                <Link className='flex items-center gap-x-1 text-[#808080] hover:text-white' to="#">Pages <FaAngleDown /></Link>
              </li>
              <li onMouseEnter={() => setBlogDrop(!blogDrop)} ref={blogDropReff} className='hidden lg:block'>
                <Link className='flex items-center gap-x-1 text-[#808080] hover:text-white' to="#">Blog <FaAngleDown /></Link>
              </li>
              <li className='hidden lg:block'>
                <Link className='text-[#808080] hover:text-white' to="#">About Us</Link>
              </li>
              <li className='hidden lg:block'>
                <Link className='text-[#808080] hover:text-white' to="#">Contact Us</Link>
              </li>

              {/* Desktop hover dropdowns - lg-only */}
              {homeDrop && (
                <div className='hidden lg:block bg-[#ffffff] font-pop text-sm text-[#000000] border-2 w-15 absolute top-15 z-10 left-80 text-center'>
                  <ul>
                    {dropItems.map((item) => (
                      <Link to="#" key={item}><li className='mt-2 hover:bg-primry last:mb-2'>{item}</li></Link>
                    ))}
                  </ul>
                </div>
              )}
              {shopDrop && (
                <div className='hidden lg:block bg-[#ffffff] font-pop text-sm text-[#000000] border-2 w-15 absolute top-15 right-88 text-center z-30'>
                  <ul>
                    {dropItems.map((item) => (
                      <Link to="#" key={item}><li className='mt-2 hover:bg-primry last:mb-2'>{item}</li></Link>
                    ))}
                  </ul>
                </div>
              )}
              {pagesDrop && (
                <div className='hidden lg:block bg-[#ffffff] font-pop text-sm text-[#000000] border-2 w-15 absolute top-15 right-67 text-center z-20'>
                  <ul>
                    {dropItems.map((item) => (
                      <Link to="#" key={item}><li className='mt-2 hover:bg-primry last:mb-2'>{item}</li></Link>
                    ))}
                  </ul>
                </div>
              )}
              {blogDrop && (
                <div className='hidden lg:block bg-[#ffffff] font-pop text-sm text-[#000000] border-2 w-15 absolute top-15 right-45 text-center z-40'>
                  <ul>
                    {dropItems.map((item) => (
                      <Link to="#" key={item}><li className='mt-2 hover:bg-primry last:mb-2'>{item}</li></Link>
                    ))}
                  </ul>
                </div>
              )}
            </ul>
          </div>

          <div className='hidden lg:flex items-center'>
            <Link className='flex items-center gap-x-2' to='tel:2195550114'><FiPhoneCall /> (219) 555-0114</Link>
          </div>

          {/* All Categories hover dropdown panel - lg-only */}
          {open && (
            <div className='hidden lg:block absolute bg-white text-black font-pop text-bold p-2 top-50 left-29.25 border border-[#333333] w-51.5 z-50'>
              <ul>
                {categoryList.map((cat) => (
                  <li key={cat.label} className='hover:bg-primry p-2'>
                    <Link to="#" className='flex gap-x-1 items-center'>{cat.icon}{cat.label}</Link>
                  </li>
                ))}
                <li className='hover:bg-primry p-2'>
                  <Link to="#" className='flex gap-x-1 items-center'><GoPlus />View all Category</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </Container>

      {/* Dark overlay - jekono drawer (categories sidebar ba nav menu) khola thakle dim overlay dekhabe, click e o close hoy */}
      {(sidebar || navMenu) && (
        <div
          onClick={() => { setSidebar(false); setNavMenu(false); }}
          className='fixed inset-0 bg-black/50 z-40'
        />
      )}

      {/* Categories Sidebar - shudhu "All Categories" list, left theke slide kore */}
      <div ref={sidebarRef}>
        <div
          className={`fixed z-50 top-0 left-0 h-full w-[85%] sm:w-100 max-w-100 transition-all duration-300 ease-in-out bg-white border border-[#E5E5E5] shadow-2xl shadow-black text-black p-5 overflow-y-auto
          ${sidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className='flex items-center justify-between mb-6'>
            <h2 className="text-xl font-bold">All Categories</h2>
            {/* Close icon - choto & boro dutu device a e sidebar close korbe */}
            <button
              onClick={() => setSidebar(false)}
              className='text-2xl cursor-pointer p-1 hover:text-primry'
              aria-label="Close categories"
            >
              <IoClose />
            </button>
          </div>

          <ul className="space-y-2">
            {categoryList.map((cat) => (
              <li key={cat.label} className='hover:bg-primry p-2'>
                <Link to="#" className='flex gap-x-1 items-center'>{cat.icon}{cat.label}</Link>
              </li>
            ))}
            <li className='hover:bg-primry p-2'>
              <Link to="#" className='flex gap-x-1 items-center'><GoPlus />View all Category</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Nav Menu Drawer - shudhu Home/Shop/Pages/Blog/About/Contact, right theke slide kore, dropdown soho */}
      <div ref={navMenuRef}>
        <div
          className={`fixed z-50 top-0 right-0 h-full w-[85%] sm:w-100 max-w-100 transition-all duration-300 ease-in-out bg-white border border-[#E5E5E5] shadow-2xl shadow-black text-black p-5 overflow-y-auto
          ${navMenu ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className='flex items-center justify-between mb-6'>
            <h2 className="text-xl font-bold">Menu</h2>
            {/* Close icon - ei menu drawer take close korbe */}
            <button
              onClick={() => { setNavMenu(false); setMHomeDrop(false); setMShopDrop(false); setMPagesDrop(false); setMBlogDrop(false); }}
              className='text-2xl cursor-pointer p-1 hover:text-primry'
              aria-label="Close menu"
            >
              <IoClose />
            </button>
          </div>

          <ul className='space-y-1'>
            <li>
              <div onClick={() => setMHomeDrop(!mHomeDrop)} className='flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100'>
                <span>Home</span>
                <FaAngleDown className={`transition-transform ${mHomeDrop ? "rotate-180" : ""}`} />
              </div>
              {mHomeDrop && (
                <ul className='pl-4 bg-gray-50'>
                  {dropItems.map((item) => (
                    <Link to="#" key={item} onClick={() => setMHomeDrop(false)}>
                      <li className='py-2 hover:text-primry'>{item}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => setMShopDrop(!mShopDrop)} className='flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100'>
                <span>Shop</span>
                <FaAngleDown className={`transition-transform ${mShopDrop ? "rotate-180" : ""}`} />
              </div>
              {mShopDrop && (
                <ul className='pl-4 bg-gray-50'>
                  {dropItems.map((item) => (
                    <Link to="#" key={item} onClick={() => setMShopDrop(false)}>
                      <li className='py-2 hover:text-primry'>{item}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => setMPagesDrop(!mPagesDrop)} className='flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100'>
                <span>Pages</span>
                <FaAngleDown className={`transition-transform ${mPagesDrop ? "rotate-180" : ""}`} />
              </div>
              {mPagesDrop && (
                <ul className='pl-4 bg-gray-50'>
                  {dropItems.map((item) => (
                    <Link to="#" key={item} onClick={() => setMPagesDrop(false)}>
                      <li className='py-2 hover:text-primry'>{item}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div onClick={() => setMBlogDrop(!mBlogDrop)} className='flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100'>
                <span>Blog</span>
                <FaAngleDown className={`transition-transform ${mBlogDrop ? "rotate-180" : ""}`} />
              </div>
              {mBlogDrop && (
                <ul className='pl-4 bg-gray-50'>
                  {dropItems.map((item) => (
                    <Link to="#" key={item} onClick={() => setMBlogDrop(false)}>
                      <li className='py-2 hover:text-primry'>{item}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li className='p-2 hover:bg-gray-100'><Link to="#">About Us</Link></li>
            <li className='p-2 hover:bg-gray-100'><Link to="#">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBer;