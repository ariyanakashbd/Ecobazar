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
  let [sidebar , setSidebar] = useState(false);
  let allcatagoryDrop = useRef(null);
  let sidebarRef = useRef(null);
  useOutsiteClick(allcatagoryDrop,()=>setOpen(false),open);
  useOutsiteClick(sidebarRef,()=>setSidebar(false),sidebar);
  return (
    <div className='bg-[#0e0d0d] w-full mt-5 text-white font-pop '>
      <Container>
       <nav className='flex justify-between'>
        <ul className='flex gap-x-8 items-center text-sm font-pop relative'>
          <li onClick={()=>setSidebar(!sidebar)} className='p-4 bg-primry mr-30 '><Link to="#"><FaBars/></Link></li>
          <li onMouseEnter={()=>setOpen(!open)} ref={allcatagoryDrop} className='font-bold absolute bg-[#333333] top-0 left-[46px] p-3.25'><Link className='flex items-center gap-x-1 ' to="#">All Categories <FaAngleDown/></Link></li>
          <li><Link className='flex items-center gap-x-1 ]' to="#">Home <FaAngleDown /></Link></li>
          <li><Link className='flex items-center gap-x-1 ]' to="#">Shop <FaAngleDown /></Link></li>
          <li><Link className='flex items-center gap-x-1 ]' to="#">Pages <FaAngleDown /></Link></li>
          <li><Link className='flex items-center gap-x-1 ]' to="#">Blog <FaAngleDown /></Link></li>
          <li><Link to="#">About Us </Link></li>
          <li><Link to="#">Contact Us </Link></li>
        </ul>
        <div className='flex items-center'>
          <Link className='flex items-center gap-x-2' to='tel:2195550114'> <FiPhoneCall /> (219) 555-0114</Link>
        </div>
        {open &&
          <div  className='absolute bg-white text-black font-pop tbold  p-2 top-50.75 left-13 border border-[#333333] w-46.25 '>
          <ul>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><FaCarrot/>Fresh Fruit</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><FaCarrot/>Vegetables</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><IoFishOutline/>River Fish</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><LiaDrumstickBiteSolid/>Chicken & Meat</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><SiBuymeacoffee/>Drink & Water</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><CgIcecream/>Yogurt & Ice Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><GiCupcake/>Cake & Bread</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><LuIceCreamBowl/>Butter & Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><PiCookingPot/>Cooking</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'> <GoPlus/>View all Category</Link></li>
          </ul>
        </div>}
       </nav>
      </Container>
      <div ref={sidebarRef} className='absolute  '>
        <div
        className={`fixed top-0 left-0 h-full w-100 transition-all duration-300 ease-in-out bg-white border border-[#E5E5E5] shadow-2xl shadow-black z-99 text-black p-5
        ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
        <h2 className="text-xl font-bold mb-6"> All Categories</h2>
        <ul className="space-y-4">
         <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><FaCarrot/>Fresh Fruit</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><FaCarrot/>Vegetables</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><IoFishOutline/>River Fish</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><LiaDrumstickBiteSolid/>Chicken & Meat</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><SiBuymeacoffee/>Drink & Water</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><CgIcecream/>Yogurt & Ice Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><GiCupcake/>Cake & Bread</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><LuIceCreamBowl/>Butter & Cream</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'><PiCookingPot/>Cooking</Link></li>
          <li className=' hover:bg-primry p-2'><Link className='flex gap-x-1 items-center'> <GoPlus/>View all Category</Link></li>
        </ul>
      </div>
    </div>
      </div>
  )
}

export default NavBer;