import React from 'react'
import Container from './layouts/Container'
import logo from '../../src/assets/Logo.webp'
import freme from '../../src/assets/Frame 142.webp'

const Footer = () => {
  return (
    <>
    <div className='bg-[#1A1A1A] w-full h-[370px] bottom-0'>
        <Container>
          <div className='flex justify-between'>
            <div className='max-w-[336px]'>
                <img src={logo} alt="logo" fetchPriority="high" className='mt-16.75 text-white' />
                <p className='text-[#808080] font-pop text-sm font-normal leading-120% pr-8 mt-4'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                <div className='flex'>
                    <div className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-23 after:h-[2px] after:bg-primry">
                    <p className='text-[#ffffff] font-pop text-sm font-normal leading-120% pr-3 mt-4 mb-1 cursor-pointer'>(219) 555-0114 <span className='text-[#808080] font-pop text-[16px] font-normal leading-120% mt-4 ml-3'>or</span></p>
                </div>
                <div className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-28.5 after:h-[2px] after:bg-primry">
                    <p className='text-[#ffffff] font-pop text-sm font-normal leading-120% pr-8 mt-4 cursor-pointer'> Proxy@gmail.com</p>
                    
                </div>
                </div>
            </div>
            <div className='mt-16.75 text-white font-pop text-[16px]'>My Account
                <ul >
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'>My Account</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>Order History</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>Shoping Cart</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>Wishlist</li>
                </ul>
            </div>
            <div>
                <div className='mt-16.75 text-white font-pop text-[16px] '>
                    Helps
                <ul >
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'>
                        Contact</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Faqs</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                       Terms & Condition</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Privacy Policy
                    </li>
                </ul>
            </div>
            </div>
            <div>
                <div className='mt-16.75 text-white font-pop text-[16px] '>
                    Proxy
                <ul >
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'>
                       About</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Shop</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Prodact</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Track Order</li>
                </ul>
            </div>
            </div>
            <div>
                <div className='mt-16.75 text-white font-pop text-[16px] w-[95p'>
                    Categories
                <ul >
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'>Fruit & Vegetables</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Meat & Fish</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>
                        Bread & Bakery</li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'>Beauty & Health</li>
                </ul>
            </div>
            </div>
          </div>
          <div className='flex  justify-between border-t border-[#333333] w-[1320px] h-2 mt-15'>
            <p className='py-7 text-sm font-pop text-[#808080]'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
            <div className='mt-5 cursor-pointer'>
                <img src={freme} alt="" />
            </div>
          </div>
        </Container>
    </div>
    </>
  )
}

export default Footer