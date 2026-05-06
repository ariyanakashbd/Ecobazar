import React, { useRef, useState } from 'react'
import Container from './layouts/Container';
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


const NavBer = () => {
  return (
    <div className='bg-[#0e0d0d] w-full mt-5 text-white font-pop '>
      <Container>
       <nav className='flex justify-between'>
        <ul className='flex gap-x-8 items-center text-sm font-pop relative'>
          <li className='p-4 bg-primry mr-30'><Link to="#"><FaBars/></Link></li>
          <li className='font-bold absolute bg-[#333333] top-0 left-[46px] p-3.25'><Link className='flex items-center gap-x-1 ' to="#">All Categories <FaAngleDown/></Link></li>
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
       </nav>
      </Container>
    </div>
  )
}

export default NavBer;