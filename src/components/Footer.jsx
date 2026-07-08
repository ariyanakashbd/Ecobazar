import React from 'react'
import Container from './layouts/Container'
import logo from '../../src/assets/Logo.webp'
import freme from '../../src/assets/Frame 142.webp'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
    <div className='bg-[#1A1A1A] w-full px-4 md:px-0'>
        <Container>
       
          <div className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-y-8 lg:gap-y-0 pt-10 lg:pt-0'>
            
           
            <div className='w-full md:w-[48%] lg:w-auto max-w-[336px]'>
                <img src={logo} alt="logo" fetchPriority="high" className='lg:mt-16.75 text-white' />
                <p className='text-[#808080] font-pop text-sm font-normal pr-8 mt-4'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                <div className='flex'>
                  <div className='font-pop font-normal text-white text-sm mt-2 '>
                    <Link className='border-b-2 border-primry pb-1' to="tel:219555-0114">(219) 555-0114</Link><span className='font-pop text-[16px] text-[#808080] font-normal mx-4'>or</span>
                    <Link className='border-b-2 border-primry pb-1' to="mailto:Proxy@gmail.com">Proxy@gmail.com</Link>
                  </div>
                </div>
            </div>

           
            <div className='w-[45%] md:w-[30%] lg:w-auto lg:mt-16.75 text-white font-pop text-[16px]'> 
                <h5>My Account</h5>
                <ul>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'><Link>My Account</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Order History</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Shoping Cart</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Wishlist</Link></li>
                </ul>
            </div>

            <div className='w-[45%] md:w-[30%] lg:w-auto'>
                <div className='lg:mt-16.75 text-white font-pop text-[16px] '>
                    <h5>Helps</h5>
                <ul>
                   <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'><Link>Contact</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Faqs</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Terms & Condition</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className='w-[45%] md:w-[30%] lg:w-auto'>
                <div className='lg:mt-16.75 text-white font-pop text-[16px] '>
                    <h5>Proxy</h5>
                <ul>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'><Link>About</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Shop</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Product</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Track Order</Link></li>
                </ul>
              </div>
            </div>

            <div className='w-[45%] md:w-[30%] lg:w-auto'>
                <div className='lg:mt-16.75 text-white font-pop text-[16px]'>
                    <h5>Categories</h5>
                <ul>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white mt-5'><Link>Fruit & Vegetablesu</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Meat & Fish</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Bread & Bakery</Link></li>
                    <li className='text-[#999999] mb-3 text-sm hover:text-white'><Link>Beauty & Health</Link></li>
                </ul>
              </div>
            </div>

          </div>

         
          <div className='border-t border-[#333333] max-w-[1320px] mt-12'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-y-0 py-7 text-center md:text-left'>
              <div className='text-sm font-pop text-[#808080]'>
                Ecobazar eCommerce © 2021. All Rights Reserved
              </div>
              <div className='cursor-pointer'>
                <img src={freme} alt="payment methods" />
              </div>
            </div>
          </div>
        </Container>
    </div>
    </>
  )
}

export default Footer