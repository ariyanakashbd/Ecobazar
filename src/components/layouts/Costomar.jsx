import React from 'react'
import Container from './Container';
import { LiaShippingFastSolid } from "react-icons/lia";
import { VscPackage } from "react-icons/vsc";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import support from '../../assets/support.webp'

const Costomar = () => {
  return (
    <>
    <Container>
        <div>
            <div className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between p-6 lg:p-10 shadow-md mx-auto gap-y-6 lg:gap-y-0'>
              <div className='flex items-center gap-x-4 w-full sm:max-w-[306px] mx-auto'>
                <LiaShippingFastSolid className='text-[40px] flex-shrink-0 text-[#00B207]' />
                <div>
                  <h2 className='text-[16px] text-[#1A1A1A] font-pop font-semibold'>Free Shipping</h2>
                  <p className='font-pop text-sm text-[#999999]'>Free shipping on all your order</p>
                </div>
              </div>

              <div className='flex items-center gap-x-4 w-full sm:max-w-[306px] mx-auto'>
                <img src={support} alt='support' className='w-10 h-10 object-contain flex-shrink-0' />
                <div>
                  <h2 className='text-[16px] text-[#1A1A1A] font-pop font-semibold'>Customer Support 24/7</h2>
                  <p className='font-pop text-sm text-[#999999]'>Instant access to Support</p>
                </div>
              </div>

              <div className='flex items-center gap-x-4 w-full sm:max-w-[306px] mx-auto'>
                <IoBagCheckOutline className='text-[40px] flex-shrink-0 text-[#00B207]' />
                <div>
                  <h2 className='text-[16px] text-[#1A1A1A] font-pop font-semibold'>100% Secure Payment</h2>
                  <p className='font-pop text-sm text-[#999999]'>We ensure your money is save</p>
                </div>
              </div>

              <div className='flex items-center gap-x-4 w-full sm:max-w-[306px] mx-auto'>
                <VscPackage className='text-[40px] flex-shrink-0 text-[#00B207]' />
                <div>
                  <h2 className='text-[16px] text-[#1A1A1A] font-pop font-semibold'>Money-Back Guarantee</h2>
                  <p className='font-pop text-sm text-[#999999]'>30 Days Money-Back Guarantee</p>
                </div>
              </div>

            </div>
        </div>
    </Container>
    </>
  )
}

export default Costomar