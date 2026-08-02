import React from 'react'
import Container from './layouts/Container';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from 'react';
import { useRef } from 'react';

const Accodion = () => {
  let [show, setShow] = useState(false);
  let showRafe = useRef(null);
  
  return (
    <>
     <Container>
      <div className='mt-6 mb-5' ref={showRafe} onClick={() => setShow(!show)}>
        <h2 className='flex items-center gap-x-20 font-pop text-[20px] font-medium'>All Categories <span
  className={`text-[18px] transition-transform duration-300 ease-in-out ${
    show ? "rotate-180" : "rotate-0"}`}>
  <FaAngleDown /></span></h2>
      </div>

      { show && 
       <div >
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxOne' type="checkbox" />
          <label htmlFor="checkboxOne" className='font-pop text-sm text-[#1A1A1A]'>Fresh Fruit (25) <span className='text-[#808080]'> (134)</span></label>
          </div>
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxTwo' type="checkbox" />
          <label htmlFor="checkboxTwo" className='font-pop text-sm text-[#1A1A1A]'>Vegetables <span className='text-[#808080]'> (150)</span></label>
          </div>
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxThree' type="checkbox" />
          <label htmlFor="checkboxThree" className='font-pop text-sm text-[#1A1A1A]'>Cooking<span className='text-[#808080]'> (54)</span></label>
          </div>
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxFour' type="checkbox" />
          <label htmlFor="checkboxFour" className='font-pop text-sm text-[#1A1A1A]'>Snacks<span className='text-[#808080]'> (47)</span></label>
          </div>
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxFive' type="checkbox" />
          <label htmlFor="checkboxFive" className='font-pop text-sm text-[#1A1A1A]'>Beverages<span className='text-[#808080]'> (43)</span></label>
          </div>
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxSix' type="checkbox" />
          <label htmlFor="checkboxSix" className='font-pop text-sm text-[#1A1A1A]'>Beauty & Health<span className='text-[#808080]'> (38)</span></label>
          </div>
          <div className='flex items-center mb-2.5'>
          <input hidden id='checkboxSeven' type="checkbox" />
          <label htmlFor="checkboxSeven" className='font-pop text-sm text-[#1A1A1A]'>Bread & Bakery<span className='text-[#808080]'> (15)</span></label>
          </div>
        </div>
        }
      </Container> 
    </>
  )
}

export default Accodion