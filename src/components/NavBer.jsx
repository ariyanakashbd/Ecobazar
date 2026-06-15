import React, { useRef, useState } from 'react'
import Container from './layouts/Container';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import useOutsiteClick from '../hooks/outsideClick';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaCarrot } from "react-icons/fa";
import { IoFishOutline } from "react-icons/io5";
import { LiaDrumstickBiteSolid } from "react-icons/lia";
import { SiBuymeacoffee } from "react-icons/si";
import { CgIcecream } from "react-icons/cg";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { GoPlus } from "react-icons/go";

const NavBer = () => {
  let [open, setOpen] = useState(false);
  let [homeDrop, setHomeDrop] = useState(false);
  let [shopDrop, setShopDrop] = useState(false);
  let [pagesDrop, setPagesDrop] = useState(false);
  let [blogDrop, setBlogDrop] = useState(false);
  let [sidebar , setSidebar] = useState(false);
  let allcatagoryDrop = useRef(null);
  let homeDropReff = useRef(null);
  let shopDropReff = useRef(null);
  let pagesDropReff = useRef(null);
  let blogDropReff = useRef(null);
  let sidebarRef = useRef(null);
  useOutsiteClick(allcatagoryDrop,()=>setOpen(false),open);
  useOutsiteClick(homeDropReff,()=>setHomeDrop(false),homeDrop);
  useOutsiteClick(shopDropReff,()=>setShopDrop(false),shopDrop);
  useOutsiteClick(pagesDropReff,()=>setPagesDrop(false),pagesDrop);
  useOutsiteClick(blogDropReff,()=>setBlogDrop(false),blogDrop);
  useOutsiteClick(sidebarRef,()=>setSidebar(false),sidebar);
  return (
    
    <div onMouseLeave={()=>{setPagesDrop(false); setBlogDrop(false);}} className='bg-[#0e0d0d] w-full mt-5 text-white font-pop '>
      <Container>
       
       <nav onMouseLeave={()=> { setOpen(false); setShopDrop(false); setHomeDrop(false); setBlogDrop(false); }} className='flex justify-between'>
        <div>
          <ul onMouseLeave={()=>{setHomeDrop(false); setBlogDrop(false);}} className='flex gap-x-8 items-center text-sm font-pop relative'>
          <li onClick={()=>setSidebar(!sidebar)} className='p-4 bg-primry mr-30 text-[32px]'><Link to="#"><FaBars /></Link></li>
          <li onMouseEnter={()=>setOpen(!open)} ref={allcatagoryDrop} className='font-bold absolute bg-[#333333] top-0 left-[64px] p-5.5'><Link className='flex items-center gap-x-1 mr-17' to="#">All Categories <FaAngleDown className='absolute right-5.5'/></Link></li>
          <li onMouseEnter={()=>setHomeDrop(!homeDrop)}  ref={homeDropReff}><Link className='flex items-center gap-x-1 text-[#808080] hover:text-white ml-26 ' to="#">Home <FaAngleDown /></Link></li>
          <li onMouseEnter={()=>setShopDrop(!shopDrop)} ref={shopDropReff} ><Link className='flex items-center gap-x-1 text-[#808080] hover:text-white ' to="#">Shop <FaAngleDown /></Link></li>
          <li onMouseEnter={()=>setPagesDrop(!pagesDrop)}  ref={pagesDropReff}><Link className='flex items-center gap-x-1 text-[#808080] hover:text-white ' to="#">Pages <FaAngleDown /></Link></li>
          <li onMouseEnter={()=>setBlogDrop(!blogDrop)} ref={blogDropReff}><Link className='flex items-center gap-x-1 text-[#808080] hover:text-white ' to="#">Blog <FaAngleDown /></Link></li>
          <li><Link className='text-[#808080] hover:text-white' to="#">About Us </Link></li>
          <li><Link className='text-[#808080] hover:text-white' to="#">Contact Us </Link></li>
          {homeDrop &&
          <div className='bg-[#ffffff] font-pop text-sm  text-[#000000] border-2  w-15  absolute top-15 z-10 left-80 text-center'>
            <ul>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home1</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home2</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home3</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry mb-2'>Home4</li></Link>
            </ul>
          </div>}
          {shopDrop &&
          <div className='bg-[#ffffff] font-pop text-sm  text-[#000000] border-2  w-15  absolute top-15 right-88 text-center z-30'>
            <ul>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home1</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home2</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home3</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry mb-2'>Home4</li></Link>
            </ul>
          </div>}
          {pagesDrop &&
          <div className='bg-[#ffffff] font-pop text-sm  text-[#000000] border-2  w-15  absolute top-15 right-67 text-center z-20'>
            <ul>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home1</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home2</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home3</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry mb-2'>Home4</li></Link>
            </ul>
          </div>}
          {blogDrop &&
          <div className='bg-[#ffffff] font-pop text-sm  text-[#000000] border-2  w-15  absolute top-15 right-45 text-center z-40'>
            <ul>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home1</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home2</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry'>Home3</li></Link>
              <Link to="#"><li className='mt-2 hover:bg-primry mb-2'>Home4</li></Link>
            </ul>
          </div>}
        </ul>
        </div>
        
        <div className='flex items-center'>
          <Link className='flex items-center gap-x-2' to='tel:2195550114'> <FiPhoneCall /> (219) 555-0114</Link>
        </div>
        {open &&
          <div  className='absolute bg-white text-black font-pop text-bold  p-2 top-50 left-29.25 border border-[#333333] w-51.5 z-50'>
          <ul>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><FaCarrot/>Fresh Fruit</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><FaCarrot/>Vegetables</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><IoFishOutline/>River Fish</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><LiaDrumstickBiteSolid/>Chicken & Meat</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><SiBuymeacoffee/>Drink & Water</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><CgIcecream/>Yogurt & Ice Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><GiCupcake/>Cake & Bread</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><LuIceCreamBowl/>Butter & Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><PiCookingPot/>Cooking</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'> <GoPlus/>View all Category</Link></li>
          </ul>
        </div>}
       </nav>
      </Container>
      <div ref={sidebarRef} className='absolute  '>
        <div
        className={`fixed z-10 top-0 left-0 h-full w-100 transition-all duration-300 ease-in-out bg-white border border-[#E5E5E5] shadow-2xl shadow-black text-black p-5
        ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
        <h2 className="text-xl font-bold mb-6"> All Categories</h2>
        <ul className="space-y-4 absolute">
         <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><FaCarrot/>Fresh Fruit</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><FaCarrot/>Vegetables</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><IoFishOutline/>River Fish</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><LiaDrumstickBiteSolid/>Chicken & Meat</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><SiBuymeacoffee/>Drink & Water</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><CgIcecream/>Yogurt & Ice Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><GiCupcake/>Cake & Bread</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><LuIceCreamBowl/>Butter & Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'><PiCookingPot/>Cooking</Link></li>
          <li className=' hover:bg-primry p-2'><Link to="#" className='flex gap-x-1 items-center'> <GoPlus/>View all Category</Link></li>
        </ul>
      </div>
    </div>
      </div>
  )
}

export default NavBer;